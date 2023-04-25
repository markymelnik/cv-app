const Button = ({ onBtnClick, cssClass, btnContent }) => {

  return (
    <span>
      <button className={cssClass} onClick={onBtnClick}>
        {btnContent}
      </button>
    </span>
  )
}

export default Button;