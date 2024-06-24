/* eslint-disable jsx-a11y/control-has-associated-label */
import Store from '../../mobx/Store';
import Modal from './Modal';
import useModalStore from '../../hooks/useModalStore';
import '../Controls/Controls.scss';

export type Sounds = {
  name: string[];
};

type Props = {
  sounds: Sounds;
};

export default function SoundModal({ sounds }: Props) {
  const { modals, openModal, closeModal } = useModalStore();

  const changeSound = (sound: string) => {
    Store.setSound(sound);
  };

  const currentSound = Store.sound;

  const bodyContent = (
    <div>
      {sounds &&
        sounds?.name.map((sound) => {
          return (
            <button
              type="button"
              key={sound}
              className={currentSound === sound ? 'selected' : 'unselected'}
              onClick={() => {
                changeSound(sound);
              }}
            >
              <p className="name">{formatString(sound)}</p>
            </button>
          );
        })}
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
}

function formatString(str: string) {
  const words = str.split('_');
  const capitalizedWords = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  });
  return capitalizedWords.join(' ');
}