import HeaderSection from './Header/HeaderSection';
import EducationSection from './Education/EducationSection';
import ExperienceSection from './Experience/ExperienceSection';
import SkillsSection from './Skills/SkillsSection';

const Document = () => {
  return (
    <div className='document'>
      <HeaderSection/>
      <EducationSection/>
      <ExperienceSection/>
      <SkillsSection/>
    </div>
  )
}

export default Document;