import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { uploadImage, resetUploadState } from '../store/imageUploadSlice';
import UploadArea from './UploadArea';
import SummaryDisplay from './SummaryDisplay';
import ActionButtons from './UploadActionButtons';

const Dashboard = () => {
  const [fileName, setFileName ] = useState('');
  const dispatch = useDispatch();
  // Extracting state properties from the upload slice
  const { 
    processing,
    uploadSuccess,
    uploadError,
    summaryText 
  } = useSelector((state) => state.upload);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(event.target.files[0].name);
      dispatch(uploadImage(file)); // Dispatching the uploadFile action with the selected file
    }
  };

  const handleClearFile = () => {
    dispatch(resetUploadState());
  }

  const handleDownload = () => {
    // Implement the download logic or leave it for future implementation
  };

  const handleCopy = () => {
    if (summaryText) {
      navigator.clipboard.writeText(summaryText); // Copying the summary text to the clipboard
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
            <div className="text-center my-4">
              <p>Uploaded File: {fileName}</p>
              <button
                onClick={handleClearFile}
                className="bg-pale-shade hover:bg-lighter-shade text-white font-bold py-2 px-4 rounded"
              >
                Clear File
              </button>
            </div>
            <SummaryDisplay summaryText={summaryText} />
            <ActionButtons onDownload={handleDownload} onCopy={handleCopy} />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
