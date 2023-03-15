import { observer } from 'mobx-react';
import Store from '../../../mobx/Store';
import Toggle from '../../Toggle/Toggle';
import '../Controls.scss';

const Powerchord = observer(() => {
  const { isPowerchordVisible } = Store;
  const togglePowerchord = (isToggled: boolean) =>
    Store.togglePowerchordVisibility(isToggled);

  return (
    <Toggle
      isToggled={isPowerchordVisible}
      onToggle={togglePowerchord}
      label="Powerchord"
    />
  );
});

export default Powerchord;
