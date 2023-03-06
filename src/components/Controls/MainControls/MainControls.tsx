import { useState } from 'react';
import RootNote from './RootNote';
import Scales from './Scales';
import Tuning from './Tuning';
import '../Controls.scss';

function MainControls() {
  const [isRootNoteModal, setIsRootNoteModal] = useState(false);
  const [isTuningModal, setIsTuningModal] = useState(false);
  const [isScaleModal, setIsScaleModal] = useState(false);

  const toggleTuning = () => {
    if (isTuningModal) {
      setIsTuningModal(false);
    } else {
      setIsRootNoteModal(false);
      setIsScaleModal(false);
      setIsTuningModal(true);
    }
  };
  const toggleScales = () => {
    if (isScaleModal) {
      setIsScaleModal(false);
    } else {
      setIsRootNoteModal(false);
      setIsScaleModal(true);
      setIsTuningModal(false);
    }
  };
  const toggleRootNote = () => {
    if (isRootNoteModal) {
      setIsRootNoteModal(false);
    } else {
      setIsRootNoteModal(true);
      setIsScaleModal(false);
      setIsTuningModal(false);
    }
  };

  return (
    <div className="controlContainerPill">
      <Tuning isTuningModal={isTuningModal} toggleTuning={toggleTuning} />
      <Scales isScaleModal={isScaleModal} toggleScales={toggleScales} />
      <RootNote
        isRootNoteModal={isRootNoteModal}
        toggleRootNote={toggleRootNote}
      />
    </div>
  );
}

export default MainControls;
