import React, { useEffect, useState } from "react";
import { StyledBox } from "./BodyGalleryStyle";
// import LOGO1 from "src/img/img3.jpeg";
// import {StyledCarousel} from 'react-material-ui-carousel'
import { StyledGrid } from "./BodyGalleryStyle";
import img1 from "./img1.png";
import img3 from "./img2.webp";
import img2 from "./img4.webp";
export default function BodyGallery() {
  const [selectImage, setSelectImage] = useState(0);
  const [allImages, setAllImages] = useState(img1, img2, img3);
  useEffect(() => {
    setInterval(() => {
      setSelectImage((selectImage) => (selectImage < 2 ? selectImage + 1 : 0));
    }, 20000);
  }, []);
  return (
    <>
      <div>
        <img
          src={allImages[selectImage]}
          width={300}
          height={400}
          style={{
            position: "relative",
            bottom: "00px",
            textAlign: "center",
            top: "200px",
          }}
        />
      </div>
      <img
        src={allImages[selectImage]}
        width={300}
        height={400}
        style={{
          position: "relative",
          bottom: "00px",
          textAlign: "center",
          top: "500px",
        }}
      />
      <StyledBox variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <h4
          style={{
            color: "black",
            fontSize: "22px",
            textAlign: "center",
          }}
        >
          Gallery Section
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
          when we started chavy,we wanted to create the kind of environment we'd
          enjoy
        </p>

        <StyledGrid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <button
            style={{
             
              fontSize: "24px",

              borderRadius: "70px",
              position: "absolute",
              right: "532px",
              fontFamily: "sans-serif",
            }}
            onClick={() => {
              if (selectImage > 0) setSelectImage(selectImage - 1);
            }}
          >
        
         
          </button>
          <button
            onClick={() => {
              if (selectImage > 0) setSelectImage(selectImage - 1);
            }}
          >
            Previous
          </button>
          <button
            onClick={() => {
              if (selectImage < allImages.length - 1)
                setSelectImage(selectImage + 1);
            }}
          >
            Next
          </button>
          {/* <div
            style={{
              position: "relative",
              left: "300px",
            }}
          > */}

          {/* <img src={img2} alt=""  style={{
            
            }} />  */}
          {/* <StyledCarousel>  */}
          {/* <img src={img2} alt="ffbkjfdbfhfhfdhkfdhfjkdbkjfd" /> */}

          <div
            className="indicator"
            style={{
              width: "20%",
              display: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(50%)",
            }}
          ></div>

          {/* </StyledCarousel>  */}

          {/* </StyledTypography> */}
        </StyledGrid>
      </StyledBox>
    </>
  );
}
