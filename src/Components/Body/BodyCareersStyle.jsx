import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Theme } from "../HeadersComponents/Theme";

export const StyledBox = styled(Box)({
  backgroundColor: "##f2f5f3",
  width: "100%",
  height: "20vh",
  position: "absolute",
  top: "1800px",
});

export const StyleTextField = styled(TextField)({});

export const StyledGrid = styled(Grid)({
  width: "100%",
  margin: "0 auto",
  marginTop: "100px",
  height: "100px",
});
export const StyledButton = styled(Button)({
  border: "4px solid black",
  position: "relative",
  left: "750px",
  bottom: "50px",
});

export const StyledTypography = styled(Typography)({
  color: Theme.colors.base1,
  backgroundColor: Theme.colors.normal,
  fontWeight: "bold",
  position: "relative",
  left: "250px",
  display: "inline",
  width: "100%",
  fontSize: "40px",
  fontFamily: "Sans-serif",
  top: "600px",
});


export const StyledLable = styled("lable")({
 
});
