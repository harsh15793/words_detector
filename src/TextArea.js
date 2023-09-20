import React from 'react';

const TextArea = ({ inputText, onInputChange }) => {
  const handleChange = (e) => {
    onInputChange(e.target.value);
  };

  return (
    <div>
      <h3>Input Text:</h3>
      <textarea
        rows="10"
        cols="50"
        value={inputText}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextArea;
