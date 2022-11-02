import React from "react";
import { StyledTypography } from "./BodyStyle";

export default function BodyBanner() {
  return (
    <>
      <StyledTypography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <h4
          style={{
            color: "white",
            fontSize: "22px",
            textAlign: "center",
          }}
        >
          Banner Section
        </h4>

        <p
          style={{
            color: "white",
            fontSize: "14px",
            textAlign: "center",
            width: "30%",
            position: "absolute",
            right: "495px",
          }}
        >
          We,re a young company,but we dont thing it's old fashioned to care
          about good benifits and job satisfaction. We work hard,but we make
          sure that everyone at Chavy is able to enjoy a company.
        </p>
      </StyledTypography>
    </>
  );
}
