import { useEffect, useState } from 'react';

import { words } from '../data';

import WordListFilter from './WordsListFilter';
import { makeFilter, baseFilter } from '../helpers';

const GuesWordGame = () => {
  const [word, setWord] = useState('');
  const [missing, setMissing] = useState(0);
  const [guess, setGuess] = useState('');
  const [success, setSuccess] = useState(null);
  const [filter, setFilter] = useState(baseFilter);

  const getWord = () => {
    const choices = Object.entries(words)
      .filter(makeFilter(filter))
      .map(([key, value]) => key);
    const winner = choices[Math.floor(Math.random() * choices.length)];
    const index = Math.floor(Math.random() * winner.length);
    setWord(winner);
    setMissing(index);
    setGuess('');
    setSuccess(null);
  };
  useEffect(getWord, []);

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
          {word.split('').map((c, i) =>
            i === missing ? (
              <span key={i} className="guess">
                {guess || '_'}
              </span>
            ) : (
              c
            ),
          )}
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
