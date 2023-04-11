import { observer } from 'mobx-react';
import { InstrumentName, instrument } from 'soundfont-player';

import { Note, Scale } from 'tonal';
import Store from '../../mobx/Store';
import './FretboardData.scss';

const FretboardData = observer(() => {
  const { rootNote } = Store;
  const scaleName = `${rootNote} ${Store.scale}`;
  const name = Store.getScaleName(scaleName);
  const scaleNotes = Scale.get(scaleName).notes;
  const notes = scaleNotes.map((note) => ` ${note}`);
  const triadNotes = [1, 3, 5]
    .map(Scale.degrees(scaleName))
    .map((note) => ` ${note}`);
  const supersetScales = Scale.extended(Store.scale);
  const subsetScales = Scale.reduced(Store.scale);
  const convertNoteName = (note: string) => {
    if (note.includes('bb')) {
      const noteIndex =
        (notes.indexOf(note.charAt(0)) - 1 + notes.length) % notes.length;
      return notes[noteIndex];
    }
    return note;
  };

  const changeScale = (scale: string) => {
    Store.setScale(scale);
  };

  function playScale(scale: string[]) {
    const delay = 700;
    const octave = 4; // starting octave
    scale.forEach((note, index) => {
      setTimeout(() => {
        const midiNote = Note.midi(`${note}${octave}`);
        if (midiNote !== undefined && midiNote !== null) {
          const noteName = Note.fromMidi(midiNote);
          instrument(new AudioContext(), 'acoustic_guitar_nylon').then(
            (guitar) => {
              guitar.play(noteName);
            }
          );
        }
      }, index * delay);
    });
  }

  return (
    <div className="fretboardData">
      <div className="leftData">
        <div className="scaleDescription">
          <h1 className="scale-name">{name}</h1>

          <p className="scale-bio">
            The {name} scale includes the notes {notes}. The triad notes for the
            scale known as the I IV V, are {triadNotes}
          </p>
        </div>
        {/* <div className="supersets">
          <h2>Superset Scales</h2>
          <div className="set">
            {supersetScales.map((supersetScale) => (
              <button
                type="button"
                key={supersetScale}
                onClick={() => changeScale(supersetScale)}
              >
                {supersetScale}
              </button>
            ))}
          </div>
        </div>
        {subsetScales.length > 0 && (
          <div className="subsets">
            <h2>Subset Scales</h2>
            <div className="set">
              {subsetScales.map((subsetScale) => (
                <button
                  type="button"
                  key={subsetScale}
                  onClick={() => changeScale(subsetScale)}
                >
                  {subsetScale}
                </button>
              ))}
            </div>
          </div>
        )} */}
      </div>
      {/* <div className="right-data">
        <div className="scale-wrapper">
          {notes.map((note) => (
            <div className="note" key={note}>
              {note}
            </div>
          ))}
        </div>
        <button type="button" onClick={() => playScale(scaleNotes)}>
          Play Scale
        </button>
      </div> */}
    </div>
  );
});

export default FretboardData;
