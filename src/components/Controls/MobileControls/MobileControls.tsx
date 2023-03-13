/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Scale } from 'tonal';
import { GuitarConstants } from '../../../constants/@GuitarConstants';
import Modal from '../MainControls/Modal';
import './MobileControls.scss';

function MobileControls() {
  const [isTuningModal, setIsTuningModal] = useState(false);
  const [isScaleModal, setIsScaleModal] = useState(false);
  const [isGuitarSoundsModal, setIsGuitarSoundsModal] = useState(false);
  const [isRootNoteModal, setIsRootNoteModal] = useState(false);

  const scaleNames: string[] = Scale.names();
  const guitarNames: string[] = GuitarConstants.guitars;

  const tunings = [
    {
      name: 'Standard',
      notes: ['e', 'a', 'd', 'g', 'b', 'a'],
    },
    {
      name: 'E Flat',
      notes: ['f', 'a', 'd', 'g', 'b', 'a'],
    },
    {
      name: 'Open E',
      notes: ['g', 'a', 'd', 'g', 'b', 'a'],
    },
    {
      name: 'Open D',
      notes: ['h', 'a', 'd', 'g', 'b', 'a'],
    },
    {
      name: 'E Flat',
      notes: ['i', 'a', 'd', 'g', 'b', 'a'],
    },
  ];
  const toggleTuning = () => {
    setIsTuningModal((prevState) => !prevState);
    setIsScaleModal(false);
  };
  const toggleScales = () => {
    setIsScaleModal((prevState) => !prevState);
    setIsTuningModal(false);
  };

  const toggleGuitarSounds = () => {
    setIsGuitarSoundsModal((prevState) => !prevState);
    setIsScaleModal(false);
    setIsTuningModal(false);
  };

  const toggleRootNotes = () => {
    setIsRootNoteModal((prevState) => !prevState);
    setIsScaleModal(false);
    setIsTuningModal(false);
    setIsGuitarSoundsModal(false);
  };
  return (
    <div className="mobileControls">
      <div className="rootnote" onClick={toggleRootNotes}>
        <button type="button" className="pill">
          <p>Root Note</p>
        </button>
        {isRootNoteModal && <Modal rootNotes={isRootNoteModal} />}
      </div>
      <div className="scalePill" onClick={toggleScales}>
        <button type="button" className="pill">
          <p>Scale / Mode</p>
        </button>
        {isScaleModal && <Modal scales={{ name: scaleNames }} />}
      </div>
      <div className="tuning" onClick={toggleTuning}>
        <button type="button" className="pill">
          <p>Tuning</p>
        </button>
        {isTuningModal && <Modal tunings={tunings} />}
      </div>
      <div className="sounds" onClick={toggleGuitarSounds}>
        <button type="button" className="pill">
          <p>Guitar Sound</p>
        </button>
        {isGuitarSoundsModal && <Modal sounds={{ name: guitarNames }} />}
      </div>
    </div>
  );
}

export default MobileControls;
