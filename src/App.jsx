import React, { useState, useRef } from 'react';
import Resume from './components/Resume';
import Controller from './components/Controller';

const App = () => {

  const [toggleButtons, setToggleButtons] = useState(true);
  const resumeRef = useRef();

  const handleToggleButtons = () => {
    setToggleButtons(!toggleButtons);
  };

  return (
    <>
      <Controller onToggleButtons={handleToggleButtons} resumeRef={resumeRef} />
      <Resume toggleButtons={toggleButtons} resumeRef={resumeRef} />
    </>
  )
}

export default App;