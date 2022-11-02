import React from "react";
import { StyledBox } from "./BodyVideoStyle";
import ReactPlayer from "react-player";

export default function BodyVideo() {
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
          Embedded Video
        </h4>
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=cG2WZXPhcNQ"
            style={{
              textAlign: "center",
              position: "absolute",
              width: "566px",
              right: "400px",
              height: "290px",
            }}
          />
        </div>
      </StyledBox>
    </>
  );
}
