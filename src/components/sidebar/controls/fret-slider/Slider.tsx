'use client';

import GuitarConstants from '@/constants/@GuitarConstants';
import Store from '@/mobx/Store';
import styles from './FretSlider.module.scss';

const Slider = () => {
  const fretLength = Store.numberOfFrets;
  const handleChange = (numOfFrets: number) => {
    if (fretLength <= GuitarConstants.maximumFrets) {
      Store.setNumberOfFrets(numOfFrets);
    }
  };
  return (
    <div className={styles.sliderContainer}>
      <input
        type="range"
        min={6}
        max={24}
        className={styles.fretSlider}
        onChange={(event) => {
          const newNumberOfFrets = parseInt(event.target.value, 10);
          if (newNumberOfFrets < 6 || newNumberOfFrets > 24) {
            return;
          }
          handleChange(newNumberOfFrets);
        }}
      />
    </div>
  );
};

export default Slider;
