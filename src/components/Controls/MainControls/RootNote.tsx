import { observer } from 'mobx-react';
import Store from '../../../mobx/Store';
import '../Controls.scss';

const rootNotes: string[] = [
  'A',
  // 'Ab',
  'B',
  // 'Bb',
  'C',
  // 'Db',
  'D',
  'E',
  // 'Eb',
  'F',
  // 'Fb',
  'G',
  // 'Gb',
];

export type RootNoteProps = {
  toggleRootNote: () => void;
};

const RootNote = observer(({ toggleRootNote }: RootNoteProps) => {
  const changeRootNote = (note: string) => {
    Store.setRootNote(note);
  };
  const currentRootNote = Store.rootNote;
  return (
    <div className="content">
      <div className="noteType">
        <p>(N)</p>
        <p>#</p>
        <p>b</p>
      </div>
      <div className="notes">
        {rootNotes.map((note) => {
          return (
            <button
              key={note}
              type="button"
              className={note === currentRootNote ? 'selected' : 'noteButton'}
              onClick={() => changeRootNote(note)}
            >
              <p className="optionButton">{note}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
});

export default RootNote;
