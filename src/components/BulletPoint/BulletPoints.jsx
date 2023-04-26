import EditField from '../EditField';
import Button from '../Button';

const BulletPoints = ({ bulletPoints, setBulletPoints }) => {

  const handleBulletTextChange = (newText, bulletIndex) => {
    const newBulletPoints = [...bulletPoints];
    newBulletPoints[bulletIndex] = { text: newText };
    setBulletPoints(newBulletPoints);
  }

  const handleDeleteBulletPoint = (bulletIndex) => {
    const newBulletPoints = [...bulletPoints];
    newBulletPoints.splice(bulletIndex, 1);
    setBulletPoints(newBulletPoints);
  }

  return (
    <>
      {bulletPoints.map((bulletPoint, bulletIndex) => (
        <div className='bullet-point' key={bulletIndex}>
          <div>
            <EditField
              value={bulletPoint.text}
              onTextChange={(newText) => handleBulletTextChange(newText, bulletIndex)}
              textClass='bullet-text'
              inputClass='edit-bullet-text left'
            />
          </div>
          <Button cssClass='delete-btn' btnContent='×' onBtnClick={() => handleDeleteBulletPoint(bulletIndex)} />
        </div>
      ))}
    </>
  )
}

export default BulletPoints;