/* eslint-disable jsx-a11y/label-has-associated-control */
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import './Switch.scss';

export type SwitchProps = {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Switch = observer(({ id, label, checked, onChange }: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleClick = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange(newChecked);
  };
  return (
    <label id={id} className="switch">
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleClick}
      />
      <span className="slider round" />
    </label>
  );
});

export default Switch;
