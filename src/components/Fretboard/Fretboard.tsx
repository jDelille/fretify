import { observer } from 'mobx-react';
import { Chord, Scale } from 'tonal';
import { GuitarConstants } from '../../constants/@GuitarConstants';
import { GuitarScales } from '../../constants/@Scales';
import Store from '../../mobx/Store';

import './Fretboard.scss';
import FretNumbers from './FretNumbers';

const Fretboard = observer(() => {
  const numberOfFrets = 21;
  const tuning = [7, 14, 10, 5, 12, 7];
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
              const noteIndex = (fret + tuning[string]) % 12;
              const note = notes[noteIndex];
              const isNoteInScale = Scale.get(`a major`).notes.includes(note);
              return (
                <div className="fret" key={fret}>
                  {isNoteInScale ? (
                    <div className="noteBackground">
                      <p className="activeNote">{notes[noteIndex]}</p>
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
