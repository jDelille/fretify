import { observer } from 'mobx-react';
import Store from '../../../mobx/Store';
import Toggle from '../../Toggle/Toggle';
import '../Controls.scss';

const FlipStrings = observer(() => {
  const { isStringsFlipped } = Store;
  const toggleStrings = (isToggled: boolean) =>
    Store.setFlippedStrings(isToggled);

  return (
    <Toggle
      isToggled={isStringsFlipped}
      onToggle={toggleStrings}
      label="Flip strings"
    />
  );
});

export default FlipStrings;
