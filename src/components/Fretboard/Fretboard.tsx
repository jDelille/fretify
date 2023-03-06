import { Chord, Scale } from 'tonal';

import './Fretboard.scss';

function Fretboard() {
  const numberOfFrets = 21;
  const tuning = [7, 14, 10, 5, 12, 7];
  const notes = [
    'A',
    'Bb',
    'B',
    'C',
    'Db',
    'D',
    'Eb',
    'E',
    'F',
    'Gb',
    'G',
    'Ab',
  ];

  return (
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
  );
}

export default Fretboard;
