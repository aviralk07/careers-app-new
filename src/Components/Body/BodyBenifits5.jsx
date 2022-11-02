import React from "react";
import { StyledTypography } from "./BodyBenifits1Style";
import { StyledBox } from "./BodyBenifits1Style";

import { StyledToolbar } from "./BodyBenifits1Style";
export default function BodyBenifits1() {
  return (
    <>
      <StyledBox sx={{ flexGrow: 1 }}>
        <StyledToolbar>
          <StyledTypography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div
              style={{
                color: "black",
                fontSize: "20px",
                textAlign: "center",
                position: "relative",
                top: "-35px",
                right: "14px",
              }}
            >
            <i class="fa-solid fa-money-bill-trend-up"
                
                style=
                {{
                  color: "#30b070",
                  backgroundColor: "#e8ebea",
                  border: "1px solid #e8ebea",
                  position: "relative",
                  right: "5px",
                  padding: "7px",
                }}
                >
              </i>
           Stock Option Plan
            </div>
          </StyledTypography>
        </StyledToolbar>
      </StyledBox>
    </>
  );
}