import { FivePlayers } from "./fivePlayers";
import { Props } from "./types";

export const LayoutCounter = ({ players = 2 }: Props) => {
  return (
    <>
      <FivePlayers />
    </>
  );
};
