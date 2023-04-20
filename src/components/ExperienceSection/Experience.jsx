import React from 'react';
import EditField from '../EditField';

const Experience = () => {

  const [companyName, setCompanyName] = React.useState('Facebook');
  const [workDateRange, setWorkDateRange] = React.useState('20xx-20xx');
  const [jobTitle, setJobTitle] = React.useState('Junior Software Developer');

  const handleCompanyName = (newText) => {
    setCompanyName(newText);
  }

  const handleWorkDateRange = (newText) => {
    setWorkDateRange(newText);
  }

  const handleJobTitle = (newText) => {
    setJobTitle(newText);
  }

  return (
    <div className='resume-experience'>
      <div className='experience-header'>Experience</div>
      <div className='experience-block'>
        <div className='experience-info'>
          <EditField 
            value={companyName}
            onTextChange={handleCompanyName}
            textClass='education-info'
            inputClass='edit-education-info'
          />
          <EditField 
            value={workDateRange}
            onTextChange={handleWorkDateRange}
            textClass='education-info'
            inputClass='edit-education-info'
          />
        </div>
        <EditField 
            value={jobTitle}
            onTextChange={handleJobTitle}
            textClass='education-info'
            inputClass='edit-education-info'
          />
        <div className='experience-description'>
          <div className='experience-bullet'>*</div>
        </div>
      </div>
    </div>
  )
}

export default Experience;