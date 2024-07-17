import { EightPlayers } from "./eightPlayers";
import { SevenPlayers } from "./sevenPlayers";
import { Props } from "./types";

export const LayoutCounter = ({ players = 2 }: Props) => {
  return (
    <>
      <SevenPlayers />
    </>
  );
};
