/* eslint-disable jsx-a11y/control-has-associated-label */

import { useState } from 'react';
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
      <button
        type="button"
        className="overlay"
        onClick={() => setIsModalHidden(true)}
      />
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
        <div className="displayOption">
          <p>Number of frets</p>
          <NumberOfFrets />
        </div>
        <div className="displayOption">
          <p>Position</p>
          <Positions />
        </div>
      </div>
    </>
  ) : null;
}

export default MoreControlsModal;
