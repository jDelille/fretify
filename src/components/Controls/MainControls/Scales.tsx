import { Scale } from 'tonal';
import Modal from './Modal';
import '../Controls.scss';

export type ScaleProps = {
  isScaleModal: boolean;
  toggleScales: () => void;
};

function Scales({ isScaleModal, toggleScales }: ScaleProps) {
  const scaleNames: string[] = Scale.names();

  return (
    <>
      <div className="option">
        <button type="button" className="optionButton" onClick={toggleScales}>
          Major Pentatonic Scale
        </button>
      </div>
      {isScaleModal && <Modal scales={{ name: scaleNames }} />}
    </>
  );
}

export default Scales;
