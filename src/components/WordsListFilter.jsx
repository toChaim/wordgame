import { words, partsOfSpeech } from '../data';

const WordListFilter = ({ filter, setFilter }) => {
  const { pos, level } = filter;
  const levels = Array.from(
    new Set(Object.values(words).map(({ level }) => level)),
  );

  return (
    <div>
      <label>
        Parts of Speech:{' '}
        <select
          value={pos}
          onChange={({ target: { value } }) =>
            setFilter({ ...filter, pos: value })
          }
        >
          <option value="">SELECT</option>
          {Object.entries(partsOfSpeech).map(([part, partObj]) => (
            <option key={part} value={part}>
              {part}
            </option>
          ))}
        </select>
      </label>
      <label>
        Level:{' '}
        <select
          value={level}
          onChange={({ target: { value } }) =>
            setFilter({ ...filter, level: value })
          }
        >
          <option value="">SELECT</option>
          {levels.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default WordListFilter;
