import { useState } from 'react';
import { words } from '../words';

import WordListFilter from './WordsListFilter';

const WordList = () => {
  const [filters, setFilters] = useState([]);
  return (
    <div>
      <WordListFilter />
      <ul>
        {Object.entries(words)
          .filter(([word, wordObj]) => filters.every((fn) => fn(word, wordObj)))
          .map(([word, wordObj], i) => (
            <li key={word}>
              {i + 1}: {word}: {wordObj.partOfSpeech}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default WordList;
