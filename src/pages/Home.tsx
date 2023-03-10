import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { lightTheme, darkTheme, GlobalStyles } from '../scss/theme';
import Navbar from '../components/Navbar/Navbar';
import MainControls from '../components/Controls/MainControls/MainControls';
import Fretboard from '../components/Fretboard/Fretboard';
import SecondaryControls from '../components/Controls/SecondaryControls/SecondaryControls';
import FretboardData from '../components/FretboardData/FretboardData';

function Home() {
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <div className="page">
          <Navbar toggleTheme={toggleTheme} />
          <MainControls />
          <SimpleBar className="fretboardWrapper">
            <Fretboard />
          </SimpleBar>
          {/* <SecondaryControls />
          <FretboardData /> */}
        </div>
      </>
    </ThemeProvider>
  );
}

export default Home;
