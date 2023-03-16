import { observer } from 'mobx-react';
import { Scale } from 'tonal';
import { instrument, InstrumentName } from 'soundfont-player';
import { GuitarConstants } from '../../constants/@GuitarConstants';
import { GuitarScales } from '../../constants/@Scales';
import Store from '../../mobx/Store';
import FretNumbers from './FretNumbers';

import './Fretboard.scss';

const Fretboard = observer(() => {
  const { numberOfFrets } = Store;
  const { tuning } = GuitarConstants;
  const isFlat = Store.areNotesFlat;
  const notes = isFlat ? GuitarConstants.notesFlat : GuitarConstants.notesSharp;
  const { isFretboardFlipped, isStringsFlipped } = Store;

  function playSound(note: string, fret: number, string: number) {
    const octave = Math.floor(fret / 12) + 4 - (string - 1);
    instrument(new AudioContext(), Store.sound as InstrumentName).then(
      (guitar) => {
        guitar.play(note + octave);
      }
    );
  }

  return (
    <>
      <FretNumbers totalFrets={numberOfFrets} startFret={0} endFret={10} />
      <div className={!isStringsFlipped ? 'fretboard' : 'fretboardFlipped'}>
        {Array.from({ length: 6 }, (_, string) => {
          const convertNoteName = (note: string) => {
            if (note.includes('bb')) {
              const noteIndex =
                (notes.indexOf(note.charAt(0)) - 1 + notes.length) %
                notes.length;
              return notes[noteIndex];
            }
            return note;
          };
          // eslint-disable-next-line @typescript-eslint/no-shadow
          const frets = Array.from({ length: numberOfFrets }, (_, fret) => {
            const noteIndex = (fret + tuning[Store.tuningIndex][string]) % 12;
            const note = convertNoteName(notes[noteIndex]);
            const scale = `${Store.rootNote} ${Store.scale}`;
            const isNoteInScale = Scale.get(scale).notes.includes(note);
            const scaleData = GuitarScales.scales.filter(
              (scaleName) => scaleName.key === Scale.get(scale).tonic
            );
            const position = Store.position - 1;
            const startFret = scaleData[0]?.positions[position].start;
            const endFret = scaleData[0]?.positions[position].end;
            const triadNotes = [1, 3, 5].map(Scale.degrees(scale));
            const powerchordNotes = [1, 5].map(Scale.degrees(scale));
            const isNoteInPosition = fret >= startFret && fret <= endFret;
            const isNoteInSecondPosition =
              fret >= startFret + 12 && fret <= endFret + 12;
            const isNoteInThirdPosition =
              fret >= startFret - 12 && fret <= endFret - 12;
            const noteClassName = isNoteInScale
              ? (() => {
                  if (note === Store.rootNote && Store.isRootNoteVisible) {
                    return 'rootNote';
                  }
                  if (triadNotes.includes(note) && Store.isTriadVisible) {
                    return 'triadNote';
                  }
                  if (
                    powerchordNotes.includes(note) &&
                    Store.isPowerchordVisible
                  ) {
                    return 'powerchordNote';
                  }
                  return 'note';
                })()
              : 'inactiveNote';

            return (
              <div className="fret" key={fret}>
                {isNoteInScale &&
                (isNoteInPosition ||
                  isNoteInSecondPosition ||
                  isNoteInThirdPosition) ? (
                  <div className="noteBackground">
                    <button
                      type="button"
                      className={noteClassName}
                      onClick={() => playSound(notes[noteIndex], fret, string)}
                    >
                      {notes[noteIndex]}
                    </button>
                  </div>
                ) : (
                  <p className="inactiveNote">{notes[noteIndex]}</p>
                )}
              </div>
            );
          });

          return (
            <div
              className={!isFretboardFlipped ? 'string' : 'stringsFlipped'}
              key={string + 1}
            >
              {frets}
            </div>
          );
        })}
      </div>
    </>
  );
});

export default Fretboard;
