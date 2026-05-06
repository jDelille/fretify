import { observer } from 'mobx-react';
import styles from './Toggle.module.scss';

export type ToggleProps = {
  isToggled: boolean;
  onToggle: (isToggled: boolean) => void;
  label: string;
};

const Toggle = observer(({ isToggled, onToggle, label }: ToggleProps) => (
  <button
    type="button"
    className={styles.toggle}
    onClick={() => onToggle(!isToggled)}
  >
    {isToggled ? (
      <div className={styles.checked}>✓</div>
    ) : (
      <div className={styles.checkbox} />
    )}
    <p className={styles.label}>{label}</p>
  </button>
));

export default Toggle;
