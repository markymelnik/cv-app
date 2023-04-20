import React from 'react';
import EditField from '../EditField';

const Education = () => {

  const [schoolName, setSchoolName] = React.useState('Something University');
  const [schoolAttendRange, setSchoolAttendRange] = React.useState('20xx-20xx');
  const [degree, setDegree] = React.useState('Bachelor of Science, CS');

  const handleSchoolNameChange = (newText) => {
    setSchoolName(newText);
  }

  const handleSchoolAttendRange = (newText) => {
    setSchoolAttendRange(newText);
  }

  const handleSetDegree = (newText) => {
    setDegree(newText);
  }


  return (
    <div className='resume-education'>
      <div className='education-header'>Education</div>
      <div className='education-school'>
        <EditField 
          value={schoolName}
          onTextChange={handleSchoolNameChange}
          textClass='education-info'
          inputClass='edit-education-info'
        />
        <EditField 
          value={schoolAttendRange}
          onTextChange={handleSchoolAttendRange}
          textClass='education-info'
          inputClass='edit-education-info'
        />
      </div>
      <EditField 
          value={degree}
          onTextChange={handleSetDegree}
          textClass='education-info'
          inputClass='edit-education-info'
        />
      <div className='education-description'>
        <div className='education-bullet'>*</div>
      </div>
    </div> 
  )
}

export default Education;
