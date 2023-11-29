import React from 'react'

const Modal = ({songUrl, closeModal}) => {
    
  return (
    <div className='modal'>
    <div className="modal-container">
        <span className="close" onClick={closeModal}>
        &times;
        </span>
        <iframe 
            width="860" 
            src={songUrl}
            frameborder="0" 
            encryptedmedia
            >
        </iframe>
    </div>
</div>
  )
}

export default Modal