/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/require-default-props */
import { useState } from 'react';
import SimpleBar from 'simplebar-react';
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
        <SimpleBar className="modal">
          {tunings &&
            tunings?.map((tuning) => {
              return (
                <p
                  key={tuning.name}
                  className="tuning"
                  onClick={() => {
                    changeTuning(tuning.name);
                    setIsModalHidden(true);
                  }}
                >
                  <button
                    type="button"
                    className="name"
                    onClick={() => {
                      changeTuning(tuning.name);
                      setIsModalHidden(true);
                    }}
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
                <p
                  key={scale}
                  className="scale"
                  onClick={() => {
                    changeScale(scale);
                    setIsModalHidden(true);
                  }}
                >
                  <p className="name">{scale}</p>
                </p>
              );
            })}
        </SimpleBar>
      )}
    </>
  );
}

export default Modal;
