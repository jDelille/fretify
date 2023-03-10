import React, { useState } from 'react';
import '../Controls.scss';

interface NumberOfFretsProps {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
}

const NumberOfFrets: React.FC<NumberOfFretsProps> = ({
  min,
  max,
  step,
  value,
  onChange,
}) => {
  const [sliderValue, setSliderValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setSliderValue(newValue);
    onChange(newValue);
  };

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={sliderValue}
      onChange={handleChange}
    />
  );
};

export default NumberOfFrets;
