import styles from './Sidebar.module.scss';
import Display from './controls/display/Display';
import FretSlider from './controls/fret-slider/FretSlider';
import Positions from './controls/positions/Positions';
import RootNote from './controls/root-note/RootNote';
import ScaleInfo from './controls/scale-info/ScaleInfo';
import ScaleMode from './controls/scale-mode/ScaleMode';
import Tuning from './controls/tuning/Tuning';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <h1>Fretify</h1>
        <p>Interactive Fretboard</p>
      </div>

      <div className={styles.row}>
        <RootNote />
      </div>

      <div className={styles.row}>
        <ScaleMode />
      </div>

      <div className={styles.row}>
        <Tuning />
      </div>

      <div className={styles.row}>
        <Display />
      </div>

      <div className={styles.row}>
        <FretSlider />
      </div>

      <div className={styles.row}>
        <Positions />
      </div>

      <div className={styles.row}>
        <ScaleInfo />
      </div>
    </div>
  );
};

export default Sidebar;
