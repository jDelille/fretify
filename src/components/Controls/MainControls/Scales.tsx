import { observer } from 'mobx-react';
import Store from '../../../mobx/Store';
import useModalStore from '../../../hooks/useModalStore';
import '../Controls.scss';

export type ScaleProps = {

};

const Scales = observer(({ }: ScaleProps) => {
  const activeScale = Store.scale;
  const activeRootNote = Store.rootNote;
  const { openModal } = useModalStore();

  return (
    <button type="button" className="content" onClick={() => openModal("scaleModal")}>
      <p>
        {activeRootNote} {Store.getScaleName(activeScale)}
      </p>
    </button>
  );
});

export default Scales;
