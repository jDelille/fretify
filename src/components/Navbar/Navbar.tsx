import MoonIcon from '../../assets/MoonIcon';
import SunIcon from '../../assets/SunIcon';
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
          <h1>Fretify</h1>
        </div>
        <div className="settings">
          <button type="button" onClick={toggleTheme}>
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
