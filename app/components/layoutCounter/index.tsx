import { FourPlayers } from "./fourPlayers";
import { Props } from "./types";

export const LayoutCounter = ({ players = 2 }: Props) => {
  return (
    <>
      <FourPlayers />
    </>
  );
};
