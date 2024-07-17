import { Box, Stack } from "@mui/material";
import { CounterIndividual } from "../components/counterIndividual";

export default function Page() {
  return (
    <>
      <Stack
        height={"100vh"}
        bgcolor={"red"}
        flexDirection={"row"}
        flexWrap={"wrap"}
      >
        <CounterIndividual />
        <CounterIndividual />
        <CounterIndividual />
        <CounterIndividual />
        <CounterIndividual />
        <CounterIndividual />
        <CounterIndividual />
        <CounterIndividual />
    
      </Stack>
    </>
  );
}
