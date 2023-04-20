import React from 'react';
import EditHeaderField from './EditHeaderField';

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
      <EditHeaderField 
        value={name} 
        onTextChange={handleNameChange}
        textClass='header-name'
        inputClass='edit-header-name'
      />
      <div className='header-info'>
        <EditHeaderField 
          value={email} 
          onTextChange={handleEmailChange}
          textClass='header-subinfo'
          inputClass='edit-header-subinfo'
        />
        <span>|</span>
        <EditHeaderField 
          value={phoneNumber} 
          onTextChange={handlePhoneNumberChange}
          textClass='header-subinfo'
          inputClass='edit-header-subinfo'
        />
        <span>|</span>
        <EditHeaderField 
          value={website} 
          onTextChange={handleWebsiteChange}
          textClass='header-subinfo'
          inputClass='edit-header-subinfo'
        />
      </div>
    </div>
  )
}

export default Header;