import { NavLink } from 'react-router';

const Header = () => {
  return (
    <header>
      <h1>Word Games</h1>
      <nav>
        <NavLink to="/words">Words</NavLink>
        <NavLink to="/guesWordGame">Gues Word Game</NavLink>
      </nav>
    </header>
  );
};

export default Header;
