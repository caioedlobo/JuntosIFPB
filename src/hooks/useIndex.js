import { useState } from 'react';


export const useIndex = () => {
  const [indexes, setIndexes] = useState([]);

  const toggleIndex = (index) => {
    if (indexes.includes(index)) {
      return setIndexes((prev) => prev.filter((i) => i !== index));
    }

    return setIndexes((prev) => [...prev, index]);
  };


  const includesIndex = (index) => {
    return indexes.includes(index);
  };


  const removeAll = () => {
    setIndexes([]);
  };

  const removeIndex = (index) => {
    setIndexes((prev) => prev.filter((i) => i !== index));
  };

  return { includesIndex, toggleIndex, removeAll, removeIndex };
};