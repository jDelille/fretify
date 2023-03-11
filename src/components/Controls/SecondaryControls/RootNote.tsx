/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { observer } from 'mobx-react';
import Checkbox from '../../../assets/Checkbox';
import Checked from '../../../assets/Checked';
import Store from '../../../mobx/Store';
import '../Controls.scss';

const RootNote = observer(() => {
  const { isRootNoteVisible } = Store;
  return (
    <div
      className="checkbox"
      onClick={() => Store.toggleRootNoteVisibility(isRootNoteVisible)}
    >
      {isRootNoteVisible ? <Checked /> : <Checkbox />}
      <p className="info">Root note</p>
    </div>
  );
});

export default RootNote;
