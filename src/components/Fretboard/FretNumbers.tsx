import styles from './Fretboard.module.scss';

export type FretNumbersProps = {
  totalFrets: number;
  startFret: number | null;
  endFret: number | null;
};

function FretNumbers({ totalFrets, startFret, endFret }: FretNumbersProps) {
  return (
    <div className={styles.fretNumbers}>
      {Array.from({ length: totalFrets }, (_, index) => {
        const fretNumber = index + 1;

        return (
          <div className={styles.fretNumber} key={index}>
            {fretNumber - 1}
            {index === 12 ? (
              <div className={styles.doubleDot}>
                <div className={styles.dot} />
                <div className={styles.dot} />
              </div>
            ) : (
              <div className={styles.dot} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FretNumbers;
