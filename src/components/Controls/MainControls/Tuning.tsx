import { useState } from 'react';
import '../Controls.scss';
import Modal from './Modal';

const tunings = [
  {
    name: 'Standard Tuning',
    notes: ['e', 'a', 'd', 'g', 'b', 'a'],
  },
  {
    name: 'E Flat Tuning',
    notes: ['e', 'a', 'd', 'g', 'b', 'a'],
  },
  {
    name: 'Open E Tuning',
    notes: ['e', 'a', 'd', 'g', 'b', 'a'],
  },
  {
    name: 'Open D Tuning',
    notes: ['e', 'a', 'd', 'g', 'b', 'a'],
  },
  {
    name: 'E Flat Tuning',
    notes: ['e', 'a', 'd', 'g', 'b', 'a'],
  },
];

function Tuning() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="option">
        <button
          type="button"
          className="optionButton"
          onClick={() => setToggle(!toggle)}
        >
          Standard Tuning
        </button>
      </div>
      {toggle && <Modal tunings={tunings} />}
    </>
  );
}

export default Tuning;
