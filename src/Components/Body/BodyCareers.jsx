
import React from "react";
import { StyledBox } from "./BodyCareersStyle";
import { StyleTextField } from "./BodyCareersStyle";
import { StyledGrid } from "./BodyCareersStyle";
import { StyledButton } from "./BodyCareersStyle";
import { StyledTypography } from "./BodyCareersStyle";
import {StyledLable} from "./BodyCareersStyle"
// import { Link } from "react-router-dom";


// import { useNavigate } from "react-router-dom";

// import { BrowserRouter as Routes, Route } from "react-router-dom";

export default function BodyCareers() {
  // let navigate = useNavigate();

  return (
    <>
      {/* <Route exact path="/" element={<Home/>}/> */}

      <StyledBox variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <h4
          style={{
            color: "black",
            fontSize: "22px",
            textAlign: "center",
          }}
        >
          Careers at Chavy
        </h4>
        <StyledGrid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          style={{
            position: "absolute",
            top: "25px",
            left:"-120px"
          }}
        >
          <div  style={{
            position: "relative",
           
            left:"50px"
          }}
          >Department</div>
          <div>Location</div>
          <div>
            <i class="fa-solid fa-magnifying-glass"></i>Search
          </div>
        </StyledGrid>

        <StyledGrid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          style={{
            position: "absolute",
            top: "100px",
            left: "30px",
          }}
        >
          <div>
          <select
            id="cars"
            name="carlist"
            form="carform"
            style={{
              width: "250px",
              position: "relative",
              left: "35px",
              bottom: "30px",
              height:"55px"
            }}
          >
            {" "}
            <option value="hurr">Select Department</option>
          </select>
          </div>
          <div>
          
            
          <select
            id="cars"
            name="carlist"
            form="carform"
            style={{
              width: "250px",
              position: "relative",
              left: "-45px",
              bottom: "30px",
              height:"55px"
            }}
          >
            {" "}
            <option value="hurr">Select Location</option>
          </select>
          </div>
          <div>
            <StyleTextField
              id="outlined-basic"
              label="Seach"
              variant="outlined"
              style={{
                width: "250px",
              position: "relative",
              left: "-100px",
              bottom: "0px",
              height:"122px"
              }}
            />
          </div>
        </StyledGrid>
        <div
          style={{
            position: "relative",
            top: "50px",
          }}
        >
          <StyledGrid container spacing={2}>
            <StyledGrid
              item
              xs={6}
              md={8}
              style={{
                border: "4px solid black",
              }}
            >
              <h3
                style={{
                  position: "relative",
                  bottom: "30px",
                }}
              >
                UI/UX Designer
              </h3>{" "}
              <StyledButton
                variant="contained"
                color="success"
                onClick={() => {
                  window.location.replace("/experiences");
                }}
              >
                View & Apply
              </StyledButton>
              {/* <Link to="/experiences">View & Apply Router</Link> */}
              <div
                style={{ position: "relative", bottom: "50px", color: "gray" , fontFamily:"sans-serif" , fontSize:"13px"}}
             >
                <i
                  className="fa-solid fa-code-merge" 
                  style={{ marginRight: "30px" }}
                >
                  Design
                </i>{" "}
                <i
                  className="fa fa-map-marker"
                  aria-hidden="true"
                  style={{ marginRight: "30px" }}
                >
                  Bengaluru
                </i>
                <i
                  className="fa fa-graduation-cap"
                  aria-hidden="true"
                  style={{ marginRight: "30px" }}
                >
                  Experience: 2 to 5 years
                </i>
              </div>
            </StyledGrid>

            <StyledGrid
              item
              xs={6}
              md={8}
              style={{
                border: "4px solid black",
              }}
            >
              <h3
                style={{
                  position: "relative",
                  bottom: "30px",
                }}
              >
                Senior Data Scientist
              </h3>
              <StyledButton variant="contained" color="success"
                 onClick={() => {
                  window.location.replace("/experiences");
                }}>
                View & Apply
              </StyledButton>
              <div
                style={{ position: "relative", bottom: "50px", color: "gray" ,  fontFamily:"sans-serif" , fontSize:"13px"}}
              >
                <i
                  className="fa-solid fa-code-merge"
                  style={{ marginRight: "30px" }}
                >
                  Data Science
                </i>{" "}
                <i
                  className="fa fa-map-marker"
                  aria-hidden="true"
                  style={{ marginRight: "30px" }}
                >
                  Bengaluru
                </i>
                <i
                  className="fa fa-graduation-cap"
                  aria-hidden="true"
                  style={{ marginRight: "30px" }}
                >
                  Experience: 3 to 5 years
                </i>
              </div>
            </StyledGrid>
            <StyledGrid
              item
              xs={6}
              md={8}
              style={{
                border: "4px solid black",
              }}
            >
              <h3
                style={{
                  position: "relative",
                  bottom: "30px",
                }}
              >
                Marketing Management
              </h3>
              <StyledButton variant="contained" color="success"   onClick={() => {
                  window.location.replace("/experiences");
                }}>
                View & Apply
              </StyledButton>
              <div
                style={{ position: "relative", bottom: "50px", color: "gray" , fontFamily:"sans-serif" , fontSize:"13px"}}
              >
                <i
                  className="fa-solid fa-code-merge"
                  style={{ marginRight: "30px" }}
                >
                  Marketing
                </i>{" "}
                <i
                  className="fa fa-map-marker"
                  aria-hidden="true"
                  style={{ marginRight: "30px" }}
                >
                  Bengaluru
                </i>
                <i
                  className="fa fa-graduation-cap"
                  aria-hidden="true"
                  style={{ marginRight: "30px" }}
                >
                  Experience: 1 to 3 years
                </i>
              </div>
            </StyledGrid>
            {/* <div style={{position:"relative", top:"150px"}}>When we started the Chavy,we wanted to create the kind of enviornment 
            we'd enjoy to coming to everyday. 
            workable is filled with talented people ,
            who don't take themself to seriously.We don't
            work 80 hours a week</div>  */}
          </StyledGrid>
          <StyledTypography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chavy
            <p
             style={{
             fontSize:"15px",
             color:"black",
             width:"460px"
            }}>When we start chavy, we want to create the kind of enviornment we'd enjoy coming to everyday. Workable is filled with talented people
            who don't take themselves to seriously. we don't work 80-hours a week </p>
          </StyledTypography>
         
          <div
            style={{
              fontSize: "50px",
              position: "relative",
              left: "800px",
              top: "580px",
              color: "gray",
            }}
          >
            <i class="fa-solid fa-circle" style={{ marginRight: "30px" }}></i>
            <i class="fa-solid fa-circle" style={{ marginRight: "30px" }}></i>
            <i class="fa-solid fa-circle" style={{ marginRight: "30px" }}></i>
            <i class="fa-solid fa-circle" style={{ marginRight: "30px" }}></i>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            left: "800px",
            top: "440px",
          }}
        >
          <div>Phone:</div>
          <br />
          <div>Email Id:</div>
          <br />
          <div>Address:</div>
        </div>
      </StyledBox>
    </>
  );
}
