import React, { useState, useCallback } from 'react';
import UploadArea from './UploadArea';
import SummaryDisplay from './SummaryDisplay';
import ActionButtons from './UploadActionButtons';

const Dashboard = () => {
  const [file, setFile] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [summaryText, setSummaryText] = useState('');

  const handleFileUpload = async (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setProcessing(true);
      setFile(uploadedFile);
      setTimeout(() => {
        setProcessing(false);
        setUploadSuccess(true);
        // Mock summary text
        setSummaryText("This is where the summary of the drug label would appear...");
      }, 1500);
    }
  };

  const handleDownload = () => {
    // Logic to download the summary
  };

  const handleCopy = () => {
    if (summaryText) {
      navigator.clipboard.writeText(summaryText);
    }
  };

  return (
    <div className="bg-very-pale-shade min-h-screen">
      <div className="container mx-auto p-40">
        <UploadArea
          onFileUpload={handleFileUpload}
          processing={processing}
          uploadSuccess={uploadSuccess}
          uploadError={uploadError}
        />
        {uploadSuccess && (
          <>
            <SummaryDisplay summaryText={summaryText} />
            <ActionButtons onDownload={handleDownload} onCopy={handleCopy} />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
