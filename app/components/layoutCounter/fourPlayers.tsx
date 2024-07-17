import { Stack } from "@mui/material";
import { Bar } from "./bar";
import { CounterIndividual } from "../counterIndividual";

export const FourPlayers = () => {
  return (
    <>
      <Stack
        flexDirection={"row"}
        width={"100%"}
        maxHeight={"100vh"}
        padding={0.5}
      >
        <Stack
          flexGrow={1}
          justifyContent={"center"}
          width={"calc(50% - 40px)"}
          gap={1}
        >
          <Stack
            flexGrow={1}
            borderRadius={5}
            sx={{
              backgroundImage: `url(../../assets/thb-253-mountain.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CounterIndividual
              direction="horizontal"
              inverse={true}
              player={1}
            />
          </Stack>
          <Stack
            flexGrow={1}
            borderRadius={5}
            sx={{
              backgroundImage: `url(../../assets/thb-253-mountain.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CounterIndividual
              direction="horizontal"
              inverse={false}
              player={1}
            />
          </Stack>
        </Stack>
        <Bar />
        <Stack
          flexGrow={1}
          justifyContent={"center"}
          width={"calc(50% - 40px)"}
          gap={1}
        >
          <Stack
            flexGrow={1}
            borderRadius={5}
            sx={{
              backgroundImage: `url(../../assets/thb-250-plains.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CounterIndividual
              direction="horizontal"
              inverse={true}
              player={1}
            />
          </Stack>
          <Stack
            flexGrow={1}
            borderRadius={5}
            sx={{
              backgroundImage: `url(../../assets/thb-250-plains.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CounterIndividual
              direction="horizontal"
              inverse={false}
              player={1}
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
