/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { observer } from 'mobx-react';
import Modal from './Modal';
import '../Controls.scss';
import Store from '../../../mobx/Store';
import DownArrow from '../../../assets/DownArrow';
import TuningModal from '../../Modals/TuningModal';

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
    <div className="content" onClick={toggleTuning}>
      <button type="button" className="button">
        {activeTuning} Tuning
      </button>
      {isTuningModal && <TuningModal tunings={tunings} />}
    </div>
  );
});

export default Tuning;
