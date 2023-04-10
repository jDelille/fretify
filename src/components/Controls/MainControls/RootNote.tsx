import { observer } from 'mobx-react';
import { useState } from 'react';
import Store from '../../../mobx/Store';
import '../Controls.scss';

const noteTypes = [
  { id: 'natural', label: '(N)', notes: ['A', 'B', 'C', 'D', 'E', 'F', 'G'] },
  {
    id: 'flats',
    label: 'b',
    notes: ['Ab', 'Bb', 'Cb', 'Db', 'Eb', 'Fb', 'Gb'],
  },
];

const RootNote = observer(() => {
  const [selectedNoteType, setSelectedNoteType] = useState('natural');

  const changeRootNote = (note: string) => {
    let selectedNote = note; // Create a new variable to hold the selected note

    if (note === 'Cb') {
      // Convert Cb to B
      selectedNote = 'B';
    } else if (note === 'Fb') {
      // Convert Fb to E
      selectedNote = 'E';
    }

    Store.setRootNote(selectedNote);
  };

  const currentRootNote = Store.rootNote;

  const selectedNoteTypeObj = noteTypes.find(
    ({ id }) => id === selectedNoteType
  );

  return (
    <div className="content">
      <div className="noteType">
        {noteTypes.map(({ id, label }) => (
          <button
            type="button"
            key={id}
            className="noteTypeContainer"
            onClick={() => setSelectedNoteType(id)}
          >
            <div className={id === selectedNoteType ? 'toggled' : 'toggle'} />
            <p>{label}</p>
          </button>
        ))}
      </div>
      <div className="notes">
        {selectedNoteTypeObj &&
          selectedNoteTypeObj.notes.map((note) => (
            <button
              key={note}
              type="button"
              className={
                note === currentRootNote ? 'selected-root' : 'unselected-root'
              }
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
