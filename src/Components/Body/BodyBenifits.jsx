import React from "react";
import { StyledBox } from "./BodyBenifitsStyle";

export default function BodyBenifits() {
  return (
    <>
      <StyledBox variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <h4
          style={{
            color: "black",
            fontSize: "22px",
            textAlign: "center",
          }}
        >
          Benifits Section
        </h4>
      </StyledBox>
    </>
  );
}
