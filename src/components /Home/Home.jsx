import React from 'react'
import './home.css'
import { craigMacContent } from '../content'
import { useMediaQuery } from 'react-responsive';
import Footer from '../Footer/Footer';

const Home = () => {
    const video = craigMacContent.homePageGif.url;
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });

    return (
        <div className='home-gif'>
            {
                isMobile || isTablet ?
                    <video className='video' width='100%' height='100%' objectFit='cover' muted autoPlay playsInline loop>
                    <source src={video} type="video/mp4"></source>
              </video>
              
                    :  
                    <>
                        <video className='video' width='100000' muted autoPlay loop>
                            <source src={video} type="video/mp4"></source>
                        </video>  
                    </>
            }   
        </div>
    )
}

export default Home