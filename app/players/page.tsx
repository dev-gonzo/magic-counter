"use client";

import { Stack, Typography } from "@mui/material";
import { FaUser } from "react-icons/fa";
import { registredPlayers } from "../helpers/registredPlayers";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Stack
        gap={3}
        flexDirection={"row"}
        padding={2}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"100vh"}
        bgcolor={"black"}
      >
        <Link
          href="/counter"
          scroll={false}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Stack
            flexDirection={"row"}
            borderRadius={20}
            bgcolor={"gray"}
            padding={2}
            onClick={() => {
              registredPlayers(2);
            }}
          >
            <FaUser size={50} />
            <FaUser size={50} />
            <Typography variant="h4">2</Typography>
          </Stack>
        </Link>

        <Link
          href="/counter"
          scroll={false}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Stack
            flexDirection={"row"}
            borderRadius={20}
            bgcolor={"gray"}
            padding={2}
            onClick={() => registredPlayers(3)}
          >
            <FaUser size={50} />
            <FaUser size={50} />
            <FaUser size={50} />
            <Typography variant="h4">3</Typography>
          </Stack>
        </Link>

        <Link
          href="/counter"
          scroll={false}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Stack
            flexDirection={"row"}
            borderRadius={20}
            bgcolor={"gray"}
            padding={2}
            onClick={() => registredPlayers(4)}
          >
            <FaUser size={50} />
            <FaUser size={50} />
            <FaUser size={50} />
            <FaUser size={50} />
            <Typography variant="h4">4</Typography>
          </Stack>
        </Link>

        <Link
          href="/counter"
          scroll={false}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Stack
            flexDirection={"row"}
            borderRadius={20}
            bgcolor={"gray"}
            padding={2}
            onClick={() => registredPlayers(5)}
          >
            <FaUser size={50} />
            <FaUser size={50} />
            <FaUser size={50} />
            <FaUser size={50} />
            <FaUser size={50} />
            <Typography variant="h4">5</Typography>
          </Stack>
        </Link>
        <Link
          href="/counter"
          scroll={false}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Stack
            flexDirection={"row"}
            borderRadius={20}
            bgcolor={"gray"}
            padding={2}
            onClick={() => registredPlayers(6)}
          >
            <FaUser size={50} />
            <FaUser size={50} />
            <FaUser size={50} />
            <FaUser size={50} />
            <FaUser size={50} />
            <FaUser size={50} />
            <Typography variant="h4">6</Typography>
          </Stack>
        </Link>
        <Link
          href="/counter"
          scroll={false}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Stack
            flexDirection={"row"}
            borderRadius={20}
            bgcolor={"gray"}
            padding={2}
            onClick={() => registredPlayers(7)}
          >
            <FaUser size={50} />
            <FaUser size={50} />
            <FaUser size={50} />
            <FaUser size={50} />
            <FaUser size={50} />
            <FaUser size={50} />
            <FaUser size={50} />
            <Typography variant="h4">7</Typography>
          </Stack>
        </Link>
        <Link
          href="/counter"
          scroll={false}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Stack
            flexDirection={"row"}
            borderRadius={20}
            bgcolor={"gray"}
            padding={2}
            onClick={() => registredPlayers(8)}
          >
            <FaUser size={50} />
            <FaUser size={50} />
            <FaUser size={50} />
            <FaUser size={50} />
            <FaUser size={50} />
            <FaUser size={50} />
            <FaUser size={50} />
            <FaUser size={50} />
            <Typography variant="h4">8</Typography>
          </Stack>
        </Link>
      </Stack>
    </>
  );
}
