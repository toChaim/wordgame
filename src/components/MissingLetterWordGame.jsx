import { useEffect, useRef, useState } from 'react';

import { words } from '../data';

import WordListFilter from './WordsListFilter';
import { makeFilter, baseFilter } from '../helpers';

const MissingLetterWordGame = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [word, setWord] = useState('');
  const [missing, setMissing] = useState(0);
  const [guess, setGuess] = useState('');
  const getGuess = () =>
    word
      .split('')
      .map((c, i) => (missing === i ? guess || '_' : c))
      .join('')
      .toLowerCase();
  const [filter, setFilter] = useState(baseFilter);
  const choices = Object.entries(words).filter(makeFilter(filter));

  const pickWord = () => {
    const winner = choices[Math.floor(Math.random() * choices.length)][0];
    const index = Math.floor(Math.random() * winner.length);
    setWord(winner);
    setMissing(index);
    setGuess('');
    setSuccess(null);
  };
  useEffect(pickWord, []);

  return (
    <div>
      {/* <h2>Gues Word Game</h2> */}
      <h1>
        {success !== null && `Your guess was ${success ? 'right' : 'wrong'}`}
      </h1>
      <WordListFilter filter={filter} setFilter={setFilter} />
      <div>
        <h1>
          {getGuess()
            .split('')
            .map((c, i) => (
              <span key={i} className={i === missing ? 'guess' : ''}>
                {c}
              </span>
            ))}
        </h1>
      </div>
      {word && (
        <input
          ref={ref}
          autoFocus
          value={guess}
          onChange={({ target: { value } }) =>
            setGuess(value[value.length - 1] || '')
          }
        />
      )}
      {word && (
        <button
          onClick={() => {
            const utterance = new window.SpeechSynthesisUtterance(getGuess());
            window.speechSynthesis.speak(utterance);
          }}
        >
          👂
        </button>
      )}
      {word && (
        <button
          onClick={() => {
            setSuccess(!!words[getGuess()]);
            ref.current.focus();
          }}
        >
          Check
        </button>
      )}
      <button onClick={pickWord}>Get Word</button>
    </div>
  );
};

export default MissingLetterWordGame;
