"use client";

import { CommanderDamage } from "../commanderDamage";
import { Death } from "../death";
import { LifeCounter } from "../lifeCounter";
import { Props } from "./types";
import { useCouterIndividual } from "./useCouterIndividual";

export const CounterIndividual = ({ direction, inverse}: Props) => {
  const counter = useCouterIndividual();

  if (counter?.playerDeath) {
    return <Death revivePlayer={counter.revivePlayer} />;
  }

  return (
    <>
      {counter?.layerView == "life" ? (
        <LifeCounter counter={counter} direction={direction} inverse={inverse}/>
      ) : (
        <CommanderDamage counter={counter} />
      )}
    </>
  );
};
