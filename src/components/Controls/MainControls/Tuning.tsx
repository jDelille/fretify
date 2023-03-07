import { observer } from 'mobx-react';
import Modal from './Modal';
import '../Controls.scss';
import Store from '../../../mobx/Store';

const tunings = [
  {
    name: 'Standard',
    notes: ['e', 'a', 'd', 'g', 'b', 'a'],
  },
  {
    name: 'E Flat',
    notes: ['f', 'a', 'd', 'g', 'b', 'a'],
  },
  {
    name: 'Open E',
    notes: ['g', 'a', 'd', 'g', 'b', 'a'],
  },
  {
    name: 'Open D',
    notes: ['h', 'a', 'd', 'g', 'b', 'a'],
  },
  {
    name: 'E Flat',
    notes: ['i', 'a', 'd', 'g', 'b', 'a'],
  },
];

export type TuningProps = {
  isTuningModal: boolean;
  toggleTuning: () => void;
};

const Tuning = observer(({ isTuningModal, toggleTuning }: TuningProps) => {
  const activeTuning = Store.tuning;
  return (
    <>
      <div className="option">
        <button type="button" className="optionButton" onClick={toggleTuning}>
          {activeTuning} Tuning
        </button>
      </div>
      {isTuningModal && <Modal tunings={tunings} />}
    </>
  );
});

export default Tuning;
