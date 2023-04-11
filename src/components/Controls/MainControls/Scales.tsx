import { observer } from 'mobx-react';
import { Scale } from 'tonal';
import Store from '../../../mobx/Store';
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
    <button type="button" className="content" onClick={toggleScales}>
      <p>
        {activeRootNote} {Store.getScaleName(activeScale)}
      </p>
      {isScaleModal && <ScaleModal scales={{ name: scaleNames }} />}
    </button>
  );
});

export default Scales;
