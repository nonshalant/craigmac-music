import React from 'react'
import './home.css'
import { craigMacContent } from '../content'
import { useMediaQuery } from 'react-responsive';
import Footer from '../Footer/Footer';

const Home = () => {
    const video = craigMacContent.homePageGif.url;
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });


    return (
        <div className='home-gif'>
            {
                isMobile ?
                    <video className='video' width='500vw' height='700vh' muted autoPlay playsInline loop>
                        <source src={video} type="video/mp4"></source>
                    </video> 
                    :  
                    <>
                        <video className='video' width='100000' muted autoPlay loop>
                            <source src={video} type="video/mp4"></source>
                        </video>  
                        <Footer />
                    </>
            }   
        </div>
    )
}

export default Home