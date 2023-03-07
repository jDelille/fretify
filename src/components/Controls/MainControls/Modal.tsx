/* eslint-disable react/require-default-props */
import Store from '../../../mobx/Store';
import '../Controls.scss';

export type TuningProps = {
  name: string;
  notes: string[];
};

export type Scales = {
  name: string[];
};

export type RootNotes = string;

type Props = {
  tunings?: TuningProps[];
  scales?: Scales;
  rootNotes?: RootNotes[];
};

function Modal({ tunings, scales, rootNotes }: Props) {
  const changeRootNote = (note: string) => {
    Store.setRootNote(note);
  };

  const changeScale = (scale: string) => {
    console.log(scale);
    Store.setScale(scale);
  };

  const changeTuning = (tuning: string) => {
    Store.setTuning(tuning);
  };
  return (
    <div className={rootNotes ? 'rootNoteModal' : 'modal'}>
      {tunings &&
        tunings.length > 0 &&
        tunings?.map((tuning) => {
          return (
            <p key={tuning.name} className="tuning">
              <button
                type="button"
                className="name"
                onClick={() => changeTuning(tuning.name)}
              >
                {tuning.name}
              </button>
              <div className="notes">
                {tuning.notes.map((note: string) => {
                  return (
                    <span key={note} className="note">
                      {note}
                    </span>
                  );
                })}
              </div>
            </p>
          );
        })}
      {scales &&
        scales?.name.map((scale) => {
          return (
            <p key={scale} className="scale">
              <button
                type="button"
                className="name"
                onClick={() => changeScale(scale)}
              >
                {scale}
              </button>
            </p>
          );
        })}
      {rootNotes &&
        rootNotes?.map((note) => {
          return (
            <p key={note} className="rootNote">
              <button
                type="button"
                className="note"
                onClick={() => changeRootNote(note)}
              >
                {note}
              </button>
            </p>
          );
        })}
    </div>
  );
}

export default Modal;
