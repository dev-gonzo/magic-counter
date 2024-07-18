import { Counter, Direction } from "../types";

export type Props = {
  counter: Counter;
  direction: Direction;
  inverse?: boolean;
  player: number;
  outerConter: "left" | "right"
};
