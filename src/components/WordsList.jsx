import { useState } from 'react';

import { words } from '../data';

import WordListFilter from './WordsListFilter';
import { baseFilter, makeFilter } from '../helpers';

const WordList = () => {
  const [filter, setFilter] = useState(baseFilter);

  return (
    <div>
      <WordListFilter filter={filter} setFilter={setFilter} />
      <ul>
        {Object.entries(words)
          .filter(makeFilter(filter))
          .map(([word, wordObj], i) => (
            <li key={word}>
              {i + 1}: {word}:{' '}
              {wordObj.pos.map((p) => (
                <span key={word + p} className={p}>
                  {p}
                </span>
              ))}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default WordList;
