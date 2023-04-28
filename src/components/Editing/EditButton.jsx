import './editButton.css';

const EditButton = ({ onBtnClick, cssClass, btnContent, toggleButtons }) => {
  return (
    <span>
      {toggleButtons && (
        <button className={cssClass} onClick={onBtnClick}>
          {btnContent}
        </button>
      )}
    </span>
  );
};

export default EditButton;