import { Box, Stack } from "@mui/material";
import { Bar } from "./bar";
import { CounterIndividual } from "../counterIndividual";
import { Props } from "./types";

export const FourPlayers = ({ setReload, reload }: Props) => {
  return (
    <>
      <Stack
        flexDirection={"row"}
        width={"100%"}
        maxHeight={"100vh"}
        padding={0.5}
        key={`stack-four-${reload}`}
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
              backgroundImage: `url(../../assets/dmu-277-plains.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "rotate(180deg)",
            }}
          >
            <Stack
              width={"100%"}
              height={"100%"}
              sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <CounterIndividual
                direction="horizontal"
                inverse={false}
                player={1}
                outerConter="left"
              />
            </Stack>
          </Stack>
          <Stack
            flexGrow={1}
            borderRadius={5}
            sx={{
              backgroundImage: `url(../../assets/dmu-278-island.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Stack
              width={"100%"}
              height={"100%"}
              sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <CounterIndividual
                direction="horizontal"
                inverse={false}
                player={1}
                outerConter="right"
              />
            </Stack>
          </Stack>
        </Stack>
        <Bar setReload={setReload} />
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
              backgroundImage: `url(../../assets/dmu-279-swamp.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "rotate(180deg)",
            }}
          >
            <Stack
              width={"100%"}
              height={"100%"}
              sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <CounterIndividual
                direction="horizontal"
                inverse={false}
                player={1}
                outerConter="right"
              />
            </Stack>
          </Stack>
          <Stack
            flexGrow={1}
            borderRadius={5}
            sx={{
              backgroundImage: `url(../../assets/dmu-280-mountain.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Stack
              width={"100%"}
              height={"100%"}
              sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <CounterIndividual
                direction="horizontal"
                inverse={false}
                player={1}
                outerConter="left"
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
