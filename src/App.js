import React, { useState } from 'react';
import Form from './Form';
import TemplatePage from './TemplatePage';
import './App.css';

const App = () => {
  const [resumeData, setResumeData] = useState(null);
  const [showTemplate, setShowTemplate] = useState(false);

  const handleFormSubmit = (data) => {
    setResumeData(data);
    setShowTemplate(true);
  };

  return (
    <div className="app-container">
      <h1 className='text-center pt-4'>Resume Generator</h1>
      <div className="content">
        {!showTemplate ? ( 
          <Form onSubmit={handleFormSubmit} />
        ) : (
          <TemplatePage data={resumeData} />
        )}
      </div>
    </div>
  );
};

export default App;