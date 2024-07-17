import { Stack } from "@mui/material";
import Link from "next/link";
import { FaUserFriends } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { FaRepeat } from "react-icons/fa6";
import {
  getRegistredQtd,
  registredPlayers,
} from "@/app/helpers/registredPlayers";
import { Props } from "./types";

export const Bar = ({ setReload }: Props) => {
  return (
    <>
      <>
        <Stack justifyContent={"center"} alignItems={"center"} padding={0.5}>
          <Stack
            borderRadius={50}
            width={40}
            height={40}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ transform: "rotate(270deg)" }}
            color={"white"}
            onClick={() => {
              registredPlayers(getRegistredQtd() + 1, true);
              setReload((prev: number) => ++prev);
            }}
          >
            <FaRepeat size={25} />
          </Stack>
          <Stack
            borderRadius={50}
            width={40}
            height={40}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ transform: "rotate(90deg)" }}
            color={"white"}
            bgcolor={"gray"}
          >
            <MdMenu size={25} />
          </Stack>
          <Stack
            borderRadius={50}
            width={40}
            height={40}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ transform: "rotate(270deg)" }}
            color={"white"}
          >
            <Link
              href={"./players"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <FaUserFriends size={25} />
            </Link>
          </Stack>
        </Stack>
      </>
    </>
  );
};
