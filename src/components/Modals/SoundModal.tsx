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

export default function SoundModal({ sounds }: Props) {
  const [isModalHidden, setIsModalHidden] = useState(false);

  const changeSound = (sound: string) => {
    Store.setSound(sound);
  };

  return !isModalHidden ? (
    <>
      <button
        type="button"
        className="overlay"
        onClick={() => setIsModalHidden(true)}
      />
      <SimpleBar className="modal">
        {sounds &&
          sounds?.name.map((sound) => {
            return (
              <button
                type="button"
                key={sound}
                className="scale"
                onClick={() => {
                  changeSound(sound);
                  setIsModalHidden(true);
                }}
              >
                <p className="name">{sound}</p>
              </button>
            );
          })}
      </SimpleBar>
    </>
  ) : null;
}
