/* eslint-disable jsx-a11y/control-has-associated-label */
import Store from '../../mobx/Store';
import Modal from './Modal';
import useModalStore from '../../hooks/useModalStore';
import '../Controls/Controls.scss';

export type Scales = {
  name: string[];
};

type Props = {
  scales: Scales;
};

export default function ScaleModal({ scales }: Props) {
  const { modals, closeModal } = useModalStore();

  const changeScale = (scale: string) => {
    Store.setScale(scale);
  };

  const currentScale = Store.scale;

  const handleCloseModal = () => {
    closeModal('scaleModal');
  };

  const bodyContent = (
    <div>
      {scales &&
        scales?.name.map((scale) => {
          return (
            <button
              type="button"
              key={scale}
              className={scale === currentScale ? 'selected' : 'unselected'}
              onClick={() => {
                changeScale(scale);
              }}
            >
              <p className="name">{scale}</p>
            </button>
          );
        })}
    </div>
  );

  return (
    <Modal
      title="Scales"
      onClose={handleCloseModal}
      isOpen={modals.scaleModal}
      body={bodyContent}
    />
  );
}
