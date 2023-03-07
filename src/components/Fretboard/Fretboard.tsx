import { observer } from 'mobx-react';
import { Chord, Scale } from 'tonal';
import { GuitarConstants } from '../../constants/@GuitarConstants';
import { GuitarScales } from '../../constants/@Scales';
import Store from '../../mobx/Store';

import './Fretboard.scss';
import FretNumbers from './FretNumbers';

const Fretboard = observer(() => {
  const numberOfFrets = 20;
  const { tuning } = GuitarConstants;
  const notes = Store.areNotesFlat
    ? GuitarConstants.notesFlat
    : GuitarConstants.notesSharp;
  const activeScale = GuitarScales.scales.filter(
    (scale) => scale.key === Scale.get(`${Store.rootNote} ${Store.scale}`).tonic
  );

  return (
    <>
      <FretNumbers totalFrets={numberOfFrets} startFret={0} endFret={10} />
      <div className="fretboard">
        {Array.from({ length: 6 }, (_, string) => {
          const fretComponents = Array.from(
            { length: numberOfFrets },
            (f, fret) => {
              const noteIndex = (fret + tuning[Store.tuningIndex][string]) % 12;
              const note = notes[noteIndex];
              const isNoteInScale = Scale.get(
                `${Store.rootNote} ${Store.scale}`
              ).notes.includes(note);
              const { rootNote } = Store;
              const scale = `${rootNote} ${Store.scale}`;
              const isTriad = [1, 3, 5].map(Scale.degrees(scale));
              const isPowerchord = [1, 5].map(Scale.degrees(scale));
              const { isRootNoteVisible } = Store;
              const { isPowerchordVisible } = Store;
              const { isTriadVisible } = Store;
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
            <div className="string" key={string + 1}>
              {fretComponents}
            </div>
          );
        })}
      </div>
    </>
  );
});

export default Fretboard;
