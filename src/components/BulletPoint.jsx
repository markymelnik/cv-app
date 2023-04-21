import React from 'react';

const BulletPoint = () => {

  const handleClick = () => {

  }

  return (
    <div className='btn-container'>
      <button className='add-btn edu-btn' onClick={handleClick}>+</button>
      <button className='add-btn exp-btn' onClick={handleClick}>+</button>
      <button className='add-btn skil-btn' onClick={handleClick}>+</button>
    </div>
  )
}

export default BulletPoint;