import React from 'react';

const ActionButtons = ({ onDownload, onCopy }) => {
  return (
    <div className="flex justify-center space-x-4 my-4">
      <button
        onClick={onDownload}
        className="px-4 py-2 bg-base-dark-blue text-white rounded-md hover:bg-dark-shade focus:outline-none focus:ring focus:border-lighter-shade"
      >
        Download
      </button>
      <button
        onClick={onCopy}
        className="px-4 py-2 bg-base-dark-blue text-white rounded-md hover:bg-dark-shade focus:outline-none focus:ring focus:border-lighter-shade"
      >
        Copy Text
      </button>
    </div>
  );
};

export default ActionButtons;
