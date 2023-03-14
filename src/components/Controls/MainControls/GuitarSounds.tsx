/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { observer } from 'mobx-react';
import { GuitarConstants } from '../../../constants/@GuitarConstants';
import Store from '../../../mobx/Store';
import SoundModal from '../../Modals/SoundModal';

export type GuitarSoundsProps = {
  isGuitarSoundsModal: boolean;
  toggleGuitarSounds: () => void;
};

const GuitarSounds = observer(
  ({ isGuitarSoundsModal, toggleGuitarSounds }: GuitarSoundsProps) => {
    const activeSound = Store.sound;
    const guitarNames: string[] = GuitarConstants.guitars;
    return (
      <div className="content" onClick={toggleGuitarSounds}>
        <button type="button" className="button">
          {activeSound}
        </button>
        {isGuitarSoundsModal && <SoundModal sounds={{ name: guitarNames }} />}
      </div>
    );
  }
);

export default GuitarSounds;
