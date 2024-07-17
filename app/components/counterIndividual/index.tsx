"use client";

import { CommanderDamage } from "../commanderDamage";
import { Death } from "../death";
import { LifeCounter } from "../lifeCounter";
import { Props } from "./types";
import { useCouterIndividual } from "./useCouterIndividual";

export const CounterIndividual = ({ direction, inverse, player }: Props) => {
  const counter = useCouterIndividual(player);

  if (counter?.playerDeath) {
    return <Death revivePlayer={counter.revivePlayer} />;
  }

  return (
    <>
      {counter?.layerView == "life" ? (
        <LifeCounter
          counter={counter}
          direction={direction}
          inverse={inverse}
          player={player}
        />
      ) : (
        <CommanderDamage counter={counter} />
      )}
    </>
  );
};
