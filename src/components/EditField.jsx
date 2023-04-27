import React, { useState, useEffect, useRef } from 'react';

const EditField = ({ value, onTextChange, textClass, inputClass }) => {

  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(value);
  const [inputWidth, setInputWidth] = useState('auto');
  const inputRef = useRef();
  
  const handleEdit = () => {
    setEditing(true);
  }

  const handleChange = (e) => {
    setNewText(e.target.value);
  }

  const handleSave = (e) => {
    if ((e.type === 'keydown' && e.key === 'Enter') || (e.type === 'blur')) {
      onTextChange(newText);
      setEditing(false);
    }
  }

  useEffect(() => {
    const span = document.createElement('span');
    span.textContent = newText;
    document.body.appendChild(span);
    setInputWidth(span.offsetWidth + 2);
    document.body.removeChild(span);
  }, [newText]);

  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  return (
    <>
      {editing ? (
        <input 
          type='text' 
          value={newText} 
          ref={inputRef}
          onChange={handleChange} 
          onKeyDown={handleSave}
          onBlur={handleSave} 
          className={inputClass}
          style={{ width: `${inputWidth}px`}}
        />
      ) : (
        <div onClick={handleEdit} className={textClass}>
          {value}
        </div>
      )}
    </>
  )
}

export default EditField;