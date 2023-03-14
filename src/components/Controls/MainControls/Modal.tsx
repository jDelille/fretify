/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/require-default-props */
import { useState } from 'react';
import SimpleBar from 'simplebar-react';
import Store from '../../../mobx/Store';
import '../Controls.scss';

type Props = {
  rootNotes?: boolean;
};

function Modal({ rootNotes }: Props) {
  const [isModalHidden, setIsModalHidden] = useState(false);

  const changeRootNote = (note: string) => {
    Store.setRootNote(note);
  };

  const noteTypes = [
    { id: 'natural', label: '(N)', notes: ['A', 'B', 'C', 'D', 'E', 'F', 'G'] },
    {
      id: 'flats',
      label: 'b',
      notes: ['Ab', 'Bb', 'Cb', 'Db', 'Eb', 'Fb', 'Gb'],
    },
  ];
  const currentRootNote = Store.rootNote;
  const [selectedNoteType, setSelectedNoteType] = useState('natural');

  const selectedNoteTypeObj = noteTypes.find(
    ({ id }) => id === selectedNoteType
  );
  return (
    <>
      {!isModalHidden && (
        <div className="overlay" onClick={() => setIsModalHidden(true)} />
      )}

      {!isModalHidden && (
        <SimpleBar className="modal">
          {/* {rootNotes &&
            noteTypes.map(({ id, label }) => (
              <div
                key={id}
                className="noteTypeContainer"
                onClick={() => setSelectedNoteType(id)}
              >
                <div
                  className={id === selectedNoteType ? 'toggled' : 'toggle'}
                />
                <p>{label}</p>
              </div>
            ))}
          {selectedNoteTypeObj &&
            selectedNoteTypeObj.notes.map((note) => (
              <button
                key={note}
                type="button"
                className={note === currentRootNote ? 'selected' : 'noteButton'}
                onClick={() => changeRootNote(note)}
              >
                <p className="optionButton">{note}</p>
              </button>
            ))} */}
        </SimpleBar>
      )}
    </>
  );
}

export default Modal;
