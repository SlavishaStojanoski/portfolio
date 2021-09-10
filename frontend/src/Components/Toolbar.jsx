import React, { useEffect, useState } from 'react';
import '../Styles/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Toolbar = (props) => {
  let MyLink = props.MyLink;
  // let menu = props.menu;
  const [navbarMenu, setNavbarMenu] = useState('navbarMenu');

  const listenScrollEvent = (event) => {
    if (window.scrollY < 150) {
      return setNavbarMenu('navbarMenu');
    } else if (window.scrollY > 150) {
      return setNavbarMenu('navbarMenu2');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  return (
    <div className='nav-container'>
      <nav className={navbarMenu}>
        <input type='checkbox' id='check' />
        <label for='check' class='checkbtn'>
          <FontAwesomeIcon icon={faBars} />
        </label>

        {/* LOGO */}
        {/* <label class='logo'>
          Remember<span class='LogoPart'>That</span>
        </label> */}
        <ul className='menu-list'>
          <li className='menu-item'>
            {/* className='aLink' */}
            <MyLink className='aLink' to='/'>
              Home
            </MyLink>
          </li>
          {/* <li>
          <MyLink to='/about' className='toolbar-item'>
            About Me
          </MyLink>
        </li> */}
          <li className='menu-item'>
            <MyLink className='aLink' to='/contact'>
              Contact
            </MyLink>
          </li>
        </ul>
      </nav>
      {/* <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faFacebook} /> */}
      <div className='spaceDIv'></div>
    </div>
  );
};

export default Toolbar;
