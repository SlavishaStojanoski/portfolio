import React, { useState } from 'react';
import ButtonGoUp from '../Components/ButtonGoUp.jsx';
import '../Styles/aboutMe.css';
import cac1 from '../Image/cac2.png';

const AboutMe = () => {
  // const [counter, setCounter] = useState(0);
  const [readMore, setReadMore] = useState(true);
  const showMore = () => setReadMore(!readMore);

  // const inc = () => {
  //   const newValue = counter + 1;
  //   setCounter(newValue);
  // };
  // const dec = () => {
  //   const newValue = counter - 1;
  //   setCounter(newValue);
  // };

  return (
    <div className='sec' id='aboutMe'>
      <ButtonGoUp />

      {/* <button onClick={inc}>+</button>
      <span>{counter}</span>
      <button onClick={dec}>-</button> */}
      <div className='container'>
        <img alt='Junior Web Developer' src={cac1} className='pic1'></img>
        <h3 className='juniorHeader'>Junior Web Developer</h3>
        <p className='aboutMe'>
          I'm Slavisha Stojanoski, experienced Computer Aided Design Technician
          with a demonstrated history of working in the automotive industry.
          <span className={readMore ? 'hideMore' : 'showMore'}>
            Skilled in Computer Repair and programming languages, HTML,
            Bootstrap, CSS , WordPress , JavaScript, React, Node.js. Knowledge
            in Microsoft office pack especially in Excel. Graduated from South
            East European University (SEEU), and graduated "JavaScript FullStack
            Developer" at Semos Education
          </span>
          <button onClick={showMore} className='readMoreBtn'>
            <span>{readMore ? 'Read More' : 'Hide Content'}</span>
          </button>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
