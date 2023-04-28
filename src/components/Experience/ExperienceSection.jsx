import React from "react";
import EditField from "../Editing/EditField";
import EditButton from "../Editing/EditButton";
import BulletPoints from "../BulletPoints/BulletPoints";
import './experienceSection.css';

const ExperienceSection = ({ toggleButtons }) => {
  const [experienceBlocks, setExperienceBlocks] = React.useState([]);

  const handleAddExperience = () => {
    if (experienceBlocks.length > 7) return;
    setExperienceBlocks([
      ...experienceBlocks,
      {
        companyName: "Company Name",
        workDateRange: "20XX-20XX",
        jobTitle: "Job Title",
        bulletPoints: [],
      },
    ]);
  };

  const handleExperienceUpdate = (
    experienceIndex,
    property,
    newText,
    bulletPoints
  ) => {
    setExperienceBlocks(
      experienceBlocks.map((block, i) => {
        if (i !== experienceIndex) return block;
        return { ...block, [property]: newText, bulletPoints };
      })
    );
  };

  const handleDeleteExperience = (experienceIndex) => {
    setExperienceBlocks(
      experienceBlocks.filter((block, i) => i !== experienceIndex)
    );
  };

  const handleAddBulletPoint = (experienceIndex, bulletPoints) => {
    if (bulletPoints.length > 2) return;
    const newExperienceBlocks = [...experienceBlocks];
    const experienceBlock = newExperienceBlocks[experienceIndex];
    experienceBlock.bulletPoints = [
      ...experienceBlock.bulletPoints,
      { text: "Edit experience information" },
    ];
    setExperienceBlocks(newExperienceBlocks);
  };

  const handleDeleteBulletPoint = (bulletIndex, experienceIndex) => {
    const newExperienceBlocks = [...experienceBlocks];
    const experienceBlock = newExperienceBlocks[experienceIndex];
    const newBulletPoints = [...experienceBlock.bulletPoints];
    newBulletPoints.splice(bulletIndex, 1);
    experienceBlock.bulletPoints = newBulletPoints;
    setExperienceBlocks(newExperienceBlocks);
  };

  return (
    <div className="resume-experience">
      <div className="experience-header">
        Experience
        <EditButton
          cssClass="add-btn"
          btnContent="+"
          onBtnClick={handleAddExperience}
          toggleButtons={toggleButtons}
        />
      </div>
      {experienceBlocks.map((block, experienceIndex) => (
        <div className="experience-block" key={experienceIndex}>
          <div className="experience-subheader">
            <div className="experience-wrapper">
              <EditField
                value={block.companyName}
                onTextChange={(newText) =>
                  handleExperienceUpdate(
                    experienceIndex,
                    "companyName",
                    newText,
                    block.bulletPoints
                  )
                }
                textClass="experience-info bold"
                inputClass="edit-experience-info bold left"
              />

              <EditButton
                cssClass="delete-btn"
                btnContent="×"
                onBtnClick={() => handleDeleteExperience(experienceIndex)}
                toggleButtons={toggleButtons}
              />
            </div>
            <EditField
              value={block.workDateRange}
              onTextChange={(newText) =>
                handleExperienceUpdate(
                  experienceIndex,
                  "workDateRange",
                  newText,
                  block.bulletPoints
                )
              }
              textClass="experience-info"
              inputClass="edit-experience-info right"
            />
          </div>
          <div className="experience-subheader">
            <EditField
              value={block.jobTitle}
              onTextChange={(newText) =>
                handleExperienceUpdate(
                  experienceIndex,
                  "jobTitle",
                  newText,
                  block.bulletPoints
                )
              }
              textClass="experience-info italic"
              inputClass="edit-experience-info italic left"
            />

            <EditButton
              cssClass="add-btn"
              btnContent="+"
              onBtnClick={() =>
                handleAddBulletPoint(experienceIndex, block.bulletPoints)
              }
              toggleButtons={toggleButtons}
            />
          </div>
          <div className="experience-description">
            <BulletPoints
              bulletPoints={block.bulletPoints}
              setBulletPoints={(newBulletPoints) =>
                handleExperienceUpdate(
                  experienceIndex,
                  "bulletPoints",
                  newBulletPoints,
                  newBulletPoints
                )
              }
              handleDeleteBulletPoint={(bulletIndex) =>
                handleDeleteBulletPoint(bulletIndex, experienceIndex)
              }
              toggleButtons={toggleButtons}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;