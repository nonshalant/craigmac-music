import React from 'react'
import './footer.css'
import { FaEnvelope } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
    const isMobile = useMediaQuery({maxWidth: '767px'});
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });

  return (
    <footer className='footer'>
        <div className="footer-container">
            <a href='https://www.everlastingapps.com' target='_blank' rel="noreferrer">Website by <span>@Ever Lasting Apps</span></a>
            {
              isMobile || isTablet ?
              undefined
              :
                <div className="footer-links">
                  <FaEnvelope />
                  <a href="https://music.apple.com/us/artist/craigmac/1507596398" target='_blank' rel="noreferrer" ><FaMusic/></a>
                  <a href="https://open.spotify.com/artist/6PFTqKrnFKJoZmN3c9MQy2?si=sq5zEmLHS8m38DZa3WLowQ" target='_blank' rel="noreferrer"><FaSpotify /></a>
                  <a href="https://www.youtube.com/@craigmac7608" target='_blank' rel="noreferrer"><FaYoutube /></a>
                  <a href="https://www.tiktok.com/@officialcraigmac?_t=8hiadcpaZlX&_r=1" target='_blank' rel="noreferrer"><FaTiktok /></a>
                  <a href="https://www.instagram.com/craigmacofficial__/" target='_blank' rel="noreferrer"><FaInstagramSquare /></a>
              </div>
            }
        </div>
    </footer>
  )
}

export default Footer