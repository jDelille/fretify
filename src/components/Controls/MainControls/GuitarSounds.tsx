import { observer } from 'mobx-react';
import { GuitarConstants } from '../../../constants/@GuitarConstants';
import Store from '../../../mobx/Store';
import SoundModal from '../../Modals/SoundModal';

export type GuitarSoundsProps = {
  isGuitarSoundsModal: boolean;
  toggleGuitarSounds: () => void;
};

function formatString<T extends string>(str: T) {
  const words = str.split('_');
  const capitalizedWords = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  });
  const formattedString = capitalizedWords.join(' ');
  return formattedString;
}

const GuitarSounds = observer(
  ({ isGuitarSoundsModal, toggleGuitarSounds }: GuitarSoundsProps) => {
    const activeSound = Store.sound;
    const guitarNames: string[] = GuitarConstants.guitars;
    return (
      <button type="button" className="content" onClick={toggleGuitarSounds}>
        <p>{formatString(activeSound)}</p>
        {isGuitarSoundsModal && <SoundModal sounds={{ name: guitarNames }} />}
      </button>
    );
  }
);

export default GuitarSounds;
