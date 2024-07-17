"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { TbArrowBadgeDownFilled, TbArrowBadgeUpFilled } from "react-icons/tb";
import { useCouterIndividual } from "./useCouterIndividual";

export const CounterIndividual = () => {
  const { life, addLife, minusLife, pressAdd, dropAdd, pressMinus, dropMinus } =
    useCouterIndividual();
  return (
    <>
      <Stack
        bgcolor={"blue"}
        width={"25%"}
        justifyContent={"center"}
        alignItems={"center"}
        border={"1px solid #fff"}
      >
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
          <Typography variant="h3" color={life ? undefined : "red"}>{life}</Typography>
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
    </>
  );
};
