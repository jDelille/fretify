import { useState } from 'react';
import '../Controls.scss';
import Modal from './Modal';

const rootNotes: string[] = [
  'A',
  'Ab',
  'B',
  'Bb',
  'C',
  'Db',
  'D',
  'E',
  'Eb',
  'F',
  'Fb',
  'G',
  'Gb',
];

function RootNote() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button
        type="button"
        className="option button"
        onClick={() => setToggle(!toggle)}
      >
        <p className="optionButton">Ab</p>
      </button>
      {toggle && <Modal rootNotes={rootNotes} />}
    </>
  );
}

export default RootNote;
