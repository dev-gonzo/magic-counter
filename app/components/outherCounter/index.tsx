"use client";

import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { BsShieldFillPlus } from "react-icons/bs";
import { FaRadiation } from "react-icons/fa6";
import { GiRollingDices } from "react-icons/gi";
import { LeftRight } from "../LeftRight";

export const OutherCounter = ({
  direction,
}: {
  direction: "left" | "right";
}) => {
  return (
    <Stack
      paddingY={1}
      flexWrap={"nowrap"}
      alignItems={direction == "right" ? "flex-end" : "flex-start"}
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
          Icon={<BsShieldFillPlus size={22} />}
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
          Icon={
            <Image
              src="/../../assets/phyrexa.svg"
              alt="Next.js Logo"
              width={30}
              height={25}
              priority
              style={{ margin: -4 }}
            />
          }
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
          Icon={<FaRadiation size={22} />}
        />
      </Stack>

      <Stack flexDirection={"row"} alignItems={"center"} gap={0.5}>
        <GiRollingDices size={22} />
      </Stack>
    </Stack>
  );
};