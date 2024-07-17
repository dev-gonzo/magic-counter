import { Dispatch, SetStateAction } from "react";

export type Layers = "life" | "commanderDamage";

export type Counter = {
  life: number;
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
  commanderDamage: number[];
  deathByCommander: boolean
};
