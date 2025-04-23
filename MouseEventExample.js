import React, { useState } from 'react';

const MouseEventExample = () => {
  const [message, setMessage] = useState('');

  const handleMouseEnter = () => {
    setMessage('Mouse is over the box!');
  };

  const handleMouseLeave = () => {
    setMessage('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: '200px',
          height: '100px',
          backgroundColor: '#f0f0f0',
          border: '2px solid #ccc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        Hover over me
      </div>

      <p style={{ marginTop: '20px', fontSize: '18px', color: '#333' }}>
        {message}
      </p>
    </div>
  );
};

export default MouseEventExample;
