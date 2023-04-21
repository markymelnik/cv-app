import React from 'react';
import EditField from '../EditField';
import BulletPoint from '../BulletPoint';

const Education = () => {

  const [schoolName, setSchoolName] = React.useState('Something University');
  const [schoolAttendRange, setSchoolAttendRange] = React.useState('20xx-20xx');
  const [degree, setDegree] = React.useState('Bachelor of Science, CS');
  const [bulletPoints, setBulletPoints] = React.useState([]);

  const handleSchoolNameChange = (newText) => {
    setSchoolName(newText);
  }

  const handleSchoolAttendRange = (newText) => {
    setSchoolAttendRange(newText);
  }

  const handleSetDegree = (newText) => {
    setDegree(newText);
  }

  const handleAddBullet = (newBullet) => {
    setBullets([...bulletPoints, newBullet]);
  }

  const handleDeleteBullet = (index) => {
    const newBullets = [...bulletPoints];
    newBullets.splice(index, 1);
    setBulletPoints(newBullets);
  }

  return (
    <div className='resume-education'>
      <div className='education-header'>Education</div>
      <div className='education-subheader bold'>
        <EditField 
          value={schoolName}
          onTextChange={handleSchoolNameChange}
          textClass='education-info'
          inputClass='edit-education-info left'
        />
        <EditField 
          value={schoolAttendRange}
          onTextChange={handleSchoolAttendRange}
          textClass='education-info'
          inputClass='edit-education-info right'
        />
      </div>
      <div className='education-subheader italic'>
        <EditField 
          value={degree}
          onTextChange={handleSetDegree}
          textClass='education-info'
          inputClass='edit-education-info left'
        />
      </div>
      <div className='education-description'></div>
    </div> 
  )
}

export default Education;
