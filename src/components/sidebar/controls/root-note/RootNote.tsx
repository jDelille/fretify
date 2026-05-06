"use client";

import { observer } from 'mobx-react';
import Store from '@/mobx/Store';
import styles from './RootNote.module.scss';

const ALL_NOTES = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

const RootNote = observer(() => {
  return (
    <div className={styles.control}>
      <p className={styles.label}>Root Note</p>
      <div className={styles.notes}>
        {ALL_NOTES.map((note) => (
          <button
            key={note}
            type="button"
            className={note === Store.rootNote ? styles.selectedRoot : styles.unselectedRoot}
            onClick={() => Store.setRootNote(note)}
          >
            <p className={styles.optionButton}>{note}</p>
          </button>
        ))}
      </div>
    </div>
  );
});

export default RootNote;