"use client";

import { getRegistredQtd } from "@/app/helpers/registredPlayers";
import { EightPlayers } from "./eightPlayers";
import { FivePlayers } from "./fivePlayers";
import { FourPlayers } from "./fourPlayers";
import { SevenPlayers } from "./sevenPlayers";
import { SixPlayers } from "./sixPlayers";
import { ThreePlayers } from "./threePlayers";
import { TwoPlayers } from "./twoPlayers";
import { Props } from "./types";
import { useState } from "react";

export const LayoutCounter = () => {
  const [reload, setReload] = useState(1);
  const players = getRegistredQtd();

  const layout = [
    <></>,
    <TwoPlayers key={1} setReload={setReload} reload={reload} />,
    <ThreePlayers key={2} setReload={setReload} reload={reload} />,
    <FourPlayers key={3} setReload={setReload} reload={reload} />,
    <FivePlayers key={4} setReload={setReload} reload={reload} />,
    <SixPlayers key={5} setReload={setReload} reload={reload} />,
    <SevenPlayers key={6} setReload={setReload} reload={reload} />,
    <EightPlayers key={7} setReload={setReload} reload={reload} />,
  ];
  return <>{layout[players]}</>;
};
