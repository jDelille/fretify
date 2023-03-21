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
      {positions.map((position) => {
        return (
          <button
            type="button"
            key={position}
            onClick={() => handleClick(position)}
            className={
              Store.position === position || currentPosition === position
                ? 'activePosition'
                : 'position'
            }
          >
            <p>{position}</p>
          </button>
        );
      })}
      <button
        type="button"
        onClick={() => handleClick(6)}
        className={currentPosition === 6 ? 'activePosition' : 'position'}
      >
        <p>all</p>
      </button>
    </div>
  );
});

export default Positions;
