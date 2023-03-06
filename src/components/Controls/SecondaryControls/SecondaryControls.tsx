import React from 'react';
import '../Controls.scss';

function SecondaryControls() {
  return (
    <div className="secondaryControls">
      <div className="infoBox">
        <p className="label">Root Note</p>
        <h1 className="info">Ab</h1>
      </div>
      <div className="infoBox">
        <p className="label">Scale / Mode</p>
        <h1 className="info">Major Pentatonic Scale</h1>
      </div>
      <div className="infoBox">
        <p className="label">Tuning</p>
        <h1 className="info">Standard Tuning</h1>
      </div>
    </div>
  );
}

export default SecondaryControls;
