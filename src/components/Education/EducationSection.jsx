import React from 'react';
import EditField from '../EditField';
import Button from '../Button';
import BulletPoints from '../BulletPoint/BulletPoints'

const EducationSection = () => {

  const [educationInfo, setEducationInfo] = React.useState([{
    schoolName: 'Something University',
    attendRange: '20XX-20XX',
    degree: 'Bachelor of Science, Neuroscience'
  }])

  const [bulletPoints, setBulletPoints] = React.useState([]);

  const handleEducationUpdate = (property, newText) => {
    setEducationInfo(educationInfo => {
      const updatedEducationInfo = [...educationInfo];
      updatedEducationInfo[0][property] = newText;
      return updatedEducationInfo;
    })
  }

  const handleAddBulletPoint = () => {
    if (bulletPoints.length > 2) return;
    setBulletPoints([...bulletPoints, { text: 'Edit education information' }]);
  }

  return (
    <div className='resume-education'>
      <div className='education-header'>Education
        <Button cssClass='add-btn' btnContent='+' onBtnClick={handleAddBulletPoint}/>
      </div>
      <div className='education-subheader bold'>
        <EditField 
          value={educationInfo[0].schoolName}
          onTextChange={(newText) => handleEducationUpdate('schoolName', newText)}
          textClass='education-info'
          inputClass='edit-education-info left'
        />
        <EditField 
          value={educationInfo[0].attendRange}
          onTextChange={(newText) => handleEducationUpdate('attendRange', newText)}
          textClass='education-info'
          inputClass='edit-education-info right'
        />
      </div>
      <div className='education-subheader italic'>
        <EditField 
          value={educationInfo[0].degree}
          onTextChange={(newText) => handleEducationUpdate('degree', newText)}
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