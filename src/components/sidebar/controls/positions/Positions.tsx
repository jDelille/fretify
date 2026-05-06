'use client';

import styles from './Positions.module.scss';
import Store from '@/mobx/Store';

const Positions = () => {
  const positions = [1, 2, 3, 4, 5];
  const currentPosition = Store.position;

  const handleClick = (position: number) => {
    Store.setPosition(position);
  };
  return (
    <div className={styles.control}>
      <p className={styles.label}>Positions</p>

      <div className={styles.positions}>
        {positions.map((position) => {
          return (
            <button
              type="button"
              key={position}
              onClick={() => handleClick(position)}
              className={
                Store.position === position || currentPosition === position
                  ? styles.activePosition
                  : styles.position
              }
            >
              <p>{position}</p>
            </button>
          );
        })}
        <button
          type="button"
          onClick={() => handleClick(6)}
          className={
            currentPosition === 6 ? styles.activePosition : styles.position
          }
        >
          <p>all</p>
        </button>
      </div>
    </div>
  );
};

export default Positions;
