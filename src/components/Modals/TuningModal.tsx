/* eslint-disable jsx-a11y/control-has-associated-label */
import Store from '../../mobx/Store';
import Modal from './Modal';
import useModalStore from '../../hooks/useModalStore';
import '../Controls/Controls.scss';
import { useCallback } from 'react';
import { observer } from 'mobx-react';

export type TuningProps = {
  name: string;
  notes: string[];
  tuning: number[];
};

type Props = {
  tunings: TuningProps[];
};

const TuningModal = observer(({ tunings }: Props) => {
  const { modals, closeModal } = useModalStore();

  const changeTuning = useCallback((tuning: TuningProps) => {
    Store.setTuning(tuning);
  }, []);

  const currentTuning = Store.tuning;

  const handleCloseModal = useCallback(() => {
    closeModal('tuningModal');
  }, [closeModal]);

  const standardTunings = tunings.filter(tuning => tuning.name.includes('Standard'));
  const dropTunings = tunings.filter(tuning => tuning.name.includes('Drop'));
  const openTunings = tunings.filter(tuning => tuning.name.includes('Open'));
  const otherTunings = tunings.filter(tuning => !standardTunings.includes(tuning) && !dropTunings.includes(tuning) && !openTunings.includes(tuning));

  const renderTuningSection = (sectionTitle: string, tuningList: TuningProps[]) => (
    <div className='section' key={sectionTitle}>
      <h3>{sectionTitle}</h3>
      {tuningList.map((tuning) => (
        <label key={tuning.name}>
          <input
            type="radio"
            name="tuning"
            value={tuning.name}
            checked={currentTuning === tuning.name}
            onChange={() => {
              changeTuning(tuning);
              // Store.setTuning(tuning)
            }}
          />
          {tuning.name}
          <div className="notes">
            {tuning.notes.map((note: string) => (
              <span key={note} className="note">
                {note} {" "}
              </span>
            ))}
          </div>
        </label>
      ))}
    </div>
  );

  const bodyContent = (
    <div>
      {renderTuningSection('Standard Tunings', standardTunings)}
      {renderTuningSection('Drop Tunings', dropTunings)}
      {renderTuningSection('Open Tunings', openTunings)}
      {renderTuningSection('Other Tunings', otherTunings)}
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
});


export default TuningModal;