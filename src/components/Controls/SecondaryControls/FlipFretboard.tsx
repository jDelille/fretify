/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { observer } from 'mobx-react';
import Checkbox from '../../../assets/Checkbox';
import Checked from '../../../assets/Checked';
import Store from '../../../mobx/Store';
import '../Controls.scss';

const FlipFretboard = observer(() => {
  const { isFretboardFlipped } = Store;
  return (
    <div
      className="checkbox"
      onClick={() => Store.setFlippedFretboard(isFretboardFlipped)}
    >
      {isFretboardFlipped ? <Checked /> : <Checkbox />}
      <p className="info">Flip fretboard</p>
    </div>
  );
});

export default FlipFretboard;
