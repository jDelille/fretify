import { observer } from 'mobx-react';
import Store from '../../../mobx/Store';
import TuningModal from '../../Modals/TuningModal';
import { GuitarConstants } from '../../../constants/@GuitarConstants';
import '../Controls.scss';

const { tunings } = GuitarConstants;

export type TuningProps = {
  isTuningModal: boolean;
  toggleTuning: () => void;
};

const Tuning = observer(({ isTuningModal, toggleTuning }: TuningProps) => {
  const activeTuning = Store.tuning;
  return (
    <button type="button" className="content" onClick={toggleTuning}>
      <p>{activeTuning} Tuning</p>
      {isTuningModal && <TuningModal tunings={tunings} />}
    </button>
  );
});

export default Tuning;
