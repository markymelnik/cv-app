import React from 'react';

const EditField = ({ value, onTextChange, textClass, inputClass }) => {

  const [editing, setEditing] = React.useState(false);
  const [newText, setNewText] = React.useState(value);
  const inputWidth = useInputWidth(newText);
  const inputRef = React.useRef();
  
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

  React.useEffect(() => {
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

const useInputWidth = (newText) => {
  const [inputWidth, setInputWidth] = React.useState('auto');

  React.useEffect(() => {
    const span = document.createElement('span');

    span.textContent = newText;
    document.body.appendChild(span);

    setInputWidth(span.offsetWidth + 2);
    document.body.removeChild(span);
  }, [newText]);

  return inputWidth;
};

export default EditField;