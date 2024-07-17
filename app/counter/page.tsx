"use client";

import { Stack } from "@mui/material";
import { LayoutCounter } from "../components/layoutCounter";
import { useState } from "react";

export default function Page() {
  return (
    <>
      <Stack
        height={"100vh"}
        bgcolor={"black"}
        flexDirection={"row"}
        flexWrap={"wrap"}
      >
        <LayoutCounter />

      </Stack>
    </>
  );
}
