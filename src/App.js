import React, { useState, useEffect } from 'react';
import TextArea from './TextArea';
import WordList from './WordList';
import ScanButton from './ScanButton';
import * as XLSX from 'xlsx';
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [wordList, setWordList] = useState([]);
  const [highlightedWords, setHighlightedWords] = useState([]);

  // Load word list from Excel file when component mounts
  useEffect(() => {
    fetchWordList();
  }, []);
  const fetchWordList = () => {
    console.log("here1")
    fetch("./word_list.xlsx") // Path to the excel stored in "public" folder of the project
    .then((res) => res.arrayBuffer())
    .then((ab) => {
      const wb = XLSX.read(ab, { type: "array" });
      console.log("html ", wb);
      const sheet = wb.Sheets[wb.SheetNames[0]];
      const words = XLSX.utils.sheet_to_json(sheet, { header: 1 }).map(row => row[0]); // code will fetch all the list of words present in 1st column of the desired excel
      console.log(words)
      setWordList(words);
    });
  };

  const handleInputChange = (text) => {
    setInputText(text);
    setHighlightedWords([]);
  };

  const handleScanClick = () => {
    const matches = wordList.filter(word => inputText.includes(word));
    setHighlightedWords(matches);
  };

  return (
    <div>
      <WordList wordList={wordList} setWordList={setWordList} />
      <TextArea inputText={inputText} onInputChange={handleInputChange} />
      <ScanButton onScanClick={handleScanClick} />
      <div>
        <h3>Analysis</h3>
        {inputText.split(/(\b)/).map((word, index) => {
          if (highlightedWords.includes(word.trim())) {
            return <span key={index} className="highlighted-word">{word}</span>;
          }
          return <span key={index}>{word}</span>;
        })}
      </div>
    </div>
  );
};

export default App;
