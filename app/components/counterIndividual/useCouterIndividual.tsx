"use client";

import { checkDeathCommander } from "@/app/helpers/checkDeathCommander";
import {
  getRegistredPlayers,
  updateRegistredPlayers,
} from "@/app/helpers/registredPlayers";
import { useEffect, useRef, useState } from "react";
import { Layers } from "../types";
import { checkDeath } from "@/app/helpers/checkDeath";

export const useCouterIndividual = (playerNumber: number) => {
  const infoPlayer = getRegistredPlayers(playerNumber);

  const [player, setPlayer] = useState(infoPlayer);

  const [layerView, setLayerView] = useState<Layers>("life");
  const addIntervalId = useRef<NodeJS.Timeout | null>(null);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const [playerDeath, setPlayerDeath] = useState(false);

  const revivePlayer = () => {
    setPlayerDeath(false);
  };

  const deathPlayer = () => {
    setPlayerDeath(true);
  };

  const deathByCommander = checkDeathCommander(player?.commanderDamage);

  const addLife = () => {
    setPlayer({
      ...player,
      life: player?.life + 1,
    });
  };

  const minusLife = () => {
    setPlayer({
      ...player,
      life: player?.life - 1,
    });
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
    const damage: number = player?.commanderDamage[index] ?? 0;
    if (damage < 21 && player?.life) {
      let damanges = [...player?.commanderDamage];

      damanges[index] = damage + 1;

      minusLife();
      setPlayer({
        ...player,
        commanderDamage: damanges,
      });
    }
  };

  const minusCommanderDamage = (index: number) => {
    const damage: number = player?.commanderDamage[index] ?? 0;
    if (damage > 0) {
      let damanges = [...player?.commanderDamage];

      damanges[index] = damage - 1;

      addLife();
      setPlayer({
        ...player,
        commanderDamage: damanges,
      });
    }
  };

  useEffect(() => {

    updateRegistredPlayers(player);
  }, [player]);

  useEffect(() => {
    setTimeout(() => {
      checkDeath(playerNumber, deathPlayer);
    }, 2000);
  }, [player]);


  return {
    player,
    addLife,
    minusLife,
    pressAdd,
    dropAdd,
    pressMinus,
    dropMinus,
    layerView,
    setLayerView,
    addCommanderDamage,
    minusCommanderDamage,
    deathByCommander,
    playerDeath,
    revivePlayer,
  };
};
