import React from "react";
import { StyledTypography } from "./BodyDescriptionStyle";

export default function BodyDescription() {
  return (
    <>
      <StyledTypography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <h4
          style={{
            color: "black",
            fontSize: "22px",
            textAlign: "center",
          }}
        >
          Company Description
        </h4>

        <p
          style={{
            color: "black",
            fontSize: "14px",
            textAlign: "center",
            width: "30%",
            position: "absolute",
            right: "532px",
            fontFamily: "sans-serif",
          }}
        >
          {" "}
          When we started Chavy,we wanted to create the kind of environment we'd
          enjoy coming to everyday.Workable is filled with talented people who
          dont't take themselves too seriously. we don't work 80-hour a week.
        </p>
      </StyledTypography>
    </>
  );
}
