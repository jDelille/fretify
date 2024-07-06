import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import './scss/global.scss';
import ChordLibrary from './pages/ChordLibrary';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState('dark');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

  const Layout = () => {
    return (
      <div className="layout">
        <Navbar toggleTheme={toggleTheme} theme={theme} />

        <div className="main-content">
          <Outlet />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home theme={theme} />,
        },
        {
          path: '/chord-library',
          element: <ChordLibrary theme={theme} />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
