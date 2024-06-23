import './Fretboard.scss';

export type FretNumbersProps = {
  totalFrets: number;
  startFret: number | null;
  endFret: number | null;
};

function FretNumbers({ totalFrets, startFret, endFret }: FretNumbersProps) {
  return (
    <div className="fretNumbers">
      {Array.from({ length: totalFrets }, (_, index) => {
        const fretNumber = index + 1;

        return (
          <div className="fretNumber" key={index}>
            {fretNumber - 1}
            {index === 12 ? (
              <div className="doubleDot">
                <div className="dot" />
                <div className="dot" />
              </div>
            ) : (
              <div className="dot" />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FretNumbers;
