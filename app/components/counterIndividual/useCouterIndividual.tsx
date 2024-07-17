"use client";

import { useState, useRef, useEffect } from "react";
import { Layers } from "../types";

export const useCouterIndividual = () => {
  const [layerView, setLayerView] = useState<Layers>("life");
  const [life, setLife] = useState(40);
  const addIntervalId = useRef<NodeJS.Timeout | null>(null);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  const [commanderDamage, setCommanderDamage] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [playerDeath, setPlayerDeath] = useState(false);

  const revivePlayer = () => {
    setPlayerDeath(false)
  }

  const deathByCommander = commanderDamage?.filter((item) => item === 21).length
    ? true
    : false;

  const addLife = () => {
    setLife((prev) => ++prev);
  };

  const minusLife = () => {
    setLife((prev) => (prev === 0 ? 0 : --prev));
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

  const addCommanderDamage = (index: number) => {
    const damage: number = commanderDamage[index] ?? 0;
    if (damage < 21 && life) {
      let damanges = [...commanderDamage];

      damanges[index] = damage + 1;

      minusLife();
      setCommanderDamage(damanges);
    }
  };

  const minusCommanderDamage = (index: number) => {
    const damage: number = commanderDamage[index] ?? 0;
    if (damage > 0) {
      let damanges = [...commanderDamage];

      damanges[index] = damage - 1;

      addLife();
      setCommanderDamage(damanges);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if(!life || deathByCommander){
        setPlayerDeath(true)
      }
    }, 2000)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [life, commanderDamage])

  return {
    life,
    addLife,
    minusLife,
    pressAdd,
    dropAdd,
    pressMinus,
    dropMinus,
    layerView,
    setLayerView,
    commanderDamage,
    addCommanderDamage,
    minusCommanderDamage,
    deathByCommander,
    playerDeath,
    revivePlayer
  };
};
