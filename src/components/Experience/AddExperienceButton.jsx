const AddExperienceButton = ({ addExperience }) => {

  return (
    <span>
      <button className='add-btn exp-btn' onClick={addExperience}>+</button>
    </span>
  )
}

export default AddExperienceButton;