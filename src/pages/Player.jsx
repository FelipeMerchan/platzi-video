/* eslint-disable import/no-unresolved */
import React from 'react';

import '@styles/components/Player.scss';

const Player = () => {
  return (
    <div className='Player'>
      <video constrols autoPlay>
        <source src='' type='video/mp4' />
      </video>
      <div className='Player__back'>
        <button type='button'>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default Player;
