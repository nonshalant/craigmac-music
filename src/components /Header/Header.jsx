import React, { useState } from 'react'
import './header.css'
import { FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaMusic } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Image } from 'cloudinary-react';
import { craigMacContent } from '../content';
import { useMediaQuery } from 'react-responsive';


const Header = () => {
    const image = craigMacContent.header.url;
    const cloudName='dyzydm9nl';
    const isMobile = useMediaQuery({maxWidth: '767px'});
    const [navOpen, setNavOpen] = useState(false);

  return (
    <header>
        {/* <div className="top">
            <p>If you're feeling some way in your heart, just look up with me at the stars - Craig Mac </p>
        </div> */}
        {
            isMobile ?
            <nav className='nav-bar'>
                {/* <ul className='nav-links'>
                    <Link to='/music'> 
                        <li>Music</li> 
                    </Link>
                    <Link to='/videos'>
                        <li>Videos</li>
                    </Link>
                    <Link to='/merch'> 
                        <li>Merch</li>
                    </Link>
                    <Link to='news'>
                        <li>News</li>
                    </Link>
                </ul> */}
                <div className="logo">
                    {/* <Image className="logoBg" cloudName="dyzydm9nl" publicId="craig%20mac/IMG_6667_d0uie2.jpg" ></Image> */}
                    <Link to='/'><h1>Craig Mac</h1></Link>
                    <GiHamburgerMenu size={30}/>
                </div>

                <ul className='media'>
                    <a href="https://music.apple.com/us/artist/craigmac/1507596398" target='_blank' ><FaMusic/></a>
                    <a href="https://open.spotify.com/artist/6PFTqKrnFKJoZmN3c9MQy2?si=sq5zEmLHS8m38DZa3WLowQ" target='_blank'><FaSpotify /></a>
                    <a href="https://www.youtube.com/@craigmac7608" target='_blank'><FaYoutube /></a>
                    <a href="https://www.tiktok.com/@officialcraigmac?_t=8hiadcpaZlX&_r=1" target='_blank'><FaTiktok /></a>
                    <a href="https://www.instagram.com/craigmacofficial__/" target='_blank'><FaInstagramSquare /></a>
                    <FaEnvelope />
                </ul>
            </nav>
        :
        <nav className='nav-bar'>
            <ul className='nav-links'>
                <Link to='/music'> 
                    <li>Music</li> 
                </Link>
                <Link to='/videos'>
                    <li>Videos</li>
                </Link>
                <Link to='/merch'> 
                    <li>Merch</li>
                </Link>
                <Link to='news'>
                    <li>News</li>
                </Link>
            </ul>
            <div className="logo">
                <Image className="logoBg" cloudName="dyzydm9nl" publicId="craig%20mac/IMG_6667_d0uie2.jpg" ></Image>
                <Link to='/'><h1>Craig Mac</h1></Link>
            </div>
            <ul className='media'>
                <a href="https://music.apple.com/us/artist/craigmac/1507596398" target='_blank' ><FaMusic/></a>
                <a href="https://open.spotify.com/artist/6PFTqKrnFKJoZmN3c9MQy2?si=sq5zEmLHS8m38DZa3WLowQ" target='_blank'><FaSpotify /></a>
                <a href="https://www.youtube.com/@craigmac7608" target='_blank'><FaYoutube /></a>
                <a href="https://www.tiktok.com/@officialcraigmac?_t=8hiadcpaZlX&_r=1" target='_blank'><FaTiktok /></a>
                <a href="https://www.instagram.com/craigmacofficial__/" target='_blank'><FaInstagramSquare /></a>
                <FaEnvelope />
            </ul>
        </nav>
        }
    </header>
  )
}

export default Header