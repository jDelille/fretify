import React from 'react';
import { observer } from 'mobx-react';
import Store from '../../../mobx/Store';
import useModalStore from '../../../hooks/useModalStore';

type GuitarSoundsProps = {
};

const GuitarSounds: React.FC<GuitarSoundsProps> = observer(({ }) => {
  const activeSound = Store.sound;
  const { openModal } = useModalStore();

  function formatString(str: string): string {
    return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  return (
    <button type="button" className="content" onClick={() => openModal("soundModal")}>
      <p>{formatString(activeSound)}</p>
    </button>
  );
});

export default GuitarSounds;

