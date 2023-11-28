import React, { useState } from 'react'
import './videos.css'
import { Image } from 'cloudinary-react'
import Modal from './Modal'
import { craigMacContent } from '../content' 
import Footer from '../Footer/Footer'

const Videos = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const cloudName = "dyzydm9nl"
    
    const openModal = (selectedThumbNail) => {
        setModalOpen(selectedThumbNail)
    }
    
    const closeModal = () => {
        setModalOpen(false);
    };

  return (
    <div className='video'>
        <div className="video-container">
            {
                craigMacContent.videos.map(content => 
                    <div onClick={()=>openModal(content.url)} key={content.title} className="image-container">
                        <Image cloudName={cloudName} publicId={content.thumbNail}/>
                        <h2>{content.title}</h2>
                    </div>
                )
            }
            {modalOpen && <Modal closeModal={closeModal} selectedThumbNail={modalOpen}/>}
        </div>
        <Footer />
    </div>
  )
}

export default Videos