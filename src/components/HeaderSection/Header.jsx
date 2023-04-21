import React from 'react';
import EditField from '../EditField';

const Header = () => {

  const [name, setName] = React.useState('Mark');
  const [email, setEmail] = React.useState('Email');
  const [phoneNumber, setPhoneNumber] = React.useState('###-###-####');
  const [website, setWebsite] = React.useState('Website');

  const handleNameChange = (newText) => {
    setName(newText);
  }

  const handleEmailChange = (newText) => {
    setEmail(newText);
  }

  const handlePhoneNumberChange = (newText) => {
    setPhoneNumber(newText);
  }

  const handleWebsiteChange = (newText) => {
    setWebsite(newText);
  }

  return (
    <div className='resume-header'>
      <div className='header-name'>
        <EditField 
          value={name} 
          onTextChange={handleNameChange}
          textClass='name center'
          inputClass='edit-name center'
        />
      </div>
      <div className='header-info'>
        <EditField 
          value={email} 
          onTextChange={handleEmailChange}
          textClass='header-subinfo'
          inputClass='edit-header-subinfo center'
        />
        <span>|</span>
        <EditField 
          value={phoneNumber} 
          onTextChange={handlePhoneNumberChange}
          textClass='header-subinfo'
          inputClass='edit-header-subinfo center'
        />
        <span>|</span>
        <EditField 
          value={website} 
          onTextChange={handleWebsiteChange}
          textClass='header-subinfo'
          inputClass='edit-header-subinfo center'
        />
      </div>
    </div>
  )
}

export default Header;