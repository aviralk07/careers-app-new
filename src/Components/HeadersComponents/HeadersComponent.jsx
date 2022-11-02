import React from "react";
import {
  
  StyledAppBar,
  StyledTypography,
} from "../HeaderStyle";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function HeadersComponent() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <StyledAppBar position="static">
          <Toolbar>
            <StyledTypography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Chavy
            </StyledTypography>
          </Toolbar>
        </StyledAppBar>
      </Box>
    </>
  );
}
