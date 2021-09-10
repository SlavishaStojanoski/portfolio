import React from 'react';
import { Link } from 'react-scroll';
import '../Styles/buttonGoUp.css';

const ButtonGoUp = () => {
  return (
    <span className='stickyBtnContainer'>
      <button className='stickyBtn'>
        <Link
          activeClass='active'
          className='test1'
          to='home'
          spy={true}
          smooth={true}
          duration={200}
          offset={-60}
        >
          <span>Go Up</span>
        </Link>
      </button>
    </span>
  );
};

export default ButtonGoUp;
