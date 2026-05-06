import React from 'react';
import { observer } from 'mobx-react';
import Store from '@/mobx/Store';
import useModalStore from '@/hooks/useModalStore';
import styles from './Tuning.module.scss';

type TuningProps = {};
const TuningControls: React.FC<TuningProps> = observer(() => {
  const activeTuning = Store.tuning;
  const { openModal } = useModalStore();

  return (
    <button
      type="button"
      className={styles.content}
      onClick={() => openModal('tuningModal')}
    >
      <p>{activeTuning} Tuning</p>
    </button>
  );
});

export default TuningControls;
