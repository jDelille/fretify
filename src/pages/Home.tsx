import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { lightTheme, darkTheme, GlobalStyles } from '../scss/theme';
import Navbar from '../components/Navbar/Navbar';
import MainControls from '../components/Controls/MainControls/MainControls';
import Fretboard from '../components/Fretboard/Fretboard';
import FretboardData from '../components/FretboardData/FretboardData';
import MobileControls from '../components/Controls/MobileControls/MobileControls';
import { ScaleModal, SoundModal, TuningModal } from '../components/Modals';
import GuitarConstants from '../constants/@GuitarConstants';
import { Scale } from 'tonal';

import React from 'react';

type HomeProps = {
  theme: string;
 }
const Home: React.FC<HomeProps> = ({theme}) => {
  const guitarNames: string[] = GuitarConstants.guitars;
  const scaleNames: string[] = Scale.names();

  const { tunings } = GuitarConstants;

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
    <>
      <GlobalStyles />
      <div className="page">

        {/* Modals */}
        <SoundModal sounds={{ name: guitarNames }} />
        <TuningModal tunings={tunings}/>
        <ScaleModal scales={{ name: scaleNames }} />

        <MainControls />
        <SimpleBar className="fretboardWrapper">
          <Fretboard />
        </SimpleBar>
        <MobileControls />
        {/* <FretboardData /> */}
        {/* <Footer /> */}
      </div>
    </>
  </ThemeProvider>
  );
};

export default Home;

