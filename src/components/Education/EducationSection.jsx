import React from "react";
import EditField from "../EditField";
import EditButton from "../EditButton";
import BulletPoints from "../BulletPoints";

const EducationSection = ({ toggleButtons }) => {
  const [educationInfo, setEducationInfo] = React.useState([
    {
      schoolName: "Something University",
      attendRange: "20XX-20XX",
      degree: "Bachelor of Science, Neuroscience",
    },
  ]);

  const [bulletPoints, setBulletPoints] = React.useState([]);

  const handleEducationUpdate = (property, newText) => {
    setEducationInfo((educationInfo) => {
      const updatedEducationInfo = [...educationInfo];
      updatedEducationInfo[0][property] = newText;
      return updatedEducationInfo;
    });
  };

  const handleAddBulletPoint = () => {
    if (bulletPoints.length > 2) return;
    setBulletPoints([...bulletPoints, { text: "Edit education information" }]);
  };

  return (
    <div className="resume-education">
      <div className="education-header">Education</div>
      <div className="education-subheader">
        <EditField
          value={educationInfo[0].schoolName}
          onTextChange={(newText) =>
            handleEducationUpdate("schoolName", newText)
          }
          textClass="education-info bold"
          inputClass="edit-education-info bold left"
        />
        <EditField
          value={educationInfo[0].attendRange}
          onTextChange={(newText) =>
            handleEducationUpdate("attendRange", newText)
          }
          textClass="education-info"
          inputClass="edit-education-info right"
        />
      </div>
      <div className="education-subheader">
        <EditField
          value={educationInfo[0].degree}
          onTextChange={(newText) => handleEducationUpdate("degree", newText)}
          textClass="education-info italic"
          inputClass="edit-education-info italic left"
        />
        <EditButton
          cssClass="add-btn"
          btnContent="+"
          onBtnClick={handleAddBulletPoint}
          toggleButtons={toggleButtons}
        />
      </div>
      <div className="education-description">
        <BulletPoints
          bulletPoints={bulletPoints}
          setBulletPoints={setBulletPoints}
          toggleButtons={toggleButtons}
        />
      </div>
    </div>
  );
};

export default EducationSection;
