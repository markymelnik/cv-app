import React from 'react';
import EditField from './EditField';

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
      <EditField value={name} onTextChange={handleNameChange}/>
      <div className='header-info'>
        <EditField value={email} onTextChange={handleEmailChange}/>
        <span>|</span>
        <EditField value={phoneNumber} onTextChange={handlePhoneNumberChange}/>
        <span>|</span>
        <EditField value={website} onTextChange={handleWebsiteChange}/>
      </div>
    </div>
  )
}

export default Header;