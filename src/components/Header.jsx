import { NavLink } from 'react-router';

const Header = () => {
  return (
    <header>
      <h1>Word Games</h1>
      <nav>
        <NavLink to="/words">Words</NavLink>
        <NavLink to="/missingLetterWordGame">Missing Letter Game</NavLink>
        <NavLink to="/sightReadWordGame">Sight Read Game</NavLink>
      </nav>
    </header>
  );
};

export default Header;
