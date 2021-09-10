import React from 'react';
import '../Styles/socialMedia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialNetworks = () => {
  return (
    <div className='socialContainer'>
      <ul className='socialIcon'>
        <li>
          <a
            href='https://www.facebook.com/slavisa.stojanoski/'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faFacebookF} className='icon' />
          </a>
        </li>
        <li>
          <a
            href='https://www.instagram.com/slavisha_stojanoski/'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faInstagram} className='icon' />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/slavisha-stojanoski/'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            <FontAwesomeIcon icon={faLinkedin} className='icon' />
          </a>
        </li>
        <div className='facebook socialMediaShadow'></div>
        <div className='insta socialMediaShadow'></div>
        <div className='LI socialMediaShadow'></div>
      </ul>
    </div>
  );
};

export default SocialNetworks;
