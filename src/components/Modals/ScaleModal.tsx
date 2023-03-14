/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import SimpleBar from 'simplebar-react';
import Store from '../../mobx/Store';
import '../Controls/Controls.scss';

export type Scales = {
  name: string[];
};

type Props = {
  scales: Scales;
};

export default function ScaleModal({ scales }: Props) {
  const [isModalHidden, setIsModalHidden] = useState(false);

  const changeScale = (scale: string) => {
    Store.setScale(scale);
  };

  return !isModalHidden ? (
    <>
      <button
        type="button"
        className="overlay"
        onClick={() => setIsModalHidden(true)}
      />
      <SimpleBar className="modal">
        {scales &&
          scales?.name.map((scale) => {
            return (
              <button
                type="button"
                key={scale}
                className="scale"
                onClick={() => {
                  changeScale(scale);
                  setIsModalHidden(true);
                }}
              >
                <p className="name">{scale}</p>
              </button>
            );
          })}
      </SimpleBar>
    </>
  ) : null;
}
