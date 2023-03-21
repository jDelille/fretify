import { useState } from 'react';
import { Scale } from 'tonal';
import { GuitarConstants } from '../../../constants/@GuitarConstants';
import * as Asset from '../../../assets';
import * as Modal from '../../Modals';
import './MobileControls.scss';

interface ModalState {
  rootNoteModal: boolean;
  scaleModal: boolean;
  tuningModal: boolean;
  soundModal: boolean;
  moreControlsModal: boolean;
  [key: string]: boolean;
}

function MobileControls() {
  const [isOpen, setIsOpen] = useState<ModalState>({
    rootNoteModal: false,
    scaleModal: false,
    tuningModal: false,
    soundModal: false,
    moreControlsModal: false,
  });
  const scaleNames: string[] = Scale.names();
  const guitarNames: string[] = GuitarConstants.guitars;

  const { tunings } = GuitarConstants;

  const toggleModal = (modalName: string) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [modalName]: !prevState[modalName],
    }));
  };
  return (
    <div className="mobileControls">
      <button
        type="button"
        className="pillButton"
        onClick={() => toggleModal('rootNoteModal')}
      >
        <span className="pill">
          <p>
            <Asset.RootNoteIcon />
            Root Note
          </p>
        </span>
        {isOpen.rootNoteModal && <Modal.RootNoteModal />}
      </button>
      <button
        type="button"
        className="pillButton"
        onClick={() => toggleModal('scaleModal')}
      >
        <span className="pill">
          <p>
            <Asset.ScalesIcon />
            Scale / Mode
          </p>
        </span>
        {isOpen.scaleModal && (
          <Modal.ScaleModal scales={{ name: scaleNames }} />
        )}
      </button>
      <button
        type="button"
        className="pillButton"
        onClick={() => toggleModal('tuningModal')}
      >
        <span className="pill">
          <p>
            <Asset.TuningIcon />
            Tuning
          </p>
        </span>
        {isOpen.tuningModal && <Modal.TuningModal tunings={tunings} />}
      </button>
      <button
        type="button"
        className="pillButton"
        onClick={() => toggleModal('soundModal')}
      >
        <span className="pill">
          <p className="longName">
            <Asset.SoundIcon />
            <span>Fretboard Sound</span>
          </p>
        </span>
        {isOpen.soundModal && (
          <Modal.SoundModal sounds={{ name: guitarNames }} />
        )}
      </button>
      <button
        type="button"
        className="pillButton"
        onClick={() => toggleModal('moreControlsModal')}
      >
        <span className="pill">
          <p className="longName">
            <Asset.SettingsIcon />
            <span>More Controls</span>
          </p>
        </span>
        {isOpen.moreControlsModal && <Modal.MoreControlsModal />}
      </button>
    </div>
  );
}

export default MobileControls;
