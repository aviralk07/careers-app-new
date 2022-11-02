import { styled } from "@mui/system";
import {  Typography } from "@mui/material";
import { Theme } from "./HeadersComponents/Theme";
import AppBar from "@mui/material/AppBar";


export const StyledAppBar = styled(AppBar)({
  backgroundColor: "white",
});

export const StyledTypography = styled(Typography)({
  color: Theme.colors.base1,
  backgroundColor: Theme.colors.normal,
  fontWeight: "bold",
  position: "absolute",
  left: "250px",
  display: "inline",
  width: "100%",
  fontSize: "40px",
  fontFamily: "Sans-serif",
  
});
