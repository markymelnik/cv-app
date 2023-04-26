import React from 'react';
import EditField from '../EditField';
import Button from '../Button';

const SkillsSection = () => {

  const [skills, setSkills] = React.useState([]);
  const [hoveredSkill, setHoveredSkill] = React.useState(-1);

  const handleSkillUpdate = (skillIndex, newText) => {
    const newSkills = [...skills];
    newSkills[skillIndex] = { text: newText };
    setSkills(newSkills);
  }

  const handleAddSkill = () => {
    if (skills.length > 11) return;
    setSkills([...skills, { text: 'Edit Skill'}])
  }

  const handleDeleteSkill = (skillIndex) => {
    setSkills(skills.filter((skill, i) => i !== skillIndex));
    setHoveredSkill(-1);
  }

  return (
    <div className='resume-skills'>
      <div className='skills-header'>Skills
        <Button cssClass='add-btn' btnContent='+' onBtnClick={handleAddSkill}/>
      </div>
      <div className='skills-container'>
        {skills.map((skill, skillIndex) =>
          <div className='skill-block' key={skillIndex} >
            <div className={`skill-text ${hoveredSkill === skillIndex ? 'hovered' : ''}`}>
              <EditField 
                value={skill.text}
                onMouseEnter={() => setHoveredSkill(skillIndex)}
                onMouseLeave={() => setHoveredSkill(-1)}
                onTextChange={(newText) => handleSkillUpdate(skillIndex, newText)}
                textClass='skill-text'
                inputClass='edit-skill-text'
              />
            </div>
            <Button cssClass='delete-btn' btnContent='×' onBtnClick={() => handleDeleteSkill(skillIndex)} />
          </div>
        )}
      </div> 
    </div>
  )

}

export default SkillsSection;