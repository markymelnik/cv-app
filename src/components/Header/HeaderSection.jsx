import React from 'react';
import EditField from '../EditField';

const HeaderSection = () => {

  const [headerInfo, setHeaderInfo] = React.useState([{
    name: 'Name',
    email: 'Email',
    phoneNumber: '(###)-###-####',
    website: 'URL'
  }]);

  const handleHeaderUpdate = (property, newText) => {
    setHeaderInfo(headerInfo => {
      const updatedHeaderInfo = [...headerInfo];
      updatedHeaderInfo[0][property] = newText;
      return updatedHeaderInfo;
    })
  }

  return (
    <div className='resume-header'>
      <div className='header-top'>
        <EditField 
          value={headerInfo[0].name} 
          onTextChange={(newText) => handleHeaderUpdate('name', newText)}
          textClass='header-name'
          inputClass='edit-header-name'
        />
      </div>
      <div className='header-info'>
        <EditField 
          value={headerInfo[0].email} 
          onTextChange={(newText) => handleHeaderUpdate('email', newText)}
          textClass='header-subinfo'
          inputClass='edit-header-subinfo center'
        />
        <span>|</span>
        <EditField 
          value={headerInfo[0].phoneNumber} 
          onTextChange={(newText) => handleHeaderUpdate('phoneNumber', newText)}
          textClass='header-subinfo'
          inputClass='edit-header-subinfo center'
        />
        <span>|</span>
        <EditField 
          value={headerInfo[0].website} 
          onTextChange={(newText) => handleHeaderUpdate('website', newText)}
          textClass='header-subinfo'
          inputClass='edit-header-subinfo center'
        />
      </div>
    </div>
  )
}

export default HeaderSection;