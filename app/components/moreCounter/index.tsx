"use client";

import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { FaRadiation } from "react-icons/fa6";
import { GiRollingDices } from "react-icons/gi";
import { RiShieldFlashFill } from "react-icons/ri";
import { GiCheckedShield } from "react-icons/gi";
import { GiMedievalGate } from "react-icons/gi";
import { GiImperialCrown } from "react-icons/gi";
import { FaDotCircle } from "react-icons/fa";
import { LeftRight } from "../LeftRight";

export const MoreCounter = ({ direction }: { direction: "left" | "right" }) => {
  return (
    <Stack
      paddingY={1}
      flexWrap={"nowrap"}
      alignItems={"flex-end"}
      gap={2}
      color={"white"}
      padding={1}
    >
      <Stack flexDirection={"row"} alignItems={"center"} gap={0.5}>
        <LeftRight
          direction={direction}
          Value={
            <Typography component={"span"} variant="caption">
              2
            </Typography>
          }
          Icon={<RiShieldFlashFill size={22} />}
        />
      </Stack>
      <Stack flexDirection={"row"} alignItems={"center"} gap={0.5}>
        <LeftRight
          direction={direction}
          Value={
            <Typography component={"span"} variant="caption">
              2
            </Typography>
          }
          Icon={<GiCheckedShield size={22} />}
        />
      </Stack>
      <Stack flexDirection={"row"} alignItems={"center"} gap={0.5}>
        <LeftRight
          direction={direction}
          Value={<FaDotCircle size={10} color="yellow" />}
          Icon={<GiMedievalGate size={22} />}
        />
      </Stack>
      <Stack flexDirection={"row"} alignItems={"center"} gap={0.5}>
        <LeftRight
          direction={direction}
          Value={<FaDotCircle size={10} color="yellow" />}
          Icon={<GiImperialCrown size={22} />}
        />
      </Stack>
    </Stack>
  );
};
