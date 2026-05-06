"use client";
import Fretboard from '../Fretboard/Fretboard';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
        <div className={styles.topBar}>
          <p>Key: A</p>
          <p>Major Pentatonic</p>
          <p>Standard tuning</p>
        </div>

        <div className={styles.fretboardWrapper}>
            <Fretboard />
        </div>

        <div className={styles.chords}></div>

        <div className={styles.row}>
            {/* related scales */}
            {/* chords in key */}
            {/* playing tips */}
        </div>
    </div>
  )
}

export default Home