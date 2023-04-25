import React from 'react';
import EditField from '../EditField';
import AddBulletPointBtn from '../BulletPoint/AddBulletPointBtn';
import BulletPoints from '../BulletPoint/BulletPoints'

const EducationSection = () => {

  const [schoolName, setSchoolName] = React.useState('Something University');
  const [attendRange, setAttendRange] = React.useState('20XX-20XX');
  const [degree, setDegree] = React.useState('Bachelor of Science, CS');
  const [bulletPoints, setBulletPoints] = React.useState([]);

  const handleSchoolNameChange = (newText) => {
    setSchoolName(newText);
  }

  const handleAttendRange = (newText) => {
    setAttendRange(newText);
  }

  const handleSetDegree = (newText) => {
    setDegree(newText);
  }

  const handleAddBulletPoint = () => {
    if (bulletPoints.length > 2) return;
    setBulletPoints([...bulletPoints, { text: 'Edit education information' }]);
  }

  return (
    <div className='resume-education'>
      <div className='education-header'>Education
        <AddBulletPointBtn addBulletPoint={handleAddBulletPoint}/>
      </div>
      <div className='education-subheader bold'>
        <EditField 
          value={schoolName}
          onTextChange={handleSchoolNameChange}
          textClass='education-info'
          inputClass='edit-education-info left'
        />
        <EditField 
          value={attendRange}
          onTextChange={handleAttendRange}
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
      <div className='education-description'>
        <BulletPoints 
          bulletPoints={bulletPoints} 
          setBulletPoints={setBulletPoints}
        />
    </div>
  </div>
  )
}

export default EducationSection;