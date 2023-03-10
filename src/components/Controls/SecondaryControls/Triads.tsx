/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { observer } from 'mobx-react';
import Checkbox from '../../../assets/Checkbox';
import Checked from '../../../assets/Checked';
import Store from '../../../mobx/Store';
import '../Controls.scss';

const Triads = observer(() => {
  const { isTriadVisible } = Store;
  return (
    <div
      className="checkbox"
      onClick={() => Store.toggleTriadVisibility(isTriadVisible)}
    >
      {isTriadVisible ? <Checked /> : <Checkbox />}
      <p className="info">Triads</p>
    </div>
  );
});

export default Triads;
