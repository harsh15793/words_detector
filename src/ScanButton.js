import React from 'react';

const ScanButton = ({ onScanClick }) => {
  return (
    <div>
      <button onClick={onScanClick}>Scan Text</button>
    </div>
  );
};

export default ScanButton;
