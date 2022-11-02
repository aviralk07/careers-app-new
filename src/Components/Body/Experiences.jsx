import React from "react";
import {
  StyledAppBar,
  StyledTypography,
  StyledTypographyh2,
  StyledTypography3,
  StyledTypography4,
  StyledBoxFooter,
} from "./ExperienceStyle";
// import img2 from "./p.webp";

import StyledBox from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import StyledButton from "@mui/material/Button";

export default function HeadersComponent() {
  return (
    <>
      <StyledBox sx={{ flexGrow: 1 }}>
        <StyledAppBar position="static">
          <Toolbar>
            <StyledTypography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Chavy
            </StyledTypography>
            <h3
              style={{
                position: "relative",
                top: "30px",
                color: "black",
                left: "80px",
              }}
            >
              UI/UX Designer
            </h3>{" "}
            <StyledButton
              variant="contained"
              id="fire"
              onClick={() => {
                window.location.replace("/manager");
              }}
              style={{
                border: "1px solid black",
                backgroundColor: "darkgreen",
                fontSize: "15px",
                position: "relative",
                left: "900px",
                top: "50px",
              }}
            >
              Apply Now
            </StyledButton>
            <StyledButton
              variant="contained"
              style={{
                color: "black",
                backgroundColor: "lightgrey",
                fontSize: "15px",
                position: "relative",
                left: "680px",
                top: "50px",
                border: "1px solid black",
              }}
            >
              Back
            </StyledButton>
            {/* <Link to="/experiences">View & Apply Router</Link> */}
            <StyledTypographyh2>
              <i
                className="fa-solid fa-code-merge"
                style={{
                  marginRight: "30px",
                  position: "relative",
                  right: "110px",
                  fontFamily: "sans-serif",
                }}
              >
                Design
              </i>{" "}
              <i
                className="fa fa-map-marker"
                aria-hidden="true"
                style={{
                  marginRight: "30px",
                  position: "relative",
                  right: "110px",
                  fontFamily: "sans-serif",
                }}
              >
                Bengaluru
              </i>
              <i
                className="fa fa-graduation-cap"
                aria-hidden="true"
                style={{
                  marginRight: "30px",
                  position: "relative",
                  right: "110px",
                  fontFamily: "sans-serif",
                }}
              >
                Experience: 2 to 5 years
              </i>
            </StyledTypographyh2>
          </Toolbar>
        </StyledAppBar>
        <StyledBoxFooter sx={{}}>
          <StyledTypography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div
              style={{
                textAlign: "center",
                position: "relative ",
                bottom: "20px",
              }}
            >
              {" "}
              {/* <img src={img2} alt="" /> */}
            </div>
          </StyledTypography>
        </StyledBoxFooter>
        <div
          style={{
            border: " 1px solid grey",
            height: "606px",
            position: "absolute",
            left: "60%",
            margin: "-4px",
            top: "155px",
          }}
        ></div>
        <StyledTypography3>
          <h4>Job Description</h4>
          <p>
            We are looking for a User Experience Designer(UX), who will be
            helping us to optimised the User experience for our flagship product
            PyjamaHr
          </p>
          <h4>Key Responsibilties:</h4>
          <p>
            Conducting user resul and testing Need to have experience with PRDs
            to wireframes. Gather feedback with teams and follow an iterative
            process.Maintain a standars and process for producting
            deliverables.Work with ui designer to implement attractive desing
            Communicate design ideas and prototyle devlopers
          </p>
          <h4>Required Skills:</h4>
          <p>
            2-4 years experience. Experience in B2B SaaS product(preferrd)
            Familiarity with wire Frame Experience in UI/UX like figma A user
            centric mindset Attention to details
          </p>
          <h4>Pre-requisites:</h4>
          <p>
            Must have excellent communication and communicating skills Quick
            ,lerner adapter to changing business need. Would be have plus point
            to have experience with startups
          </p>
          <h4>About-Us:</h4>
          <p>
            Fullthrottlelabs is a product studion where we buit cutting edge B2B
            SaaS application.Currently we are in process of closing a $4.5 mil
            round for a flagship product PyjamaHR and looking forward to scaling
            rapaidly.join us to be the part of journey!
          </p>
          <h4>Benifits and perks:</h4>
          <p>
            Fullthrottle Labs offers the array of benifits including competetive
            salaries,equity options, free food and beverages and weekly team
            outing!
          </p>
          <p>Location Bangalore (Koramangl- 8thblock)</p>
        </StyledTypography3>
        <StyledTypography4>
          <h3>Employment Type</h3>
          <p>Freelancer</p>
          <h3>Industry Type</h3>
          <p>IT,Software</p>
          <h3>Seniority Level</h3>
          <p>Entary Level ,Associate</p>
          <h3>Salary range (Anual)</h3>
          <p>Rs XX Lakhs - Rs XX Lakhs</p>
          <h3>Education </h3>
          <p>Bachelor Degree</p>
          <h3>Skills</h3>
          <div>
            <p>
              ADOBE XD <p>Figma</p>
              <p>Photoshop</p>
            </p>
          </div>
        </StyledTypography4>
      </StyledBox>
    </>
  );
}
