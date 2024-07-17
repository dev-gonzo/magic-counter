"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { GiDiceShield } from "react-icons/gi";
import {
  TbArrowBadgeRightFilled,
  TbArrowBadgeLeftFilled,
} from "react-icons/tb";
import { Counter } from "../types";
import { FaVirus } from "react-icons/fa";
import { Props } from "./types";

export const LifeCounter = ({ counter, direction, inverse }: Props) => {
  const {
    life,
    addLife,
    minusLife,
    pressAdd,
    dropAdd,
    pressMinus,
    dropMinus,
    setLayerView,
    deathByCommander,
  } = counter;

  return (
    <>
      <Stack flexGrow={1} justifyContent={"center"} alignItems={"center"}>
        <Stack
          flexGrow={1}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            transform:
              direction == "vertical"
                ? inverse
                  ? "rotate(270deg)"
                  : "rotate(90deg)"
                : undefined,
          }}
        >
          <Stack
            flexGrow={1}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"row"}
          >
            <Box>
              <Button
                onClick={addLife}
                onMouseDown={pressAdd}
                onMouseUp={dropAdd}
                onMouseLeave={dropAdd}
                onTouchStart={pressAdd}
                onTouchEnd={dropAdd}
                sx={{ color: "gray" }}
              >
                <TbArrowBadgeLeftFilled size={40} />
              </Button>
            </Box>
            <Box>
              <Typography
                variant="h1"
                color={life && !deathByCommander ? "white" : "red"}
                fontWeight={"bold"}
                fontFamily={"monospace"}
                sx={{ textShadow: "2px 2px black" }}
              >
                {life}
              </Typography>
            </Box>
            <Box>
              <Button
                onClick={minusLife}
                onMouseDown={pressMinus}
                onMouseUp={dropMinus}
                onMouseLeave={dropMinus}
                onTouchStart={pressMinus}
                onTouchEnd={dropMinus}
                sx={{ color: "gray", textShadow: "2px 2px black" }}
              >
                <TbArrowBadgeRightFilled size={40} />
              </Button>
            </Box>
          </Stack>
          <Stack
            paddingY={1}
            flexWrap={"nowrap"}
            flexDirection={"row"}
            alignItems={"center"}
            gap={0.5}
          >
            <FaVirus onClick={() => console.log("aaa")} />{" "}
            <Typography variant="caption">2</Typography>
            <GiDiceShield
              onClick={() => setLayerView("commanderDamage")}
              size={20}
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
