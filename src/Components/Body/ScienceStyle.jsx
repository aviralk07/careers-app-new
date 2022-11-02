import {  styled } from "@mui/system";

import {  Typography } from "@mui/material";
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
  left: "217px",
  bottom: "85px",
  display: "inline",
  width: "100%",
  fontSize: "40px",
  fontFamily: "Sans-serif",
});
export const StyledBox = styled(Box)({
  backgroundColor: "white",
  height: "150px",
});
export const StyledTypographyh2 = styled(Typography)({
  height: "150px",
  color: "grey",
  position: "relative",
  top: "120px",
  right: "210px",
});


export const StyledBoxFooter = styled(Box)({
    backgroundColor: "lightgrey",
    height: "150px",
    position:"relative",
    top:"700px"
  });

  export const StyledTypography3 = styled(Typography)({
  
  position:"relative",
  bottom:"130px",
  left:"100px",
  width:"600px",
  height:"50vh",
  fontSize:"12px"

  });
  
  export const StyledTypography4 = styled(Typography)({
  
    position:"relative",
    bottom:"540px",
    left:"880px",
    width:"600px",
    height:"50vh",
    fontSize:"12px"
  
    });