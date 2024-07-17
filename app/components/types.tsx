import { Dispatch, SetStateAction } from "react";
import { InfoPlayer } from "../types";

export type Layers = "life" | "commanderDamage";

export type Direction = "horizontal" | "vertical";

export type Counter = {
  player: InfoPlayer;
  addLife: () => void;
  minusLife: () => void;
  pressAdd: () => void;
  dropAdd: () => void;
  pressMinus: () => void;
  dropMinus: () => void;
  layerView: Layers;
  setLayerView: Dispatch<SetStateAction<Layers>>;
  addCommanderDamage: (index: number) => void;
  minusCommanderDamage: (index: number) => void;
  deathByCommander: boolean;
  playerDeath: boolean;
  revivePlayer: () => void;
};
