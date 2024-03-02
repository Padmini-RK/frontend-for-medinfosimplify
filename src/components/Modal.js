const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={onClose}>
        <div className="bg-white p-4 rounded-lg" onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;
  