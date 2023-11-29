import React, { useState } from 'react'
import { craigMacContent } from '../content'
import { Image } from 'cloudinary-react'
import './music.css'
import Modal from './Modal'

const Music = () => {
    const cloudName='dyzydm9nl';
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = (selectedSong) => {
        setModalOpen(selectedSong)
    }

    const closeModal = () => {
        setModalOpen(false)
    } 

  return (
    <div className='music'>
        {
            <div className="music-image">
                <Image cloudName={cloudName} publicId={craigMacContent.music.profilePicture}/>
            </div>
        }
        <div className='music-main'>
            <div className="inner-section-one">
                <div className="inner-left">
                    <div className='inner-left-title'>
                        <h2>Popular Album</h2>
                        <h2>{craigMacContent.music.songs.map(song => song.title === 'Til I Get Home' && song.title)}</h2>
                    </div>
                    {
                        craigMacContent.music.songs.map( song => song.title === 'Til I Get Home' && 
                            <div onClick={()=>openModal(song.url)}>
                                <Image cloudName={cloudName} publicId={song.thumbNail}/>
                            </div>
                        )
                    }
                </div>
                <div className="section-one-content">
                    <h2>The Essentials</h2>
                    <div className='section-one-content-flex'>
                        {
                            craigMacContent.music.songs.map( song => song.category === 'single' && 
                                <div key={song.id} onClick={()=>openModal(song.url)} className='song-details'>
                                    <Image cloudName={cloudName} publicId={song.thumbNail}/>
                                    <div className='more-details'>
                                        <h3>{song.title}</h3>
                                        <h3>{song.features ? song.features : song.title} - {song.category}</h3>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="inner-section-one">
                <div className="section-one-content">
                    <h2>Albums & EPs</h2>
                    <div className='albums-container'>
                        {
                            craigMacContent.music.songs.map( song => song.category === 'album' && 
                                <div key={song.id} onClick={()=>openModal(song.url)} className='song-details larger'>
                                    <Image cloudName={cloudName} publicId={song.thumbNail}/>
                                    <div className='more-details'>
                                        <h3>{song.title} - {song.category}</h3>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                     {modalOpen && <Modal closeModal={closeModal} songUrl={modalOpen}/>}
                </div>
            </div>
        </div>
        {/* <Footer /> */}
    </div>
  )
}

export default Music