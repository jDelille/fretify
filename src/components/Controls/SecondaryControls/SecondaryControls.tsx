import { observer } from 'mobx-react';
import React from 'react';
import Store from '../../../mobx/Store';
import '../Controls.scss';
import FlipFretboard from './FlipFretboard';
import FlipStrings from './FlipStrings';
import Powerchord from './Powerchord';
import RootNote from './RootNote';
import Triads from './Triads';

const SecondaryControls = observer(() => {
  const activeRootNote = Store.rootNote;
  const activeScale = Store.scale;
  const activeTuning = Store.tuning;
  return (
    <div className="secondaryControls">
      <div className="left">
        <div className="infoBox">
          <p className="label">Root Note</p>
          <h1 className="info">{activeRootNote}</h1>
        </div>
        <div className="infoBox">
          <p className="label">Scale / Mode</p>
          <h1 className="info">{activeScale} Scale</h1>
        </div>
        <div className="infoBox">
          <p className="label">Tuning</p>
          <h1 className="info">{activeTuning} Tuning</h1>
        </div>
      </div>
      <div className="right">
        <Triads />
        <RootNote />
        <Powerchord />
        <FlipFretboard />
        <FlipStrings />
      </div>
    </div>
  );
});

export default SecondaryControls;
