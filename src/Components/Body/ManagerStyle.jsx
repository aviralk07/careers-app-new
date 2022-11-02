import { styled } from "@mui/system";

import { Grid, Typography } from "@mui/material";
import { Theme } from "../HeadersComponents/Theme";
import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/material";

export const StyledAppBar = styled(AppBar)({
  backgroundColor: "white",
  height: "150px",
});

export const StyledTypography = styled(Typography)({
  color: Theme.colors.base1,
  backgroundColor: "white",
  fontWeight: "bold",
  position: "absolute",
  left: "185px",
  bottom: "85px",
  display: "inline",
  width: "100%",
  fontSize: "40px",
  fontFamily: "Sans-serif",
});

export const StyledTypographyh2 = styled(Typography)({
  height: "150px",
  color: "grey",
  position: "relative",
  top: "120px",
  left: "-150px",
  fontFamily:"sans-serif"
});

export const StyledTypographyB1 = styled(Typography)({
  backgroundColor: "white",
  height: "150px",
});

export const StyledBoxFooter = styled(Box)({
  backgroundColor: "lightgrey",
  height: "150px",
  position: "relative",
  top: "2200px",
});

export const StyledBox = styled(Box)({});

export const StyledGrid = styled(Grid)({
  textAlign: "center",
});

export const StyledInput = styled("input")({
  minWidth: "400px",
});
export const StyledInput1 = styled("input")({
  minWidth: "300px",
  position:"relative",
  right:"100px"
});
export const StyledLable = styled("lable")({
  position: "relative",
  left: "82px",
  bottom: "20px",
});