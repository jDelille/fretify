/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import SimpleBar from 'simplebar-react';
import { CloseIcon } from '../../assets';
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

  const currentScale = Store.scale;

  return !isModalHidden ? (
    <>
      <button
        type="button"
        className="overlay"
        onClick={() => setIsModalHidden(true)}
      />
      <SimpleBar className="modal">
        <header>
          <h1>Scales / Modes</h1>
          <CloseIcon onClick={() => setIsModalHidden(true)} />
        </header>
        <div className="wrapper">
          <div className="options">
            {scales &&
              scales?.name.map((scale) => {
                return (
                  <button
                    type="button"
                    key={scale}
                    className={
                      scale === currentScale ? 'selected' : 'unselected'
                    }
                    onClick={() => {
                      changeScale(scale);
                      setIsModalHidden(true);
                    }}
                  >
                    <p className="name">{scale}</p>
                  </button>
                );
              })}
          </div>
        </div>
      </SimpleBar>
    </>
  ) : null;
}
