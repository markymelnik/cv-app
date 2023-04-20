import Header from './HeaderSection/Header';
import Education from './EducationSection/Education';
import Experience from './ExperienceSection/Experience';
import Skills from './SkillsSection/Skills';

const Page = () => {
  return (
    <div className='page'>
      <Header/>
      <Education/>
      <Experience/>
      <Skills/>
    </div>
  )
}

export default Page;