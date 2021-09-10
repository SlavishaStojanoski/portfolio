import React from 'react';
import { Link } from 'react-scroll';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Work from './Work';
import '../Styles/homePage.css';
import myPic from '../Image/slavisha.png';
import { useState } from 'react';

const Home = (props) => {
  const { MyLink } = props;
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  // font - effect - neon;
  return (
    <div id='home' className='sec'>
      <div className='sec homePage'>
        <div className='headerWithPic'>
          <img alt='MyPic' src={myPic} className='myPic'></img>
          <h1
            className={hovered ? 'font-effect-neon myName' : 'myName'}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
          >
            Slavisha Stojanoski
          </h1>
        </div>

        <ul className='nav__links'>
          <li className='nav__link'>
            <Link
              activeClass='active'
              className='links homeFont'
              to='aboutMe'
              spy={true}
              smooth={true}
              duration={500}
              offset={0}
            >
              About Me
            </Link>
          </li>
          <li className='nav__link'>
            <Link
              activeClass='active'
              className='links homeFont'
              to='Skills'
              spy={true}
              smooth={true}
              duration={500}
              offset={0}
            >
              Skills
            </Link>
          </li>
          <li className='nav__link'>
            <Link
              activeClass='active'
              className='links homeFont'
              to='work'
              spy={true}
              smooth={true}
              duration={500}
              offset={0}
            >
              Work
            </Link>
          </li>
          <li className='nav__link'>
            {/* <Link
            activeClass='active'
            className='test1'
            to='Contact'
            spy={true}
            smooth={true}
            duration={500}
            offset={0}
          >
            Contact
          </Link> */}
            <MyLink className='links homeFont' to='/contact'>
              Contact
            </MyLink>
          </li>
        </ul>
      </div>

      {/* DONE component for every section */}
      <AboutMe />
      <Skills />
      <Work />
    </div>
  );
};
export default Home;
