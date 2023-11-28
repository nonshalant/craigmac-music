import React from 'react'

const Modal = ({selectedThumbNail, closeModal}) => {
  return (
    <div className='modal'>
        <div className="modal-container">
            <span className="close" onClick={closeModal}>
            &times;
            </span>
            <iframe 
                width="860" 
                height="515" 
                src={selectedThumbNail}
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
        </div>
    </div>
  )
}

export default Modal