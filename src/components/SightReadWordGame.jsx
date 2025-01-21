import { useEffect, useState } from 'react';

import { words } from '../data';

import WordListFilter from './WordsListFilter';
import { useSpeechRecognition, makeFilter, baseFilter } from '../helpers';

const SightReadWordGame = () => {
  const [word, setWord] = useState('');
  const [filter, setFilter] = useState(baseFilter);
  const [guess, setGuess] = useState(null);
  const [confidence, setConfidence] = useState(null);

  const getWord = () => {
    const choices = Object.entries(words)
      .filter(makeFilter(filter))
      .map(([key]) => key);
    const winner = choices[Math.floor(Math.random() * choices.length)];
    setWord(winner);
    setGuess(null);
    setConfidence(null);
  };

  useEffect(getWord, []);

  const onresult = (g, c) => {
    setGuess(g);
    setConfidence(c);
  };
  const speechRecognition = useSpeechRecognition(onresult);

  return (
    <div>
      <h1>
        {word || '...Loading'}
        {guess && (guess === word ? 'Correct!!!' : 'Try Again.')}
      </h1>
      <p>{guess && `I heard: ${guess} with ${confidence} confidence`}</p>
      <WordListFilter filter={filter} setFilter={setFilter} />
      <button onClick={() => speechRecognition.start()}>🎤</button>
      <button onClick={getWord}>Get Word</button>
    </div>
  );
};

export default SightReadWordGame;
