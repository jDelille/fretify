import { observer } from 'mobx-react';
import Checkbox from '../../../assets/Checkbox';
import '../Controls.scss';

const RootNote = observer(() => {
  return (
    <div className="checkbox">
      <Checkbox />
      <h1 className="info">Root note</h1>
    </div>
  );
});

export default RootNote;
