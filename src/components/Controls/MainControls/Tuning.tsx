import React from 'react';
import Store from '../../../mobx/Store';
import useModalStore from '../../../hooks/useModalStore';
import { observer } from 'mobx-react';

type TuningProps = {};
const Tuning: React.FC<TuningProps> = observer(() => {
  const activeTuning = Store.tuning;
  const { openModal } = useModalStore();

  return (
    <button
      type="button"
      className="content"
      onClick={() => openModal('tuningModal')}
    >
      <p>{activeTuning} Tuning</p>
    </button>
  );
});

export default Tuning;
