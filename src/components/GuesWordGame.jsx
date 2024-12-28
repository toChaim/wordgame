import { useState } from 'react';
import { words } from '../data';
import WordListFilter from './WordsListFilter';

const GuesWordGame = () => {
  const [word, setWord] = useState('');
  const [missing, setMissing] = useState(0);
  const [guess, setGuess] = useState('');
  const [success, setSuccess] = useState(null);
  const [filter, setFilter] = useState({ pos: '', level: '' });

  const handleFilter = ([_, wordObj]) => {
    const entries = Object.entries(filter);
    if (entries.length === 0) {
      return true;
    }
    return entries.every(([key, value]) =>
      value ? wordObj[key].includes(value) : true,
    );
  };
  const getWord = () => {
    const choices = Object.entries(words)
      .filter(handleFilter)
      .map(([key, value]) => key);
    const winner = choices[Math.floor(Math.random() * choices.length)];
    const index = Math.floor(Math.random() * winner.length);
    setWord(winner);
    setMissing(index);
    setGuess('');
    setSuccess(null);
  };

  return (
    <div>
      {/* <h2>Gues Word Game</h2> */}
      <h1>
        {success !== null && `Your guess was ${success ? 'right' : 'wrong'}`}
      </h1>
      <WordListFilter filter={filter} setFilter={setFilter} />
      <button onClick={getWord}>Get Word</button>
      <div>
        <h1>
          {word
            .split('')
            .map((c, i) => (i === missing ? guess || '_' : c))
            .join('')}
        </h1>
      </div>
      {word && (
        <input
          autoFocus
          value={guess}
          onChange={({ target: { value } }) =>
            setGuess(value[value.length - 1] || '')
          }
        />
      )}
      {word && (
        <button
          onClick={() =>
            setSuccess(
              words[
                word
                  .split('')
                  .map((c, i) => (i === missing ? guess || '_' : c))
                  .join('')
              ],
            )
          }
        >
          Check
        </button>
      )}
    </div>
  );
};

export default GuesWordGame;
