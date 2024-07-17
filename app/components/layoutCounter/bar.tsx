import { Box, Stack } from "@mui/material";
import { MdMenu } from "react-icons/md";

export const Bar = () => {
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
            sx={{transform: "rotate(90deg)"}}
            color={"white"}
            bgcolor={"gray"}
          >
            <MdMenu size={25}/>
          </Stack>
        </Stack>
      </>
    </>
  );
};
