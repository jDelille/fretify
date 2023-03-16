/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import SimpleBar from 'simplebar-react';
import Store from '../../mobx/Store';
import './Modal.scss';

export default function RootNoteModal() {
  const [isModalHidden, setIsModalHidden] = useState(false);

  const changeRootNote = (note: string) => {
    Store.setRootNote(note);
  };

  const natural = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const flats = ['Ab', 'Bb', 'Cb', 'Db', 'Eb', 'Fb', 'Gb'];

  const currentRootNote = Store.rootNote;

  return !isModalHidden ? (
    <>
      <button
        type="button"
        className="overlay"
        onClick={() => setIsModalHidden(true)}
      />
      <SimpleBar className="modal">
        <div className="wrapper naturalNotes">
          <p className="label">Natural root notes</p>
          <div className="options">
            {natural.map((note) => (
              <button
                key={note}
                type="button"
                className={note === currentRootNote ? 'selected' : 'unselected'}
                onClick={() => changeRootNote(note)}
              >
                <p className="optionButton">{note}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="wrapper flatNotes">
          <p className="label">Flat root notes</p>
          <div className="options">
            {flats.map((note) => (
              <button
                key={note}
                type="button"
                className={note === currentRootNote ? 'selected' : 'unselected'}
                onClick={() => changeRootNote(note)}
              >
                <p className="optionButton">{note}</p>
              </button>
            ))}
          </div>
        </div>
      </SimpleBar>
    </>
  ) : null;
}
