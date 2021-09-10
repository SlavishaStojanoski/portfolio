import React from 'react';
import ButtonGoUp from './ButtonGoUp';
import SocialNetworks from './SocialNetworks';

const Work = () => {
  const style = {
    color: 'red',
    fontSize: '2rem',
    marginTop: '80px',
  };

  return (
    <div className='sec' id='work'>
      <ButtonGoUp />
      <h2 style={style}>Section Work is under construction</h2>
      <SocialNetworks />
    </div>
  );
};

export default Work;
