import { observer } from 'mobx-react';

import { Scale } from 'tonal';
import Modal from './Modal';
import '../Controls.scss';
import Store from '../../../mobx/Store';
import DownArrow from '../../../assets/DownArrow';

export type ScaleProps = {
  isScaleModal: boolean;
  toggleScales: () => void;
};

const Scales = observer(({ isScaleModal, toggleScales }: ScaleProps) => {
  const scaleNames: string[] = Scale.names();
  const activeScale = Store.scale;
  const activeRootNote = Store.rootNote;
  return (
    <div className="content">
      <button type="button" onClick={toggleScales} className="button">
        <div>
          {activeRootNote} {Store.getScaleName(activeScale)} Scale
        </div>
      </button>
      {isScaleModal && <Modal scales={{ name: scaleNames }} />}
    </div>
  );
});

export default Scales;
