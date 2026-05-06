"use client";

import Scales from './Dropdown';
import styles from './ScaleMode.module.scss';

const ScaleMode = () => {
  return (
    <div className={styles.control}>
      <p className={styles.label}>Scale / Mode</p>

      <Scales />
    </div>
  )
}

export default ScaleMode