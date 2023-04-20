import Header from './HeaderSection/Header';
import Education from './EducationSection/Education';
import Experience from './ExperienceSection/Experience';
import Skills from './SkillsSection/Skills';

const Document = () => {
  return (
    <div className='document'>
      <Header/>
      <Education/>
      <Experience/>
      <Skills/>
    </div>
  )
}

export default Document;