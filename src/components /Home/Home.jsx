import React from 'react'
import './home.css'
import { craigMacContent } from '../content'
import Footer from '../Footer/Footer';

const Home = () => {
    const video = craigMacContent.homePageGif.url;

    return (
        <div className='home-gif'>
            <video width='100000' muted autoPlay loop>
                <source src={video} type="video/mp4"></source>
            </video>
            <Footer />
        </div>
    )
}

export default Home