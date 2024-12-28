import { BrowserRouter, Route, Routes } from 'react-router';

import Header from './components/Header';
import WordList from './components/WordsList';

import './App.css';
import GuesWordGame from './components/GuesWordGame';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Header />} />
      </Routes>
      <Routes>
        <Route path="/words" element={<WordList />} />
        <Route path="/guesWordGame" element={<GuesWordGame />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
