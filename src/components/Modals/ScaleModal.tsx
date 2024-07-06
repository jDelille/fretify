/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { observer } from 'mobx-react-lite';
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

const ScaleModal = observer(({ scales }: Props) => {
  const { modals, closeModal } = useModalStore();

  const changeScale = (scale: string) => {
    Store.setScale(scale);
  };

  const currentScale = Store.scale;

  const handleCloseModal = () => {
    closeModal('scaleModal');
  };

  const majorScales = scales.name.filter(scale => scale.includes('major'));
  const minorScales = scales.name.filter(scale => scale.includes('minor'));
  const lydianScales = scales.name.filter(scale => scale.includes('lydian') && !scale.includes('mixolydian'));
  const mixolydianScales = scales.name.filter(scale => scale.includes('mixolydian'));
  const pentatonicScales = scales.name.filter(scale => scale.includes('pentatonic'));

  const otherScales = scales.name.filter(
    scale => !majorScales.includes(scale) && !minorScales.includes(scale) && !lydianScales.includes(scale) && !mixolydianScales.includes(scale) &&!pentatonicScales.includes(scale)
  );


  const renderScaleSection = (sectionTitle: string, scaleList: string[]) => (
    <div className='section' key={sectionTitle}>
      <h3>{sectionTitle}</h3>
      {scaleList.map((scale) => (
        <label key={scale}>
          <input
            type="radio"
            name="scale"
            value={scale}
            checked={currentScale === scale}
            onChange={() => changeScale(scale)}
          />
          {scale}
        </label>
      ))}
    </div>
  );

  const bodyContent = (
    <div>
      {renderScaleSection('Major Scales', majorScales)}
      {renderScaleSection('Minor Scales', minorScales)}
      {renderScaleSection('Lydian Scales', lydianScales)}
      {renderScaleSection('Mixolydian Scales', mixolydianScales)}
      {renderScaleSection('Pentatonic Scales', pentatonicScales)}
      {renderScaleSection('Other Scales', otherScales)}
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
});

export default ScaleModal;