import React, { useState } from "react";

const Controller = ({ onToggleButtons }) => {
  const [btnContent, setBtnContent] = useState("Hide Add/Remove");

  const handleBtnClick = () => {
    onToggleButtons();
    setBtnContent(
      btnContent === "Hide Add/Remove" ? "Show Add/Remove" : "Hide Add/Remove"
    );
  };

  return (
    <button className="toggle-btns-btn" onClick={handleBtnClick}>
      {btnContent}
    </button>
  );
};

export default Controller;
