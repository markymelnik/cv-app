import React from 'react';
import EditField from '../EditField';

const Skills = () => {

  const [skill, setSkill] = React.useState('JavaScript');

  const handleSkill = (newText) => {
    setSkill(newText);
  }

  return (
    <div className='resume-skills'>
      <div className='skills-header'>Skills</div>
      <div className='skills-container'>
        <EditField 
          value={skill}
          onTextChange={handleSkill}
          textClass='education-info'
          inputClass='edit-education-info'
        />
      </div>
    </div>
  )
}

export default Skills;