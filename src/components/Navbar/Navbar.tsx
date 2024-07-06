import { Link } from 'react-router-dom';
import Switch from '../Switch/Switch';
import './Navbar.scss';

export type NavbarProps = {
  toggleTheme: () => void;
  theme: string;
};

function Navbar({ toggleTheme, theme }: NavbarProps) {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Link to='/' className='nav-link home-link'>Fretify</Link>
        </div>
        <div className="links">
          <p className='inactive nav-link'>Ear Training</p>
          <Link to="/chord-library" className='active nav-link'>Chord Library</Link>
          <p className='inactive nav-link'>Community</p>
          <p className='inactive nav-link'>Settings</p>
          <p className='inactive nav-link'>Login</p>
          <p className='inactive nav-link'>Register</p>
        </div>
        <div className="settings">
          <Switch
            id="theme-switch"
            label=""
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
