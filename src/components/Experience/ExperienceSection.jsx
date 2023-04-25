import React from 'react';
import EditField from '../EditField';
import AddExperienceBtn from './AddExperienceButton';

const ExperienceSection = () => {

  const [experienceBlocks, setExperienceBlocks] = React.useState([]);

  const handleAddExperience = () => {
    setExperienceBlocks([...experienceBlocks, { 
      companyName: 'Apple', 
      workDateRange: '20XX-20XX', 
      jobTitle: 'Software Developer'
    }]);
  }

  const handleExperienceUpdate = (index, property, newText) => {
    setExperienceBlocks(experienceBlocks.map((block, i) => {
      if (i !== index) return block;
      return { ...block, [property]: newText };
    }));
  }

  const handleDeleteExperience = (index) => {
    setExperienceBlocks(experienceBlocks.filter((block, i) => i !== index));
  };

  return (
    <div className='resume-experience'>
      <div className='experience-header'>Experience
        <AddExperienceBtn addExperience={handleAddExperience} />
      </div>
      {experienceBlocks.map((block, index) => (
        <div className='experience-block' key={index}>
          <button className='delete-btn' onClick={() => handleDeleteExperience(index)}>X</button>
          <div className='experience-subheader bold'>
            <EditField 
              value={block.companyName}
              onTextChange={(newText) => handleExperienceUpdate(index, 'companyName', newText)}
              textClass='experience-info'
              inputClass='edit-experience-info left'
            />
            <EditField 
              value={block.workDateRange}
              onTextChange={(newText) => handleExperienceUpdate(index, 'workDateRange', newText)}
              textClass='experience-info'
              inputClass='edit-experience-info right'
            />
          </div>
          <div className='experience-subheader italic'>
            <EditField 
              value={block.jobTitle}
              onTextChange={(newText) => handleExperienceUpdate(index, 'jobTitle', newText)}
              textClass='experience-info' 
              inputClass='edit-experience-info left'
            />
          </div>
          <div className='experience-description'>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ExperienceSection;