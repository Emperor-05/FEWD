import React, { useState, useRef } from 'react';

const FocusBlurHoverExample = () => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleTextClick = () => {
    inputRef.current.focus(); // Programmatically focus the input when clicked
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const inputStyle = {
    padding: '10px',
    fontSize: '18px',
    border: isFocused ? '2px solid green' : '1px solid gray',
    backgroundColor: isFocused ? '#d9fdd3' : '#fff',
    outline: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const blurOnHover = {
    transition: 'filter 0.3s ease',
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Focus and Blur on Hover Demo</h2>

      {/* Click to focus text */}
      <div
        onClick={handleTextClick}
        style={{
          display: 'inline-block',
          marginBottom: '20px',
        }}
      >
        <input
          type="text"
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Click me to focus"
          style={inputStyle}
        />
      </div>

      {/* Image with blur on hover */}
      <div style={{ marginTop: '20px' }}>
        <img
          src="https://via.placeholder.com/200"
          alt="Placeholder"
          style={{
            ...blurOnHover,
            width: '200px',
            height: 'auto',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.filter = 'blur(4px)')}
          onMouseLeave={(e) => (e.currentTarget.style.filter = 'none')}
        />
      </div>

      {/* Text with blur on hover */}
      <p
        style={{
          marginTop: '20px',
          fontSize: '20px',
          ...blurOnHover,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.filter = 'blur(2px)')}
        onMouseLeave={(e) => (e.currentTarget.style.filter = 'none')}
      >
        Hover over this text to see it blur.
      </p>
    </div>
  );
};

export default FocusBlurHoverExample;
