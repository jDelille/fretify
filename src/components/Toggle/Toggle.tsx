import { observer } from 'mobx-react';
import Checkbox from '../../assets/Checkbox';
import Checked from '../../assets/Checked';
import '../Controls/Controls.scss';

export type ToggleProps = {
  isToggled: boolean;
  onToggle: (isToggled: boolean) => void;
  label: string;
};

const Toggle = observer(({ isToggled, onToggle, label }: ToggleProps) => (
  <button
    type="button"
    className="checkbox"
    onClick={() => onToggle(!isToggled)}
  >
    {isToggled ? <Checked /> : <Checkbox />}
    <p className="info">{label}</p>
  </button>
));

export default Toggle;
