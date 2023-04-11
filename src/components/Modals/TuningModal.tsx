/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import SimpleBar from 'simplebar-react';
import { CloseIcon } from '../../assets';
import Store from '../../mobx/Store';
import '../Controls/Controls.scss';

export type TuningProps = {
  name: string;
  notes: string[];
  tuning: number[];
};

type Props = {
  tunings: TuningProps[];
};

export default function TuningModal({ tunings }: Props) {
  const [isModalHidden, setIsModalHidden] = useState(false);

  const changeTuning = (tuning: {
    name: string;
    notes: string[];
    tuning: number[];
  }) => {
    Store.setTuning(tuning);
  };

  const currentTuning = Store.tuning;

  return !isModalHidden ? (
    <>
      <button
        type="button"
        className="overlay"
        onClick={() => setIsModalHidden(true)}
      />
      <div className="modal">
        <header>
          <h1>Tuning</h1>
          <CloseIcon onClick={() => setIsModalHidden(true)} />
        </header>
        <SimpleBar className="wrapper">
          <div className="options">
            {tunings &&
              tunings?.map((tuning) => {
                return (
                  <button
                    type="button"
                    key={tuning.name}
                    className={
                      tuning.name === currentTuning ? 'selected' : 'unselected'
                    }
                    onClick={() => {
                      changeTuning(tuning);
                      setIsModalHidden(true);
                    }}
                  >
                    <p> {tuning.name} </p>

                    <div className="notes">
                      {tuning.notes.map((note: string) => {
                        return (
                          <span key={note} className="note">
                            {note}
                          </span>
                        );
                      })}
                    </div>
                  </button>
                );
              })}
          </div>
        </SimpleBar>
      </div>
    </>
  ) : null;
}
