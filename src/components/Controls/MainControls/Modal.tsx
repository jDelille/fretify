/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/require-default-props */
import { useState } from 'react';
import Store from '../../../mobx/Store';
import '../Controls.scss';

export type TuningProps = {
  name: string;
  notes: string[];
};

export type Scales = {
  name: string[];
};

type Props = {
  tunings?: TuningProps[];
  scales?: Scales;
};

function Modal({ tunings, scales }: Props) {
  const [isModalHidden, setIsModalHidden] = useState(false);

  const changeScale = (scale: string) => {
    Store.setScale(scale);
  };

  const changeTuning = (tuning: string) => {
    Store.setTuning(tuning);
  };
  return (
    <>
      {!isModalHidden && (
        <div className="overlay" onClick={() => setIsModalHidden(true)} />
      )}

      {!isModalHidden && (
        <div className="modal">
          {tunings &&
            tunings?.map((tuning) => {
              return (
                <p key={tuning.name} className="tuning">
                  <button
                    type="button"
                    className="name"
                    onClick={() => changeTuning(tuning.name)}
                  >
                    {tuning.name}
                  </button>
                  <div className="notes">
                    {tuning.notes.map((note: string) => {
                      return (
                        <span key={note} className="note">
                          {note}
                        </span>
                      );
                    })}
                  </div>
                </p>
              );
            })}
          {scales &&
            scales?.name.map((scale) => {
              return (
                <p key={scale} className="scale">
                  <button
                    type="button"
                    className="name"
                    onClick={() => changeScale(scale)}
                  >
                    {scale}
                  </button>
                </p>
              );
            })}
        </div>
      )}
    </>
  );
}

export default Modal;
