/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { observer } from 'mobx-react';
import Checkbox from '../../../assets/Checkbox';
import Checked from '../../../assets/Checked';
import Store from '../../../mobx/Store';
import '../Controls.scss';

const FlipStrings = observer(() => {
  const { isStringsFlipped } = Store;

  return (
    <div
      className="checkbox"
      onClick={() => Store.setFlippedStrings(isStringsFlipped)}
    >
      {isStringsFlipped ? <Checked /> : <Checkbox />}
      <p className="info">Flip strings</p>
    </div>
  );
});

export default FlipStrings;
