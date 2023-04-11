/* eslint-disable jsx-a11y/control-has-associated-label */

import { observer } from 'mobx-react';
import { useState } from 'react';
import { CloseIcon } from '../../assets';
import Store from '../../mobx/Store';
import Positions from '../Controls/SecondaryControls/Positions';
import Switch from '../Switch/Switch';

const MoreControlsModal = observer(() => {
  const [isModalHidden, setIsModalHidden] = useState(false);
  const { isRootNoteVisible, isTriadVisible, isPowerchordVisible } = Store;

  const toggleRootNote = () =>
    Store.toggleRootNoteVisibility(!isRootNoteVisible);

  const toggleTraids = () => Store.toggleTriadVisibility(!isTriadVisible);

  const togglePowerchord = () =>
    Store.togglePowerchordVisibility(!isPowerchordVisible);

  return !isModalHidden ? (
    <>
      <button
        type="button"
        className="overlay"
        onClick={() => setIsModalHidden(true)}
      />
      <div className="modal">
        <header>
          <h1>More Controls</h1>
          <CloseIcon onClick={() => setIsModalHidden(true)} />
        </header>
        <div className="option">
          <div className="group">
            <p>Root note</p>
            <Switch
              id="theme-switch"
              label=""
              checked={isRootNoteVisible === true}
              onChange={toggleRootNote}
            />
          </div>
          <div className="group">
            <p>Triads</p>
            <Switch
              id="theme-switch"
              label=""
              checked={isTriadVisible === true}
              onChange={toggleTraids}
            />
          </div>
          {/* <div className="group">
            <p>Powerchord</p>
            <Switch
              id="theme-switch"
              label=""
              checked={isPowerchordVisible === true}
              onChange={togglePowerchord}
            />
          </div> */}
        </div>
        <div className="displayOption">
          <p>Position</p>
          <Positions />
        </div>
      </div>
    </>
  ) : null;
});

export default MoreControlsModal;
