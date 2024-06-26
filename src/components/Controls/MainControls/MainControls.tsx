import RootNotes from './RootNote';
import Scales from './Scales';
import Tuning from './Tuning';
import * as Controls from '../SecondaryControls';
import GuitarSounds from './GuitarSounds';
import '../Controls.scss';

function MainControls() {
  return (
    <div className="mainControls">
      <div className="container">
        <p className="label">Note</p>
        <RootNotes />
      </div>
      <div className="middleContainer">
        <div className="scales">
          <p className="label">Scale / Mode</p>
          <Scales  />
        </div>
        <div className="tuning">
          <p className="label">Tuning</p>
          <Tuning />
        </div>
        <div className="guitarSound">
          <p className="label">Guitar Sound</p>
          <GuitarSounds />
        </div>
      </div>
      <div className="bottomContainer">
        <p className="label">Fretboard Controls</p>
        <div className="controls">
          <Controls.Triads />
          <Controls.RootNote />
          {/* <Controls.Powerchord /> */}
          <Controls.FlipFretboard />
          <Controls.FlipStrings />
        </div>
      </div>
      <div className="bottomWrapper">
        <div className="sliderContainer">
          <p className="label"># of Frets</p>
          <Controls.NumberOfFrets />
        </div>
        <div className="positionContainer">
          <p className="label">Position</p>
          <Controls.Positions />
        </div>
      </div>
    </div>
  );
}

export default MainControls;
