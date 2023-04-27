import EditField from "./EditField";
import EditButton from "./EditButton";

const BulletPoints = ({ bulletPoints, setBulletPoints, toggleButtons }) => {
  const handleBulletTextChange = (newText, bulletIndex) => {
    const newBulletPoints = [...bulletPoints];
    newBulletPoints[bulletIndex] = { text: newText };
    setBulletPoints(newBulletPoints);
  };

  const handleDeleteBulletPoint = (bulletIndex) => {
    const newBulletPoints = [...bulletPoints];
    newBulletPoints.splice(bulletIndex, 1);
    setBulletPoints(newBulletPoints);
  };

  return (
    <>
      {bulletPoints.map((bulletPoint, bulletIndex) => (
        <div className="bullet-point" key={bulletIndex}>
          <div>
            <EditField
              value={bulletPoint.text}
              onTextChange={(newText) =>
                handleBulletTextChange(newText, bulletIndex)
              }
              textClass="bullet-text"
              inputClass="edit-bullet-text left"
            />
          </div>
          <EditButton
            cssClass="delete-btn"
            btnContent="×"
            onBtnClick={() => handleDeleteBulletPoint(bulletIndex)}
            toggleButtons={toggleButtons}
          />
        </div>
      ))}
    </>
  );
};

export default BulletPoints;
