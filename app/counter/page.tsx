'use client'

import { Box, Stack } from "@mui/material";
import { CounterIndividual } from "../components/counterIndividual";
import { LayoutCounter } from "../components/layoutCounter";
import { useEffect } from "react";
import { registredPlayers } from "../helpers/registredPlayers";

export default function Page() {
  useEffect(() => {
    registredPlayers();
  }, []);
  return (
    <>
      <Stack
        height={"100vh"}
        bgcolor={"black"}
        flexDirection={"row"}
        flexWrap={"wrap"}
      >
        <LayoutCounter players={2} />
        {/* <CounterIndividual />
        <CounterIndividual />
        <CounterIndividual />
        <CounterIndividual />
        <CounterIndividual />
        <CounterIndividual />
        <CounterIndividual />
        <CounterIndividual /> */}
      </Stack>
    </>
  );
}
