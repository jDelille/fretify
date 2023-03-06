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
    setIsTuningModal((prevState) => !prevState);
    setIsScaleModal(false);
    setIsRootNoteModal(false);
  };
  const toggleScales = () => {
    setIsScaleModal((prevState) => !prevState);
    setIsRootNoteModal(false);
    setIsTuningModal(false);
  };
  const toggleRootNote = () => {
    setIsRootNoteModal((prevState) => !prevState);
    setIsScaleModal(false);
    setIsTuningModal(false);
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
