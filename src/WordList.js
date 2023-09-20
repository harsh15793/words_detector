import React from 'react';

const WordList = ({ wordList, setWordList }) => {
  const handleInputChange = (e) => {
    const words = e.target.value.split('\n');
    setWordList(words);
  };

  return (
    <div>
      <h3>Word List:</h3>
      <textarea
        rows="10"
        cols="30"
        value={wordList.join('\n')}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default WordList;
