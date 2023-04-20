import React from 'react';
import Name from './Name';
import Email from './Email';

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

  return (
    <div className='resume-header'>
      <Name name={name} editName={handleNameChange}/>
      <div className='header-info'>
        <Email email={email} editEmail={handleEmailChange}/>
        <span>|</span>
        <div className='info-number'>Number</div>
        <span>|</span>
        <div className='info-website'>Website</div>
      </div>
    </div>
  )
}

export default Header;