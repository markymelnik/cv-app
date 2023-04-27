import React, { useState } from "react";
import PDFDownload from './PDFDownload';

const Controller = ({ onToggleButtons, resumeRef }) => {
  const [toggleBtnContent, setToggleBtnContent] = useState("Hide Add/Remove");

  const handleBtnClick = () => {
    onToggleButtons();
    setToggleBtnContent(
      toggleBtnContent === "Hide Add/Remove" ? "Show Add/Remove" : "Hide Add/Remove"
    );
  };

  return (
    <div className="tool-document">
      <button className='toggle-btns-btn' onClick={handleBtnClick}>{toggleBtnContent}</button>
      <PDFDownload resumeRef={resumeRef} />
    </div>
  );
};

export default Controller;