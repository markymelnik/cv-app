import React, { useState } from "react";
import HeaderSection from "./Header/HeaderSection";
import EducationSection from "./Education/EducationSection";
import ExperienceSection from "./Experience/ExperienceSection";
import SkillsSection from "./Skills/SkillsSection";
import Controller from "./Controller";

const Document = () => {
  const [toggleButtons, setToggleButtons] = useState(true);

  const handleToggleButtons = () => {
    setToggleButtons(!toggleButtons);
  };

  return (
    <>
      <div className="tool-document">
        <Controller onToggleButtons={handleToggleButtons} />
      </div>
      <div className="resume-document">
        <HeaderSection />
        <EducationSection toggleButtons={toggleButtons} />
        <ExperienceSection toggleButtons={toggleButtons} />
        <SkillsSection toggleButtons={toggleButtons} />
      </div>
    </>
  );
};

export default Document;
