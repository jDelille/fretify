import { observer } from 'mobx-react';

import { Scale } from 'tonal';
import Modal from './Modal';
import '../Controls.scss';
import Store from '../../../mobx/Store';

export type ScaleProps = {
  isScaleModal: boolean;
  toggleScales: () => void;
};

const Scales = observer(({ isScaleModal, toggleScales }: ScaleProps) => {
  const scaleNames: string[] = Scale.names();
  const activeScale = Store.scale;
  return (
    <>
      <div className="option">
        <button type="button" className="optionButton" onClick={toggleScales}>
          {Store.getScaleName(activeScale)} Scale
        </button>
      </div>
      {isScaleModal && <Modal scales={{ name: scaleNames }} />}
    </>
  );
});

export default Scales;
