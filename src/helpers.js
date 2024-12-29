export const baseFilter = { pos: '', level: '' };

export const makeFilter = (filterObj) => {
  return ([, wordObj]) => {
    const entries = Object.entries(filterObj);
    if (entries.length === 0) {
      return true;
    }
    return entries.every(([key, value]) =>
      value ? wordObj[key].includes(value) : true,
    );
  };
};
