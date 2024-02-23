import React from 'react';
import Spinner from './Spinner'; 
const UploadArea = ({ onFileUpload, processing, uploadSuccess, uploadError }) => {
  return (
    <div className="my-8 text-center">
      <div className={`p-6 border-2 border-dashed rounded-md ${processing ? 'border-gray-300' : 'border-base-dark-blue'} cursor-pointer`}>
        {!processing && (
          <div>
            {/* <label htmlFor="file-upload" className="text-base-dark-blue mb-2">
              Drag your image here or <span className="text-lighter-shade underline">click to upload</span>
            </label> */}
            <label htmlFor="file-upload" className="text-base-dark-blue mb-2 text-lighter-shade underline ">
             Click to upload
            </label>
            <input
              id="file-upload"
              type="file"
              onChange={onFileUpload}
              className="hidden"
              disabled={processing || uploadSuccess}
            />
          </div>
        )}
        {processing && <Spinner />}
      </div>
      {uploadSuccess && !uploadError && (
        <p className="text-green-500 text-center mt-2">Upload successful! Processing your image...</p>
      )}
      {uploadError && (
        <p className="text-red-500 text-center mt-2">{uploadError}</p>
      )}
    </div>
  );
};

export default UploadArea;
