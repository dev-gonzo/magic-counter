import { Box, Stack } from "@mui/material";
import { CounterIndividual } from "../components/counterIndividual";
import { LayoutCounter } from "../components/layoutCounter";

export default function Page() {
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
