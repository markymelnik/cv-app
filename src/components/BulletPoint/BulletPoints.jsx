import React from 'react';
import EditField from '../EditField';

const BulletPoints = ({ bulletPoints, setBulletPoints }) => {

  const handleBulletTextChange = (newText, index) => {
    const newBulletPoints = [...bulletPoints];
    newBulletPoints[index] = { text: newText };
    setBulletPoints(newBulletPoints);
  }

  const handleDeleteBulletPoint = (index) => {
    const newBulletPoints = [...bulletPoints];
    newBulletPoints.splice(index, 1);
    setBulletPoints(newBulletPoints);
  }

  return (
    <>
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
          <button className='delete-btn' onClick={() => handleDeleteBulletPoint(index)}>x</button>
        </div>
      ))}
    </>
  )
}

export default BulletPoints;