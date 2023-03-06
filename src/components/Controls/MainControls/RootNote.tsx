import Modal from './Modal';
import '../Controls.scss';

const rootNotes: string[] = [
  'A',
  'Ab',
  'B',
  'Bb',
  'C',
  'Db',
  'D',
  'E',
  'Eb',
  'F',
  'Fb',
  'G',
  'Gb',
];

export type RootNoteProps = {
  isRootNoteModal: boolean;
  toggleRootNote: () => void;
};

function RootNote({ isRootNoteModal, toggleRootNote }: RootNoteProps) {
  return (
    <>
      <button type="button" className="option button" onClick={toggleRootNote}>
        <p className="optionButton">Ab</p>
      </button>
      {isRootNoteModal && <Modal rootNotes={rootNotes} />}
    </>
  );
}

export default RootNote;
