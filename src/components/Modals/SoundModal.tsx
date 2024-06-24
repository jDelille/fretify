/* eslint-disable jsx-a11y/control-has-associated-label */
import Store from '../../mobx/Store';
import Modal from './Modal';
import useModalStore from '../../hooks/useModalStore';
import '../Modals/Modal.scss';
import { observer } from 'mobx-react';

export type Sounds = {
  name: string[];
};

type Props = {
  sounds: Sounds;
};

const SoundModal = observer(({ sounds }: Props) => {
  const { modals, closeModal } = useModalStore();

  const changeSound = (sound: string) => {
    Store.setSound(sound);
  };

  const currentSound = Store.sound;

  const electricSounds = ["Electric Guitar Clean", "Electric Guitar Jazz", "Electric Guitar Muted"];
  const acousticSounds = ["Acoustic Guitar Nylon", "Acoustic Guitar Steel"]
  const effectsSounds = ["Overdriven Guitar", "Distortion Guitar", "Guitar Harmonics"];

  const renderSoundSection = (sectionTitle: string, soundList: string[]) => (
    <div className='section' key={sectionTitle}>
      <h3>{sectionTitle}</h3>
      {sounds.name
        .filter((sound) => soundList.includes(formatString(sound)))
        .map((sound) => (
          <label key={sound}>
            <input
              type="radio"
              name="sound"
              value={sound}
              checked={currentSound === sound}
              onChange={() => {
                changeSound(sound);
                handleCloseModal
              }}
            />
            {formatString(sound)}
          </label>
        ))}
    </div>
  );

  const getUnlistedSounds = () => {
    const allListedSounds = [...electricSounds, ...effectsSounds, ...acousticSounds].map(formatString);
    const unlistedSounds = sounds.name.filter((sound) => !allListedSounds.includes(formatString(sound)));
    return unlistedSounds;
  };

  const bodyContent = (
    <div>
      {renderSoundSection('Electric', electricSounds)}
      {renderSoundSection('Acoustic', acousticSounds)}
      {renderSoundSection('Effects', effectsSounds)}
      <div className='section'>
        <h3>Other</h3>
        {getUnlistedSounds().map((sound) => (
          <label key={sound}>
            <input
              type="radio"
              name="sound"
              value={sound}
              checked={currentSound === sound}
              onChange={() => {
                changeSound(sound);
                handleCloseModal
              }}
            />
            {formatString(sound)}
          </label>
        ))}
      </div>

    </div>
  );

  const handleCloseModal = () => {
    closeModal('soundModal')
  }

  return (
    <Modal
      title='Guitar Sounds'
      onClose={handleCloseModal}
      isOpen={modals.soundModal}
      body={bodyContent}
    />
  );
})

function formatString(str: string) {
  const words = str.split('_');
  const capitalizedWords = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  });
  return capitalizedWords.join(' ');
}

export default SoundModal;