import React from 'react';

interface Props {
  onClick: () => void;
}

const CloseIcon: React.FC<Props> = ({ onClick }) => {
  return (
    <svg
      width="18"
      height="24"
      viewBox="0 0 24 24"
      fill="#999999"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M17 7L7 17M7 7L17 17"
        stroke="#999999"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};


export default CloseIcon;
