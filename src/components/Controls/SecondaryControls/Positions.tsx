/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { observer } from 'mobx-react';
import Store from '../../../mobx/Store';
import '../Controls.scss';

const Positions = observer(() => {
  const positions = [1, 2, 3, 4, 5];
  const currentPosition = Store.position;

  const handleClick = (position: number) => {
    Store.setPosition(position);
  };
  return (
    <div className="positions">
      {positions.map((position, i) => {
        return (
          <div
            key={position}
            onClick={() => handleClick(position)}
            className={
              Store.position === position || currentPosition === position
                ? 'activePosition'
                : 'position'
            }
          >
            <p>{position}</p>
          </div>
        );
      })}
      <div
        onClick={() => handleClick(6)}
        className={currentPosition === 6 ? 'activePosition' : 'position'}
      >
        <p>all</p>
      </div>
    </div>
  );
});

export default Positions;
