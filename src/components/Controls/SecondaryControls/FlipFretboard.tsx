import { observer } from 'mobx-react';
import Store from '../../../mobx/Store';
import Toggle from '../../Toggle/Toggle';
import '../Controls.scss';

const FlipFretboard = observer(() => {
  const { isFretboardFlipped } = Store;
  const toggleFretboardFlip = (isToggled: boolean) =>
    Store.setFlippedFretboard(isToggled);
  return (
    <Toggle
      isToggled={isFretboardFlipped}
      onToggle={toggleFretboardFlip}
      label="Flip fretboard"
    />
  );
});

export default FlipFretboard;
