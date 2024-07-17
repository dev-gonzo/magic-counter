"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { GiDiceShield } from "react-icons/gi";
import { TbArrowBadgeDownFilled, TbArrowBadgeUpFilled } from "react-icons/tb";
import { Counter } from "../types";

export const LifeCounter = ({ counter }: { counter: Counter }) => {
  const {
    life,
    addLife,
    minusLife,
    pressAdd,
    dropAdd,
    pressMinus,
    dropMinus,
    setLayerView,
    deathByCommander
  } = counter;

  console.log(deathByCommander)
  return (
    <>
      <Stack
        bgcolor={"blue"}
        width={"25%"}
        justifyContent={"center"}
        alignItems={"center"}
        border={"1px solid #fff"}
      >
        <Stack flexGrow={1} justifyContent={"center"} alignItems={"center"}>
          <Box>
            <Button
              onClick={addLife}
              onMouseDown={pressAdd}
              onMouseUp={dropAdd}
              onMouseLeave={dropAdd}
            >
              <TbArrowBadgeUpFilled size={40} />
            </Button>
          </Box>
          <Box>
            <Typography variant="h3" color={life && !deathByCommander ? undefined : "red"}>
              {life}
            </Typography>
          </Box>
          <Box>
            <Button
              onClick={minusLife}
              onMouseDown={pressMinus}
              onMouseUp={dropMinus}
              onMouseLeave={dropMinus}
            >
              <TbArrowBadgeDownFilled size={40} />
            </Button>
          </Box>
        </Stack>
        <Stack
          paddingY={1}
          flexWrap={"nowrap"}
          flexDirection={"row"}
          alignItems={"center"}
          gap={0.5}
          onClick={() => setLayerView("commanderDamage")}
        >
          <GiDiceShield /> <Typography variant="caption">2</Typography>
        </Stack>
      </Stack>
    </>
  );
};
