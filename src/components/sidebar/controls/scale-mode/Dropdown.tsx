'use client';

import useModalStore from '@/hooks/useModalStore';
import Store from '@/mobx/Store';
import { observer } from 'mobx-react';
import styles from './ScaleMode.module.scss';

export type ScaleProps = {};

const Scales = observer(({}: ScaleProps) => {
  const activeScale = Store.scale;
  const activeRootNote = Store.rootNote;
  const { openModal } = useModalStore();

  return (
    <button
      type="button"
      className={styles.content}
      onClick={() => openModal('scaleModal')}
    >
      <p>
        {activeRootNote} {Store.getScaleName(activeScale)}
      </p>
    </button>
  );
});

export default Scales;
