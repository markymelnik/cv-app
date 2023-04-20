import React from 'react';

const Name = ({ name, editName }) => {

  const [editing, setEditing] = React.useState(false);
  const [newText, setNewText] = React.useState(name);

  const handleEdit = () => {
    setEditing(true);
  }

  const handleChange = (e) => {
    setNewText(e.target.value);
  }

  const handleSave = (e) => {
    if (e.key === 'Enter') {
      editName(newText);
      setEditing(false);
    }
  }
  
  if (editing) {
    return (
      <>
        <input type='text' value={newText} onChange={handleChange} onKeyDown={handleSave} />
      </>
    )
  } else {
    return (
      <>
        <div className='header-name' onClick={handleEdit}>{name}</div>
      </>
      
    )
  }

}

export default Name;