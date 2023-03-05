import { useState } from 'react';
import { Scale } from 'tonal';
import '../Controls.scss';
import Modal from './Modal';

function Scales() {
  const [toggle, setToggle] = useState(false);

  const scaleNames: string[] = Scale.names();

  return (
    <>
      <div className="option">
        <button
          type="button"
          className="optionButton"
          onClick={() => setToggle(!toggle)}
        >
          Major Pentatonic Scale
        </button>
      </div>
      {toggle && <Modal scales={{ name: scaleNames }} />}
    </>
  );
}

export default Scales;
