/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { observer } from 'mobx-react';
import { useState } from 'react';
import Store from '../../../mobx/Store';
import '../Controls.scss';

const noteTypes = [
  { id: 'natural', label: '(N)', notes: ['A', 'B', 'C', 'D', 'E', 'F', 'G'] },
  {
    id: 'sharps',
    label: '#',
    notes: ['A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#'],
  },
  {
    id: 'flats',
    label: 'b',
    notes: ['Ab', 'Bb', 'Cb', 'Db', 'Eb', 'Fb', 'Gb'],
  },
];

const RootNote = observer(() => {
  const [selectedNoteType, setSelectedNoteType] = useState('natural');

  const changeRootNote = (note: string) => {
    Store.setRootNote(note);
  };

  const currentRootNote = Store.rootNote;

  const selectedNoteTypeObj = noteTypes.find(
    ({ id }) => id === selectedNoteType
  );

  return (
    <div className="content">
      <div className="noteType">
        {noteTypes.map(({ id, label }) => (
          <div
            key={id}
            className="noteTypeContainer"
            onClick={() => setSelectedNoteType(id)}
          >
            <div className={id === selectedNoteType ? 'toggled' : 'toggle'} />
            <p>{label}</p>
          </div>
        ))}
      </div>
      <div className="notes">
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
          ))}
      </div>
    </div>
  );
});

export default RootNote;
