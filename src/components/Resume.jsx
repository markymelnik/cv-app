import HeaderSection from "./Header/HeaderSection";
import EducationSection from "./Education/EducationSection";
import ExperienceSection from "./Experience/ExperienceSection";
import SkillsSection from "./Skills/SkillsSection";

const Resume = ({ toggleButtons, resumeRef }) => {
  
  return (
    <>
      <div className="resume-document" ref={resumeRef}>
        <HeaderSection />
        <EducationSection toggleButtons={toggleButtons} />
        <ExperienceSection toggleButtons={toggleButtons} />
        <SkillsSection toggleButtons={toggleButtons} />
      </div>
    </>
  );
};

export default Resume;
