/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import SimpleBar from 'simplebar-react';
import { CloseIcon } from '../../assets';
import Store from '../../mobx/Store';
import '../Controls/Controls.scss';

export type TuningProps = {
  name: string;
  notes: string[];
};

type Props = {
  tunings: TuningProps[];
};

export default function TuningModal({ tunings }: Props) {
  const [isModalHidden, setIsModalHidden] = useState(false);

  const changeTuning = (tuning: string) => {
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
      <SimpleBar className="modal">
        <header>
          <h1>Tuning</h1>
          <CloseIcon onClick={() => setIsModalHidden(true)} />
        </header>
        <div className="wrapper">
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
                      changeTuning(tuning.name);
                      setIsModalHidden(true);
                    }}
                  >
                    <p> {tuning.name}</p>

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
        </div>
      </SimpleBar>
    </>
  ) : null;
}
