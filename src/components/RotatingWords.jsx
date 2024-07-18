import React, { useState, useEffect } from "react";

const RotatingWords = ({ words, interval }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(wordInterval);
  }, [words, interval]);

  return <span>{words[index]}</span>;
};

export default RotatingWords;
