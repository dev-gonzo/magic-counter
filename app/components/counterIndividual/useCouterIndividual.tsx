"use client";

import { useState, useRef } from "react";

export const useCouterIndividual = () => {
  const [life, setLife] = useState(40);
  const addIntervalId = useRef<NodeJS.Timeout | null>(null);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const addLife = () => {
    setLife((prev) => ++prev);
  };

  const minusLife = () => {
    setLife((prev) => prev === 0 ? 0 : --prev);
  };

  const pressAdd = () => {
    timeoutId.current = setTimeout(() => {
      if (addIntervalId.current === null) {
        addIntervalId.current = setInterval(addLife, 200);
      }
    }, 300); 
  };

  const dropAdd = () => {
    clearTimeout(timeoutId.current!);
    if (addIntervalId.current) {
      clearInterval(addIntervalId.current);
      addIntervalId.current = null;
    }
  };

  const pressMinus = () => {
    timeoutId.current = setTimeout(() => {
      if (addIntervalId.current === null) {
        addIntervalId.current = setInterval(minusLife, 200);
      }
    }, 300); 
  };

  const dropMinus = () => {
    clearTimeout(timeoutId.current!);
    if (addIntervalId.current) {
      clearInterval(addIntervalId.current);
      addIntervalId.current = null;
    }
  };

  return {
    life,
    addLife,
    minusLife,
    pressAdd,
    dropAdd,
    pressMinus,
    dropMinus,
  };
};
