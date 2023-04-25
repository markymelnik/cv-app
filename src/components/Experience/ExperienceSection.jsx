import React from 'react';
import EditField from '../EditField';
import AddExperienceBtn from './AddExperienceButton';
import AddBulletPointBtn from '../BulletPoint/AddBulletPointBtn';
import BulletPoints from '../BulletPoint/BulletPoints';

const ExperienceSection = () => {

  const [experienceBlocks, setExperienceBlocks] = React.useState([]);

  const handleAddExperience = () => {
    if (experienceBlocks.length > 5) return;
    setExperienceBlocks([
      ...experienceBlocks, 
      { 
        companyName: 'Apple', 
        workDateRange: '20XX-20XX', 
        jobTitle: 'Software Developer',
        bulletPoints: [],
      }
    ]);
  }

  const handleExperienceUpdate = (experienceIndex, property, newText, bulletPoints) => {
    setExperienceBlocks(experienceBlocks.map((block, i) => {
      if (i !== experienceIndex) return block;
      return { ...block, [property]: newText, bulletPoints };
    }));
  }

  const handleDeleteExperience = (experienceIndex) => {
    setExperienceBlocks(experienceBlocks.filter((block, i) => i !== experienceIndex));
  };

  const handleAddBulletPoint = (experienceIndex, bulletPoints) => {
    if (bulletPoints.length > 2) return;
    const newExperienceBlocks = [...experienceBlocks];
    const experienceBlock = newExperienceBlocks[experienceIndex];
    experienceBlock.bulletPoints = [...experienceBlock.bulletPoints, { text: 'Edit bullet point'}];
    setExperienceBlocks(newExperienceBlocks);
  }

  const handleDeleteBulletPoint = (bulletIndex, experienceIndex) => {
    const newExperienceBlocks = [...experienceBlocks];
    const experienceBlock = newExperienceBlocks[experienceIndex];
    const newBulletPoints = [...experienceBlock.bulletPoints];
    newBulletPoints.splice(bulletIndex, 1);
    experienceBlock.bulletPoints = newBulletPoints;
    setExperienceBlocks(newExperienceBlocks);
  }
  
  return (
    <div className='resume-experience'>
      <div className='experience-header'>Experience
        <AddExperienceBtn addExperience={handleAddExperience} />
      </div>
      {experienceBlocks.map((block, experienceIndex) => (
        <div className='experience-block' key={experienceIndex}>
          <button className='delete-btn' onClick={() => handleDeleteExperience(experienceIndex)}>X</button>
          <div className='experience-subheader bold'>
            <EditField 
              value={block.companyName}
              onTextChange={(newText) => handleExperienceUpdate(experienceIndex, 'companyName', newText, block.bulletPoints)}
              textClass='experience-info'
              inputClass='edit-experience-info left'
            />
            <EditField 
              value={block.workDateRange}
              onTextChange={(newText) => handleExperienceUpdate(experienceIndex, 'workDateRange', newText, block.bulletPoints)}
              textClass='experience-info'
              inputClass='edit-experience-info right'
            />
          </div>
          <div className='experience-subheader italic'>
            <EditField 
              value={block.jobTitle}
              onTextChange={(newText) => handleExperienceUpdate(experienceIndex, 'jobTitle', newText, block.bulletPoints)}
              textClass='experience-info' 
              inputClass='edit-experience-info left'
            />
            <AddBulletPointBtn
              addBulletPoint={() => handleAddBulletPoint(experienceIndex, block.bulletPoints)}
            />
          </div>
          <div className='experience-description'>
          <BulletPoints
            bulletPoints={block.bulletPoints}
            setBulletPoints={(newBulletPoints) => handleExperienceUpdate(experienceIndex, 'bulletPoints', newBulletPoints, newBulletPoints)}
            handleDeleteBulletPoint={(bulletIndex) => handleDeleteBulletPoint(bulletIndex, experienceIndex)}
          />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ExperienceSection;