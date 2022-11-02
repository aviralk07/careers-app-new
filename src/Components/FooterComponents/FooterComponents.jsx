import React from "react";
import { StyledTypography } from "./FooterStyle";

import Box from "@mui/material/Box";

import img1 from "./phr.webp";
import { positions } from "@mui/system";

export default function FooterComponents() {
  return (
    <>
      <Box sx={{}}>
        <StyledTypography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <div
            style={{
              textAlign: "center",
              position: "relative ",
              bottom: "20px",
            }}
          >
            {" "}
            <img src={img1} alt="" />
          </div>
        </StyledTypography>
      </Box>
    </>
  );
}
