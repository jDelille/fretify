import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../scss/theme';
import Navbar from '../components/Navbar/Navbar';

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
          <h1>Home</h1>
        </div>
      </>
    </ThemeProvider>
  );
}

export default Home;
