import Header from './Header';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

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