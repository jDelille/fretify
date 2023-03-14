/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import NumberOfFrets from '../SecondaryControls/NumberOfFrets';
import Positions from '../SecondaryControls/Positions';

function MoreControlsModal() {
  const [isModalHidden, setIsModalHidden] = useState(false);

  return !isModalHidden ? (
    <>
      <div className="overlay" onClick={() => setIsModalHidden(true)} />
      <div className="modal">
        <div className="option">
          <p>Root note</p>
        </div>
        <div className="option">
          <p>Triads</p>
        </div>
        <div className="option">
          <p>Powerchord</p>
        </div>
        <div className="option">
          <NumberOfFrets />
        </div>
        <div className="option">
          <Positions />
        </div>
      </div>
    </>
  ) : null;
}

export default MoreControlsModal;
