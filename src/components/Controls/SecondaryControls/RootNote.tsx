import { observer } from 'mobx-react';
import Checkbox from '../../../assets/Checkbox';
import '../Controls.scss';

const RootNote = observer(() => {
  return (
    <div className="checkbox">
      <Checkbox />
      <p className="info">Root note</p>
    </div>
  );
});

export default RootNote;
