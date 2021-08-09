/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
import React from 'react';

import '@styles/pages/Player.scss';

const Player = (props) => {
  const { id } = props.match.params;

  return (
    <div className='Player'>
      <video controls autoPlay>
        <source src='' type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default Player;
