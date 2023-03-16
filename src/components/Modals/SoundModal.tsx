/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import SimpleBar from 'simplebar-react';
import Store from '../../mobx/Store';
import '../Controls/Controls.scss';

export type Sounds = {
  name: string[];
};

type Props = {
  sounds: Sounds;
};

function formatString(str: string) {
  const words = str.split('_');
  const capitalizedWords = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  });
  const formattedString = capitalizedWords.join(' ');
  return formattedString;
}

export default function SoundModal({ sounds }: Props) {
  const [isModalHidden, setIsModalHidden] = useState(false);

  const changeSound = (sound: string) => {
    Store.setSound(sound);
  };

  const currentSound = Store.sound;

  return !isModalHidden ? (
    <>
      <button
        type="button"
        className="overlay"
        onClick={() => setIsModalHidden(true)}
      />
      <SimpleBar className="modal">
        <div className="wrapper">
          <p className="label">Guitar Sounds</p>
          <div className="options">
            {sounds &&
              sounds?.name.map((sound) => {
                return (
                  <button
                    type="button"
                    key={sound}
                    className={
                      currentSound === sound ? 'selected' : 'unselected'
                    }
                    onClick={() => {
                      changeSound(sound);
                      setIsModalHidden(true);
                    }}
                  >
                    <p className="name">{formatString(sound)}</p>
                  </button>
                );
              })}
          </div>
        </div>
      </SimpleBar>
    </>
  ) : null;
}
