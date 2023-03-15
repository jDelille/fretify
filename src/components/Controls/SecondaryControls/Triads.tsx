import { observer } from 'mobx-react';
import Store from '../../../mobx/Store';
import Toggle from '../../Toggle/Toggle';
import '../Controls.scss';

const Triads = observer(() => {
  const { isTriadVisible } = Store;
  const toggleTriads = (isToggled: boolean) =>
    Store.toggleTriadVisibility(isToggled);

  return (
    <Toggle isToggled={isTriadVisible} onToggle={toggleTriads} label="Traids" />
  );
});

export default Triads;
