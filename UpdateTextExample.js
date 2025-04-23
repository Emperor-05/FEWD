import React, { useState } from 'react';

const UpdateTextExample = () => {
  const [message, setMessage] = useState("Hello, welcome!");

  const handleClick = () => {
    setMessage("You clicked the button!");
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>{message}</h2>
      <button 
        onClick={handleClick} 
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Click Me
      </button>
    </div>
  );
};

export default UpdateTextExample;
