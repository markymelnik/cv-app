import React from 'react';

const EditField = ({ value, onTextChange }) => {

  const [editing, setEditing] = React.useState(false);
  const [newText, setNewText] = React.useState(value);

  const handleEdit = () => {
    setEditing(true);
  }

  const handleChange = (e) => {
    setNewText(e.target.value);
  }

  const handleSave = (e) => {
    if (e.key === 'Enter') {
      onTextChange(newText);
      setEditing(false);
    }
  }

  return (
    <>
      {editing ? (
        <input type='text' value={newText} onChange={handleChange} onKeyDown={handleSave}/>
      ) : (
        <div className='edit-field' onClick={handleEdit}>{value}</div>
      )}
    </>
  )
}

export default EditField;