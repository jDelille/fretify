import React from 'react';
import { observer } from 'mobx-react';
import { GuitarConstants } from '../../../constants/@GuitarConstants';
import Store from '../../../mobx/Store';
import SoundModal from '../../Modals/SoundModal';

type GuitarSoundsProps = {
  isGuitarSoundsModal: boolean;
  toggleGuitarSounds: () => void;
};

const GuitarSounds: React.FC<GuitarSoundsProps> = observer(({ isGuitarSoundsModal, toggleGuitarSounds }) => {
  const activeSound = Store.sound;
  const guitarNames: string[] = GuitarConstants.guitars;

  function formatString(str: string): string {
    return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  return (
    <button type="button" className="content" onClick={toggleGuitarSounds}>
      <p>{formatString(activeSound)}</p>
      {isGuitarSoundsModal && <SoundModal sounds={{ name: guitarNames }} />}
    </button>
  );
});

export default GuitarSounds;