import React from 'react'
import styles from './FretSlider.module.scss';
import Slider from './Slider';

const FretSlider = () => {
  return (
    <div className={styles.control}>
      <p className={styles.label}>Frets</p>

      <Slider />
    </div>
  )
}

export default FretSlider