/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import Store from '../../mobx/Store';
import NumberOfFrets from '../Controls/SecondaryControls/NumberOfFrets';
import Positions from '../Controls/SecondaryControls/Positions';
import Switch from '../Switch/Switch';

function MoreControlsModal() {
  const [isModalHidden, setIsModalHidden] = useState(false);
  const { isRootNoteVisible } = Store;

  const toggleRootNote = () =>
    Store.toggleRootNoteVisibility(isRootNoteVisible);

  return !isModalHidden ? (
    <>
      <div className="overlay" onClick={() => setIsModalHidden(true)} />
      <div className="modal">
        <div className="option">
          <p>Root note</p>
          <Switch
            id="theme-switch"
            label=""
            checked={isRootNoteVisible === true}
            onChange={toggleRootNote}
          />
        </div>
        <div className="option">
          <p>Triads</p>
          <Switch
            id="theme-switch"
            label=""
            checked={isRootNoteVisible === true}
            onChange={toggleRootNote}
          />
        </div>
        <div className="option">
          <p>Powerchord</p>
          <Switch
            id="theme-switch"
            label=""
            checked={isRootNoteVisible === true}
            onChange={toggleRootNote}
          />
        </div>
        <div className="option">
          <p>Number of frets</p>
          <NumberOfFrets />
        </div>
        <div className="option">
          <p>Position</p>
          <Positions />
        </div>
      </div>
    </>
  ) : null;
}

export default MoreControlsModal;
