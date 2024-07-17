import { TwoPlayers } from "./twoPlayers";
import { Props } from "./types";

export const LayoutCounter = ({ players = 2 }: Props) => {
  return (
    <>
      <TwoPlayers />
    </>
  );
};
