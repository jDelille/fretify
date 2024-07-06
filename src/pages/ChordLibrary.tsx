import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme } from '../scss/theme';
import SimpleBar from 'simplebar-react';
import Fretboard from '../components/Fretboard/Fretboard';

type ChordLibraryProps = {
  theme: string;
};
const ChordLibrary: React.FC<ChordLibraryProps> = ({ theme }) => {
  return (
    <div className="page">
      <SimpleBar className="fretboardWrapper">
        <Fretboard />
      </SimpleBar>
    </div>
  );
};

export default ChordLibrary;
