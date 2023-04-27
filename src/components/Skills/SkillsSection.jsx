import React from "react";
import EditField from "../EditField";
import EditButton from "../EditButton";

const SkillsSection = ({ toggleButtons }) => {
  const [skills, setSkills] = React.useState([]);
  const [hoveredSkill, setHoveredSkill] = React.useState(-1);

  const handleSkillUpdate = (skillIndex, newText) => {
    const newSkills = [...skills];
    newSkills[skillIndex] = { text: newText };
    setSkills(newSkills);
  };

  const handleAddSkill = () => {
    if (skills.length > 11) return;
    setSkills([...skills, { text: "Edit Skill" }]);
  };

  const handleDeleteSkill = (skillIndex) => {
    setSkills(skills.filter((skill, i) => i !== skillIndex));
    setHoveredSkill(-1);
  };

  return (
    <div className="resume-skills">
      <div className="skills-header">
        Skills
        <EditButton
          cssClass="add-btn"
          btnContent="+"
          onBtnClick={handleAddSkill}
          toggleButtons={toggleButtons}
        />
      </div>
      <div className="skills-container">
        {skills.map((skill, skillIndex) => (
          <div className="skill-block" key={skillIndex}>
            <div
              className={`skill-text ${
                hoveredSkill === skillIndex ? "hovered" : ""
              }`}
            >
              <EditField
                value={skill.text}
                onMouseEnter={() => setHoveredSkill(skillIndex)}
                onMouseLeave={() => setHoveredSkill(-1)}
                onTextChange={(newText) =>
                  handleSkillUpdate(skillIndex, newText)
                }
                textClass="skill-text"
                inputClass="edit-skill-text"
              />
            </div>

            <EditButton
              cssClass="delete-btn"
              btnContent="×"
              onBtnClick={() => handleDeleteSkill(skillIndex)}
              toggleButtons={toggleButtons}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
