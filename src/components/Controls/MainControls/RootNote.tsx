import { observer } from 'mobx-react';
import Modal from './Modal';
import Store from '../../../mobx/Store';
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

const RootNote = observer(
  ({ isRootNoteModal, toggleRootNote }: RootNoteProps) => {
    const activeRootNote = Store.rootNote;

    return (
      <>
        <button
          type="button"
          className="option button"
          onClick={toggleRootNote}
        >
          <p className="optionButton">{activeRootNote}</p>
        </button>
        {isRootNoteModal && <Modal rootNotes={rootNotes} />}
      </>
    );
  }
);

export default RootNote;
