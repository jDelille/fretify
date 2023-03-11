import { observer } from 'mobx-react';
import { Scale } from 'tonal';
import { GuitarConstants } from '../../constants/@GuitarConstants';
import Store from '../../mobx/Store';

import './Fretboard.scss';
import FretNumbers from './FretNumbers';

const Fretboard = observer(() => {
  const numberOfFrets = 20;
  const { tuning } = GuitarConstants;
  const isFlat = Store.areNotesFlat;
  const notes = isFlat ? GuitarConstants.notesFlat : GuitarConstants.notesSharp;
  const { isFretboardFlipped, isStringsFlipped } = Store;
  return (
    <>
      <FretNumbers totalFrets={numberOfFrets} startFret={0} endFret={10} />
      <div className={!isStringsFlipped ? 'fretboard' : 'fretboardFlipped'}>
        {Array.from({ length: 6 }, (_, string) => {
          const fretComponents = Array.from(
            { length: numberOfFrets },
            (f, fret) => {
              const noteIndex = (fret + tuning[Store.tuningIndex][string]) % 12;
              const note = notes[noteIndex];
              const {
                rootNote,
                isRootNoteVisible,
                isPowerchordVisible,
                isTriadVisible,
              } = Store;
              const scale = `${rootNote} ${Store.scale}`;
              const isNoteInScale = Scale.get(scale).notes.includes(note);
              const isTriad = [1, 3, 5].map(Scale.degrees(scale));
              const isPowerchord = [1, 5].map(Scale.degrees(scale));

              return (
                <div className="fret" key={fret}>
                  {isNoteInScale ? (
                    <div className="noteBackground">
                      <p
                        className={(() => {
                          switch (true) {
                            case note === rootNote && isRootNoteVisible:
                              return 'rootNote';
                            case isTriad.includes(note) && isTriadVisible:
                              return 'triadNote';
                            case isPowerchord.includes(note) &&
                              isPowerchordVisible:
                              return 'powerchordNote';
                            default:
                              return 'note';
                          }
                        })()}
                      >
                        {notes[noteIndex]}
                      </p>
                    </div>
                  ) : (
                    <p className="inactiveNote">{notes[noteIndex]}</p>
                  )}
                </div>
              );
            }
          );
          return (
            <div
              className={!isFretboardFlipped ? 'string' : 'stringsFlipped'}
              key={string + 1}
            >
              {fretComponents}
            </div>
          );
        })}
      </div>
    </>
  );
});

export default Fretboard;
