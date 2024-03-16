import React, { useState } from 'react';
import Spinner from './Spinner';
import Modal from './Modal'; 

const UploadArea = ({ onFileUpload, processing, uploadSuccess, uploadError, imageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="my-4 text-center">
      <div className="mb-4">
        <p className="text-dark-shade">Acceptable formats: .jpeg, .jpg, .png</p>
        <p className="text-dark-shade">Only one image at a time can be uploaded</p>
        <p className="text-dark-shade">Maximum file size: 1MB</p>
      </div>
      <div className={`p-6 bg-white border-2 border-dashed rounded-md ${processing ? 'border-gray-300' : 'border-base-dark-blue'} cursor-pointer`}>
        {!processing && !uploadSuccess && (
          <div>
            <label htmlFor="file-upload" className="text-alodon-sea hover:text-lighter-shade underline cursor-pointer transition-colors duration-300">
             Browse to upload
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
          <p className="text-forest text-center mt-2">Upload successful!</p>
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
