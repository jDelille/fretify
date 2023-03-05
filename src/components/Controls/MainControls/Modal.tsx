import '../controls.scss';

export type Tuning = {
  name: string;
  notes: string[];
};

type Props = {
  tunings: Tuning[];
};

function Modal({ tunings }: Props) {
  return (
    <div className="modal">
      {tunings?.map((tuning) => {
        return (
          <p key={tuning.name} className="tuning">
            <span className="name">{tuning.name}</span>
            {tuning.notes.map((note: string) => {
              return (
                <span key={note} className="note">
                  {note}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default Modal;
