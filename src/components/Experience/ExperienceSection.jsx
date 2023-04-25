import React from 'react';
import EditField from '../EditField';
import AddExperienceButton from './AddExperienceButton';

const ExperienceSection = () => {

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
      <div className='experience-header'>Experience
        <AddExperienceButton/>
      </div>
      <div className='experience-block'>
        <div className='experience-subheader bold'>
          <EditField 
            value={companyName}
            onTextChange={handleCompanyName}
            textClass='experience-info'
            inputClass='edit-experience-info left'
          />
          <EditField 
            value={workDateRange}
            onTextChange={handleWorkDateRange}
            textClass='experience-info'
            inputClass='edit-experience-info right'
          />
        </div>
        <div className='experience-subheader italic'>
          <EditField 
            value={jobTitle}
            onTextChange={handleJobTitle}
            textClass='experience-info' 
            inputClass='edit-experience-info left'
          />
        </div>
        <div className='experience-description'>
          
        </div>
      </div>
    </div>
  )
}

export default ExperienceSection;