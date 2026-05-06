"use client";
import styles from './Tuning.module.scss';
import TuningControls from './Dropdown';

const Tuning = () => {
  return (
    <div className={styles.control}>
      <p className={styles.label}>Tuning</p>

      <TuningControls />
    </div>
  )
}

export default Tuning