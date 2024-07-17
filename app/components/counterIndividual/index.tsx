"use client";

import { CommanderDamage } from "../commanderDamage";
import { Death } from "../death";
import { LifeCounter } from "../lifeCounter";

import { useCouterIndividual } from "./useCouterIndividual";

export const CounterIndividual = () => {
  const counter = useCouterIndividual();

  if (counter?.playerDeath) {
    return <Death revivePlayer={counter.revivePlayer} />;
  }

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
