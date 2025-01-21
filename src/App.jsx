import { BrowserRouter, Route, Routes } from 'react-router';

import Header from './components/Header';
import WordList from './components/WordsList';
import MissingLetterWordGame from './components/MissingLetterWordGame';
import SightReadWordGame from './components/SightReadWordGame';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Header />} />
      </Routes>
      <Routes>
        <Route path="/words" element={<WordList />} />
        <Route
          path="/missingLetterWordGame"
          element={<MissingLetterWordGame />}
        />
        <Route path="/sightReadWordGame" element={<SightReadWordGame />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
