/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { observer } from 'mobx-react';

import { Scale } from 'tonal';
import Store from '../../../mobx/Store';
import DownArrow from '../../../assets/DownArrow';
import ScaleModal from '../../Modals/ScaleModal';
import '../Controls.scss';

export type ScaleProps = {
  isScaleModal: boolean;
  toggleScales: () => void;
};

const Scales = observer(({ isScaleModal, toggleScales }: ScaleProps) => {
  const scaleNames: string[] = Scale.names();
  const activeScale = Store.scale;
  const activeRootNote = Store.rootNote;
  return (
    <div className="content" onClick={toggleScales}>
      <button type="button" className="button">
        <div>
          {activeRootNote} {Store.getScaleName(activeScale)} Scale
        </div>
      </button>
      {isScaleModal && <ScaleModal scales={{ name: scaleNames }} />}
    </div>
  );
});

export default Scales;
