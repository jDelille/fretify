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
          <h1>Fretify</h1>
        </div>
        {/* <div className="links">
          <p>About</p>
        </div> */}
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
