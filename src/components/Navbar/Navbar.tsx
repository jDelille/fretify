import './Navbar.scss';

export type NavbarProps = {
  toggleTheme: () => void;
};

function Navbar({ toggleTheme }: NavbarProps) {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h1>Fretify</h1>
        </div>
        <div className="settings">
          <button type="button" onClick={toggleTheme}>
            Theme
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
