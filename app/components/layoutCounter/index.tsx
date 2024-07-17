import { EightPlayers } from "./eightPlayers";
import { Props } from "./types";

export const LayoutCounter = ({ players = 2 }: Props) => {
  return (
    <>
      <EightPlayers />

    </>
  );
};
