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
import { SoundModal, TuningModal } from '../components/Modals';
import GuitarConstants from '../constants/@GuitarConstants';

function Home() {
  const [theme, setTheme] = useState('dark');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');
  const guitarNames: string[] = GuitarConstants.guitars;
  const { tunings } = GuitarConstants;

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <div className="page">
          
          {/* Modals */}
          <SoundModal sounds={{ name: guitarNames }} />
          <TuningModal tunings={tunings}/>

          <Navbar toggleTheme={toggleTheme} theme={theme} />
          <MainControls />
          <SimpleBar className="fretboardWrapper">
            <Fretboard />
          </SimpleBar>
          <MobileControls />
          <FretboardData />
          {/* <Footer /> */}
        </div>
      </>
    </ThemeProvider>
  );
}

export default Home;
