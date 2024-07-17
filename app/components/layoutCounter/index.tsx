import { FivePlayers } from "./fivePlayers";
import { SixPlayers } from "./sixPlayers";
import { Props } from "./types";

export const LayoutCounter = ({ players = 2 }: Props) => {
  return (
    <>
      <SixPlayers />
    </>
  );
};
