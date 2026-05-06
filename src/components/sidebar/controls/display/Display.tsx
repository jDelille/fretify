'use client';

import styles from './Display.module.scss';
import Toggle from '@/components/Toggle/Toggle';
import Store from '@/mobx/Store';

const Display = () => {
  const {
    isFretboardFlipped,
    isTriadVisible,
    isRootNoteVisible,
    isStringsFlipped,
  } = Store;

  const toggleFretboardFlip = (isToggled: boolean) => {
    Store.setFlippedFretboard(isToggled);
  };

  const toggleTriads = (isToggled: boolean) => {
    Store.toggleTriadVisibility(isToggled);
  };

  const toggleRootNote = (isToggled: boolean) => {
    Store.toggleRootNoteVisibility(isToggled);
  };

  const toggleStrings = (isToggled: boolean) => {
    Store.setFlippedStrings(isToggled);
  };

  return (
    <div className={styles.control}>
      <p className={styles.label}>Display</p>

      <Toggle
        isToggled={isTriadVisible}
        onToggle={toggleTriads}
        label="Traids"
      />

      <Toggle
        isToggled={isRootNoteVisible}
        onToggle={toggleRootNote}
        label="Root note"
      />

      <Toggle
        isToggled={isFretboardFlipped}
        onToggle={toggleFretboardFlip}
        label="Flip fretboard"
      />

      <Toggle
        isToggled={isStringsFlipped}
        onToggle={toggleStrings}
        label="Flip strings"
      />
    </div>
  );
};

export default Display;
