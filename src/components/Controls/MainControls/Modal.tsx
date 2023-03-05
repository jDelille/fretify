/* eslint-disable react/require-default-props */
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
  return (
    <div className={rootNotes ? 'rootNoteModal' : 'modal'}>
      {tunings &&
        tunings.length > 0 &&
        tunings?.map((tuning) => {
          return (
            <p key={tuning.name} className="tuning">
              <span className="name">{tuning.name}</span>
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
              <span className="name">{scale}</span>
            </p>
          );
        })}
      {rootNotes &&
        rootNotes?.map((note) => {
          return (
            <p key={note} className="rootNote">
              <span className="note">{note}</span>
            </p>
          );
        })}
    </div>
  );
}

export default Modal;
