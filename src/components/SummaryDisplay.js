import React from 'react';

const SummaryDisplay = ({ summaryText }) => {
  return (
    <div className="p-4 my-4 bg-white rounded-md shadow-lg max-h-96 overflow-auto">
      <h3 className="font-bold text-dark-shade mb-2">Summary</h3>
      <p className="text-lighter-shade">{summaryText}</p>
    </div>
  );
};

export default SummaryDisplay;
