import { useState } from 'react';
import RootNotes from './RootNote';
import Scales from './Scales';
import Tuning from './Tuning';
import '../Controls.scss';
import Triads from '../SecondaryControls/Triads';
import Powerchord from '../SecondaryControls/Powerchord';
import FlipFretboard from '../SecondaryControls/FlipFretboard';
import FlipStrings from '../SecondaryControls/FlipStrings';
import RootNote from '../SecondaryControls/RootNote';
import NumberOfFrets from '../SecondaryControls/NumberOfFrets';
import GuitarSounds from './GuitarSounds';

function MainControls() {
  const [isTuningModal, setIsTuningModal] = useState(false);
  const [isScaleModal, setIsScaleModal] = useState(false);
  const [isGuitarSoundsModal, setIsGuitarSoundsModal] = useState(false);

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

  return (
    <div className="mainControls">
      <div className="container">
        <p className="label">Note</p>
        <RootNotes />
      </div>
      <div className="middleContainer">
        <div className="scales">
          <p className="label">Scale / Mode</p>
          <Scales isScaleModal={isScaleModal} toggleScales={toggleScales} />
        </div>
        <div className="tuning">
          <p className="label">Tuning</p>
          <Tuning isTuningModal={isTuningModal} toggleTuning={toggleTuning} />
        </div>
        <div className="guitarSound">
          <p className="label">Guitar Sound</p>
          <GuitarSounds
            isGuitarSoundsModal={isGuitarSoundsModal}
            toggleGuitarSounds={toggleGuitarSounds}
          />
        </div>
      </div>
      <div className="bottomContainer">
        <p className="label">Fretboard Controls</p>
        <div className="controls">
          <Triads />
          <RootNote />
          <Powerchord />
          <FlipFretboard />
          <FlipStrings />
        </div>
      </div>
      <div className="sliderContainer">
        <p className="label"># of Frets</p>
        <NumberOfFrets />
      </div>
    </div>
  );
}

export default MainControls;

//
// <div className="bottomRow">
//   {/* > */}

// </div>
