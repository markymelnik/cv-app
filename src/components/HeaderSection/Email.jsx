import React from 'react';

const Email = ({ email, editEmail }) => {

  const [editing, setEditing] = React.useState(false);
  const [newText, setNewText] = React.useState(email);

  const handleEdit = () => {
    setEditing(true);
  }

  const handleChange = (e) => {
    setNewText(e.target.value);
  }

  const handleSave = (e) => {
    if (e.key === 'Enter') {
      editEmail(newText);
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
        <div className='info-email' onClick={handleEdit}>{email}</div>
      </>
      
    )
  }

}

export default Email;