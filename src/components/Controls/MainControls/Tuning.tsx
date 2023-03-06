import Modal from './Modal';
import '../Controls.scss';

const tunings = [
  {
    name: 'Standard Tuning',
    notes: ['e', 'a', 'd', 'g', 'b', 'a'],
  },
  {
    name: 'E Flat Tuning',
    notes: ['f', 'a', 'd', 'g', 'b', 'a'],
  },
  {
    name: 'Open E Tuning',
    notes: ['g', 'a', 'd', 'g', 'b', 'a'],
  },
  {
    name: 'Open D Tuning',
    notes: ['h', 'a', 'd', 'g', 'b', 'a'],
  },
  {
    name: 'E Flat Tuning',
    notes: ['i', 'a', 'd', 'g', 'b', 'a'],
  },
];

export type TuningProps = {
  isTuningModal: boolean;
  toggleTuning: () => void;
};

function Tuning({ isTuningModal, toggleTuning }: TuningProps) {
  return (
    <>
      <div className="option">
        <button type="button" className="optionButton" onClick={toggleTuning}>
          Standard Tuning
        </button>
      </div>
      {isTuningModal && <Modal tunings={tunings} />}
    </>
  );
}

export default Tuning;
