"use client";

import { CommanderDamage } from "../commanderDamage";
import { LifeCounter } from "../lifeCounter";
import { Counter } from "../types";
import { useCouterIndividual } from "./useCouterIndividual";

export const CounterIndividual = () => {
  const counter = useCouterIndividual();

  return (
    <>
      {counter?.layerView == "life" ? (
        <LifeCounter counter={counter} />
      ) : (
        <CommanderDamage counter={counter} />
      )}
    </>
  );
};
