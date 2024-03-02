import React, { useState } from 'react';
import Spinner from './Spinner';
import Modal from './Modal'; 

const UploadArea = ({ onFileUpload, processing, uploadSuccess, uploadError, imageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="my-8 text-center">
      <div className={`p-6 border-2 border-dashed rounded-md ${processing ? 'border-gray-300' : 'border-base-dark-blue'} cursor-pointer`}>
        {!processing && !uploadSuccess && (
          <div>
            <label htmlFor="file-upload" className="text-base-dark-blue mb-2 text-lighter-shade underline">
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
        <>
          <p className="text-green-500 text-center mt-2">Upload successful!</p>
          {imageURL && (
            <img src={imageURL} alt="Uploaded" className="mx-auto mt-2 cursor-pointer" style={{ maxWidth: '1000px', maxHeight: '500px' }} onClick={handleImageClick} />
          )}
        </>
      )}
      {uploadError && (
        <p className="text-red-500 text-center mt-2">{uploadError}</p>
      )}
      {isModalOpen && imageURL && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <img src={imageURL} alt="Uploaded in original size" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </Modal>
      )}
    </div>
  );
};

export default UploadArea;
