import { observer } from 'mobx-react';
import { Scale } from 'tonal';
import Store from '../../mobx/Store';
import './FretboardData.scss';

const FretboardData = observer(() => {
  const { rootNote, scale } = Store;
  const scaleName = `${rootNote} ${Store.scale}`;
  const name = Store.getScaleName(scaleName);
  const scaleNotes = Scale.get(scaleName).notes;
  const notes = scaleNotes.map((note) => ` ${note}`);
  const triadNotes = [1, 3, 5]
    .map(Scale.degrees(scaleName))
    .map((note) => ` ${note}`);
  const supersetScales = Scale.extended(Store.scale);
  const subsetScales = Scale.reduced(Store.scale);

  return (
    <div className="fretboardData">
      <div className="leftData">
        <div className="scaleDescription">
          <h1>{name}</h1>
          <p>
            The {name} scale includes the notes {notes}. The triad notes for the
            scale known as the I IV V, are {triadNotes}
          </p>
        </div>
        <div className="supersets">
          <h2>Superset Scales</h2>
          <div className="set">
            {supersetScales.map((supersetScale) => (
              <span key={supersetScale}>{supersetScale}</span>
            ))}
          </div>
        </div>
        {subsetScales.length > 0 && (
          <div className="subsets">
            <h2>Subset Scales</h2>
            <div className="set">
              {subsetScales.map((subsetScale) => (
                <span key={subsetScale}>{subsetScale}</span>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* <div className="rightData">
        <p>Listen to the scale</p>
        <div className="scaleNotesWrapper">
          {scaleNotes.map((note) => {
            return (
              <div className="note" key={note}>
                {note}
              </div>
            );
          })}
        </div>
        <div className="buttonWrapper">
          <button type="button" className="playButton">
            Play
          </button>
          <button type="button" className="pauseButton">
            Pause
          </button>
        </div>
      </div> */}
    </div>
  );
});

export default FretboardData;
