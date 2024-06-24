/* eslint-disable jsx-a11y/control-has-associated-label */
import Store from '../../mobx/Store';
import Modal from './Modal';
import '../Controls/Controls.scss';
import useModalStore from '../../hooks/useModalStore';

export type TuningProps = {
  name: string;
  notes: string[];
  tuning: number[];
};

type Props = {
  tunings: TuningProps[];
};

export default function TuningModal({ tunings }: Props) {
  const { modals, closeModal } = useModalStore();

  const changeTuning = (tuning: {
    name: string;
    notes: string[];
    tuning: number[];
  }) => {
    Store.setTuning(tuning);
  };

  const currentTuning = Store.tuning;

  const handleCloseModal = () => {
    closeModal('tuningModal');
  };

  const bodyContent = (
    <div>
      {tunings &&
        tunings?.map((tuning) => {
          return (
            <button
              type="button"
              key={tuning.name}
              className={
                tuning.name === currentTuning ? 'selected' : 'unselected'
              }
              onClick={() => {
                changeTuning(tuning);
              }}
            >
              <p> {tuning.name} </p>

              <div className="notes">
                {tuning.notes.map((note: string) => {
                  return (
                    <span key={note} className="note">
                      {note}
                    </span>
                  );
                })}
              </div>
            </button>
          );
        })}
    </div>
  );

  return (
    <Modal
      title="Tunings"
      onClose={handleCloseModal}
      isOpen={modals.tuningModal}
      body={bodyContent}
    />
  );
}
