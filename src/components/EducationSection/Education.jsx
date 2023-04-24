import React from 'react';
import EditField from '../EditField';

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

  const handleAddBulletPoint = () => {
    setBulletPoints([...bulletPoints, { text: '->'+'Edit me!' }]);
  }

  const handleBulletTextChange = (newText, index) => {
    const newBulletPoints = [...bulletPoints];
    newBulletPoints[index] = { text: '->'+newText };
    setBulletPoints(newBulletPoints);
  }

  const handleDeleteBulletPoint = (index) => {
    const newBulletPoints = [...bulletPoints];
    newBulletPoints.splice(index, 1);
    setBulletPoints(newBulletPoints);
  }

  return (
    <div className='resume-education'>
      <div className='education-header'>Education
        <span>
          <button className='add-btn edu-btn' onClick={handleAddBulletPoint}>+</button>
        </span>
      </div>
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
      <div className='education-description'>
        {bulletPoints.map((bulletPoint, index) => (
          <div className='bullet-point' key={index}>
            <div>
              <EditField
                value={bulletPoint.text}
                onTextChange={(newText) => handleBulletTextChange(newText, index)}
                textClass='bullet-text'
                inputClass='edit-bullet-text left'
              />
            </div>
            <button className='delete-bullet-btn' onClick={() => handleDeleteBulletPoint(index)}>x</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education;