import React from "react";
import {
  StyledAppBar,
  StyledTypography,
  StyledTypographyB1,
  StyledTypographyh2,
  StyledBoxFooter,
  StyledGrid,
  StyledInput,
  StyledLable,
  StyledInput1,
} from "./ManagerStyle";

import Switch from "react-switch";

// import img2 from "./p.webp";

import "react-datepicker/dist/react-datepicker.css";
import StyledBox from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import StyledButton from "@mui/material/Button";

// import { useForms } from "react-hook-form";

export default function HeadersComponent() {
  // const { register, handleSumit, erros } = useForms;
  const [checked, setChecked] = React.useState(false);
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
                top: "25px",
                color: "black",
                left: "160px",
              }}
            >
              UI/UX Designer
            </h3>{" "}
            <StyledButton
              variant="contained"
              style={{
                backgroundColor: "darkgreen",
                fontSize: "15px",
                position: "relative",
                left: "880px",
                top: "50px",
                border: "2px solid black",
              }}
            >
              View & Apply
            </StyledButton>
            <StyledButton
              variant="contained"
              style={{
                backgroundColor: "lightgrey",
                fontSize: "15px",
                position: "relative",
                left: "650px",
                top: "50px",
                border: "2px solid black",
                color: "black",
              }}
            >
              Back
            </StyledButton>
            <StyledTypographyh2>
              <i
                className="fa-solid fa-code-merge"
                style={{
                  marginRight: "30px",
                  left: "-40px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontFamily: "sans-serif",
                    top: "-17px",
                    left: "18px",
                    position: "relative",
                  }}
                >
                  Design
                </div>
              </i>{" "}
              <i
                className="fa fa-map-marker"
                aria-hidden="true"
                style={{
                  marginRight: "30px",
                  left: "-50px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontFamily: "sans-serif",
                    top: "-16px",
                    left: "15px",
                    position: "relative",
                  }}
                >
                  Bengaluru
                </div>
              </i>
              <i
                className="fa fa-graduation-cap"
                aria-hidden="true"
                style={{
                  marginRight: "30px",
                  left: "-56px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontFamily: "sans-serif",
                    top: "-16px",
                    left: "20px",
                    position: "relative",
                  }}
                >
                  Experience: 2 to 5 years
                </div>
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
              {/* <img src={img2} alt="" /> */}
            </div>
          </StyledTypography>
        </StyledBoxFooter>
        <StyledTypographyB1>
          <p
            style={{
              left: "182px",
              position: "relative",
              bottom: "140px",
            }}
          >
            Upload resume
          </p>
          <div
            style={{
              textAlign: "center",

              border: "1px dashed grey",
              display: "inline",
              position: "relative",
              left: "82px",
              bottom: "100px",
              margin: "100px",
              padding: "54px 398px",
            }}
          >
            Drom resume here or click to upload
          </div>
          <h4
            style={{
              position: "relative",
              left: "177px",
              bottom: "50px",
            }}
          >
            Personal Information
          </h4>
          <hr
            style={{
              width: "74%",
              color: "grey",
              position: "relative",
              left: "-8px",
              bottom: "50px",
            }}
          />
          <i
            class="fa-solid fa-trash"
            style={{
              position: "relative",
              left: "1210px",
              bottom: "85px",
              fontSize: "20px",
              color: "gray",
            }}
          ></i>
        </StyledTypographyB1>
        <StyledGrid container spacing={5}>
          <StyledGrid StyledItem xs={6}>
            <StyledLable
              style={{
                position: "relative",
                left: "82px",
                bottom: "20px",
              }}
            >
              First Name
            </StyledLable>
            <StyledInput
              type="text"
              name="first_name"
              placeholder="Enter first name"
            />
          </StyledGrid>
          <StyledGrid StyledItem xs={6}>
            <StyledLable
              style={{
                position: "relative",
                left: "5px",
                bottom: "20px",
              }}
            >
              Last Name
            </StyledLable>
            <StyledInput
              type="text"
              name="last name"
              placeholder="Enter last name"
              style={{
                position: "relative",
                left: "-70px",
              }}
            />

            <br />
            <br />
            <br />
          </StyledGrid>
          <StyledGrid StyledItem xs={6}>
            <StyledLable
              style={{
                position: "relative",
                left: "112px",
              }}
            >
              {" "}
              Contact Number(optional )
            </StyledLable>
            <i class="fa-solid fa-phone"></i>{" "}
            <StyledInput1
              type="text"
              name="contact"
              placeholder="Enter Contact No"
              style={{
                position: "relative",
                left: "-80px",
              }}
            />
            <i
              class="fa-solid fa-phone"
              style={{
                position: "relative",
                right: "408px",
                top: "3px",
                backgroundColor: "lightgray",
                fontSize: "19.5px",

                border: "1px solid",
              }}
            ></i>{" "}
            <button
              style={{
                position: "relative",
                left: "-99px",
                backgroundColor: "rgb(170, 176, 233)",
              }}
            >
              +{" "}
            </button>
          </StyledGrid>
          <StyledGrid StyledItem xs={6}>
            <StyledLable
              style={{
                position: "relative",
                left: "-34px",
              }}
            >
              Email ID
            </StyledLable>
            <i
              class="fa-regular fa-at"
              style={{
                position: "relative",
                right: "98px",
                top: "3px",
                backgroundColor: "lightgray",
                fontSize: "19.5px",

                border: "1px solid",
              }}
            ></i>
            <StyledInput1
              type="text"
              name="email id"
              placeholder="Enter Email id"
            />
            <button
              style={{
                position: "relative",
                left: "-94px",
                backgroundColor: "rgb(170, 176, 233)",
              }}
            >
              +{" "}
            </button>
          </StyledGrid>
          <br /> <br />
          <br />
          <StyledGrid StyledItem xs={6}>
            <StyledLable
              style={{
                position: "relative",
                left: "20px",
              }}
            >
              {" "}
              Postcode
            </StyledLable>
            <input
              type="text"
              name="contact"
              placeholder="Enter Postcode"
              style={{
                position: "relative",
                right: "50px",
                bottom: "0px",
                minWidth: "300px",
              }}
            />
          </StyledGrid>
          <StyledGrid StyledItem xs={6}>
            <StyledLable
              style={{
                position: "relative",
                left: "-88px",
              }}
            >
              {" "}
              Address{" "}
            </StyledLable>
            <input
              style={{
                position: "relative",
                right: "152px",
                bottom: "-6px",
                minWidth: "580px",
              }}
              type="text"
              name="email id"
              placeholder="Enter Full Address"
            />
          </StyledGrid>
          <br />
          <br />
          <br />
          <StyledGrid StyledItem xs={6}>
            <StyledLable
              style={{
                position: "relative",
                left: "-20px",
              }}
            >
              {" "}
              City
            </StyledLable>
            <StyledInput1
              type="text"
              name="contact"
              placeholder="Select City"
              style={{
                position: "relative",
                right: "50px",
                bottom: "-2px",
                minWidth: "280px",
              }}
            />
          </StyledGrid>
          <StyledGrid StyledItem xs={6}>
            <StyledLable
              style={{
                position: "relative",
                left: "70px",
              }}
            >
              {" "}
              Country{" "}
            </StyledLable>
            <StyledInput1
              type="text"
              name="email id"
              placeholder="Select Country"
              style={{
                position: "relative",
                left: "10px",
              }}
            />
          </StyledGrid>
          <StyledGrid
            StyledItem
            xs={6}
            style={{
              position: "relative",
              left: "457px",
              bottom: "20px",
            }}
          >
            <StyledLable
              style={{
                position: "relative",
                left: "-57px",
              }}
            >
              {" "}
              State{" "}
            </StyledLable>
            <StyledInput1
              type="text"
              name="email id"
              placeholder="Select State"
            />
          </StyledGrid>
          <br />
          <br />
          <br />
          <StyledLable
            style={{
              top: "14px",
              position: "relative",
              left: "-538px",
            }}
          >
            DOB
          </StyledLable>
          <input
            style={{
              position: "relative",
              right: "580px",
              bottom: "-32px",
              minWidth: "280px",
              height: "20px",
            }}
            type="text"
            name="email id"
            placeholder="Select DOB"
          />
        </StyledGrid>
        <div
          style={{
            position: "relative",
            left: "500px",
            bottom: "20px",
          }}
        >
          <StyledLable
            style={{
              position: "relative",
              left: "58px",
            }}
          >
            Gender
          </StyledLable>
          <input
            style={{
              position: "relative",
            }}
            type="radio"
            name="email id"
            placeholder="Enter Full Address"
          />
          Male
          <input
            style={{
              position: "relative",
            }}
            type="radio"
            name="email id"
            placeholder="Enter Full Address"
          />
          Female
          <input
            style={{
              position: "relative",
            }}
            type="radio"
            name="email id"
            placeholder="Enter Full Address"
          />
          Prefer not to say
        </div>

        <div
          style={{
            position: "relative",
            left: "850px",
            bottom: "38px",
          }}
        >
          <StyledLable
            style={{
              position: "relative",
              left: "100px",
            }}
          >
            Marital Status
          </StyledLable>
          <input
            type="radio"
            name="email id"
            placeholder="Enter Full Address"
          />
          Single
          <input
            style={{
              position: "relative",
            }}
            type="radio"
            name="email id"
            placeholder="Enter Full Address"
          />
          Married
          <input
            type="radio"
            name="email id"
            placeholder="Enter Full Address"
          />
          Prefer not to say
        </div>
        <StyledGrid StyledItem xs={6}>
          <div>
            <StyledLable
              style={{
                position: "relative",

                left: "-260px",
              }}
            >
              Work Link/Portfolio(optional )
            </StyledLable>
            <StyledInput1
              type="text"
              name="contact"
              placeholder="Enter portfolio Url if any"
              style={{
                position: "relative",
                minWidth: "400px",
                right: "470px",
              }}
            ></StyledInput1>

            <button
              style={{
                position: "relative",
                right: "470px",
                backgroundColor: "rgb(170, 176, 233)",
              }}
            >
              +{" "}
            </button>
          </div>
        </StyledGrid>
        <br />
        <br />
        <br />
        <br />
        <br />

        <h4
          style={{
            position: "relative",
            left: "151px",
            bottom: "50px",
          }}
        >
          Personal Information
        </h4>
        <i
          class="fa-solid fa-trash"
          style={{
            position: "relative",
            left: "1210px",
            bottom: "50px",
            fontSize: "20px",
            color: "gray",
          }}
        ></i>
        <hr
          style={{
            width: "77%",
            color: "grey",
            position: "relative",
            left: "-17px",
            bottom: "50px",
          }}
        />

        <div
          style={{
            width: "80%",

            position: "relative",
            left: "148px",
            bottom: "50px",
          }}
        >
          Educational Details
        </div>
        <div
          style={{
            position: "relative",
            left: "62px",
            bottom: "0px",
          }}
        >
          <StyledLable>Type(optional )</StyledLable>
          <select
            id="cars"
            name="carlist"
            form="carform"
            style={{
              width: "20%",
              position: "relative",
              left: "-25px",
              bottom: "0px",
            }}
          >
            {" "}
            <option value="hurr">Select Type</option>
          </select>
          <StyledLable>Course(optional )</StyledLable>
          <select
            id="cars"
            name="carlist"
            form="carform"
            style={{
              width: "20%",
              position: "relative",
              left: "-45px",
              bottom: "0px",
            }}
          >
            {" "}
            <option value="hurr">Select Course</option>
          </select>
          <StyledLable>Specialisation(optional )</StyledLable>
          <input
            type="text"
            placeholder="Enter your Specialisation"
            style={{
              width: "20%",
              position: "relative",
              left: "-95px",
              bottom: "0px",
            }}
          />
        </div>
        <label
          for="start"
          style={{
            position: "relative",
            left: "950px",
            top: "30px",
          }}
        >
          Duration:
        </label>
        <div
          style={{
            minWidth: "800px",
            position: "relative",
            left: "950px",
            top: "30px",
          }}
        >
          <input
            type="date"
            id="start"
            name="trip-start"
            value="2018-07-22"
            min="2012-01-01"
            max="2024-12-31"
          />
          to
          <input
            type="date"
            id="start"
            name="trip-start"
            value="2018-07-22"
            min="2018-01-01"
            max="2018-12-31"
          />
        </div>
        <StyledLable
          style={{
            position: "relative",
            top: "-8px",
            left: "140px",
          }}
        >
          Institute name(optional )
        </StyledLable>
        <StyledInput1
          type="text"
          name="contact"
          placeholder="Enter your institute name"
          style={{
            position: "relative",
            minWidth: "600px",
            left: "-40px",
            top: "10px",
          }}
        />
        <br />
        <br />
        <StyledButton
          variant="contained"
          style={{
            backgroundColor: "#aab0e9",
            fontSize: "15px",
            position: "relative",
            color: "#4756df",
            left: "130px",
            height: "25px",
            width: "250px",
          }}
        >
          + Add education details
        </StyledButton>
        <br />
        <h4
          style={{
            position: "relative",
            minWidth: "600px",
            left: "120px",
            top: "0px",
          }}
        >
          Work Experience
        </h4>
        <br />
        <Switch
          style={{
            position: "relative",
          }}
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
        />

        <StyledLable
          style={{
            position: "relative",
            left: "60px",
          }}
        >
          Company Name
        </StyledLable>
        <input
          type="text"
          placeholder="Enter company name"
          style={{
            width: "289px",
            position: "relative",
            left: "-50px",
          }}
        />
        <StyledLable>Desination</StyledLable>
        <input
          type="text"
          placeholder="Enter desination"
          style={{
            width: "289px",
          }}
        />

        <label
          for="start"
          style={{
            position: "relative",
            left: "110px",
            top: "-22px",
          }}
        >
          Duration:
        </label>
        <div
          style={{
            minWidth: "800px",
            position: "relative",
            left: "950px",
            bottom: "25px",
          }}
        >
          <input
            type="date"
            id="start"
            name="trip-start"
            value="2018-07-22"
            min="2012-01-01"
            max="2024-12-31"
          />
          to
          <input
            type="date"
            id="start"
            name="trip-start"
            value="2018-07-22"
            min="2018-01-01"
            max="2018-12-31"
          />
        </div>

        <br />
        <br />

        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
          style={{
            position: "relative",
            left: "120px",
            bottom: "20px",
          }}
        ></input>
        <StyledLable
          for="vehicle1"
          style={{
            position: "relative",
            left: "120px",
            bottom: "20px",
          }}
        >
          {" "}
          I currently work here
        </StyledLable>
        <StyledButton
          variant="contained"
          style={{
            backgroundColor: "#aab0e9",
            fontSize: "13px",
            position: "relative",
            color: "#4756df",
            left: "-50px",
            height: "25px",
            width: "220px",
            top: "10px",
          }}
        >
          + Add Work Experience
        </StyledButton>
        <br />
        <br />
        <div
          style={{
            position: "relative",
            left: "40px",
            top: "20px",
          }}
        >
          <StyledLable style={{}}>Total Experience (in Years)</StyledLable>

          <div
            style={{
              position: "relative",
              left: "80px",
            }}
          >
            <select id="cars" name="carlist" form="carform">
              <option value="hurr">0 years</option>
            </select>
            <select id="cars" name="carlist" form="carform">
              <option value="hurr">0 Months</option>
            </select>
          </div>
        </div>
        <br />
        <br />
        <StyledLable
          style={{
            position: "relative",
            left: "120px",
            top: "15px",
          }}
        >
          Noticed Period(in days)
        </StyledLable>
        <input
          type="text"
          placeholder="Enter Noticed period"
          style={{
            width: "289px",
            position: "relative",
            left: "-49px",
            top: "40px",
          }}
        />
        <div
          style={{
            position: "relative",
            left: "500px",
            bottom: "20px",
            fontSize: "12px",
          }}
        >
          <StyledLable
            style={{
              position: "relative",
              left: "85px",
              top: "15px",
            }}
          >
            Current CTC(anually)
          </StyledLable>

          <select
            id="cars"
            name="carlist"
            form="carform"
            style={{
              minWidth: "100px",
              top:"40px",
              position:"relative",
              left:"-35px"
              
            }}
          >
            <option value="hurr">0 Lakhs</option>
          </select>
          <select
            id="cars"
            name="carlist"
            form="carform"
            style={{
              minWidth: "100px",
              top:"40px",
              position:"relative",
              left:"-35px"
            }}
          >
            <option value="hurr">0 Thousand</option>
          </select>

          <StyledLable
            style={{
              position: "relative",
              left: "130px",
              top : "15px"
            }}
          >
            Expected CTC(anually)
          </StyledLable>

          <select
            id="cars"
            name="carlist"
            form="carform"
            style={{
              minWidth: "100px",
              top:"40px",
              position:"relative"
            }}
          >
            <option value="hurr">0 Lakhs</option>
          </select>
          <select
            id="cars"
            name="carlist"
            form="carform"
            style={{
              minWidth: "100px",
              top:"40px",
              position:"relative"
            }}
          >
            <option value="hurr">0 Thousand</option>
          </select>
        </div>
        <br />
        <StyledLable
          style={{
            position: "relative",
            left: "120px",
            top: "20px",
          }}
        >
          Skills and Softwares
        </StyledLable>
        <input
          type="text"
          placeholder="Enter skills that have you acuired"
          style={{
            width: "1027px",
            position: "relative",
            left: "-30px",
            top: "40px",
          }}
        />
        <h4
          style={{
            position: "relative",
            left: "110px",
            top: "40px",
          }}
        >
          Sceening Qutions
        </h4>
        <i
          class="fa-solid fa-trash"
          style={{
            position: "relative",
            left: "1110px",
            bottom: "0px",
            fontSize: "20px",
            color: "gray",
          }}
        ></i>
        <hr
          style={{
            width: "72%",
            color: "grey",
            position: "relative",
            left: "-90px",
          }}
        />
        <br />
        <StyledLable
          style={{
            position: "relative",
            left: "120px",
          }}
        >
          What do you look most forward to our company
        </StyledLable>
        <input
          type="text"
          placeholder="Type your answer here"
          style={{
            width: "1027px",
            position: "relative",
            right: "230px",
          }}
        />
        <br />
        <br />
        <br />
        <StyledLable
          style={{
            position: "relative",
            left: "120px",
            bottom: "52px",
          }}
        >
          Let us know about yourself bit
        </StyledLable>
        <input
          type="text"
          placeholder="Type your answer here"
          style={{
            width: "1027px",
            position: "relative",
            right: "100px",
            height: "80px",
          }}
        />
        <p
          style={{
            position: "relative",
            left: "115px",
          }}
        >
          Which profile describes you the best
        </p>
        <div
          style={{
            position: "relative",
            left: "-10px",
            top: "20px",
          }}
        >
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
            style={{
              position: "relative",
              left: "120px",
              bottom: "20px",
            }}
          ></input>
          <StyledLable
            for="vehicle1"
            style={{
              position: "relative",
              left: "120px",
              bottom: "20px",
            }}
          >
            Illustrator
          </StyledLable>{" "}
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
            style={{
              position: "relative",
              left: "120px",
              bottom: "20px",
            }}
          ></input>
          <StyledLable
            for="vehicle1"
            style={{
              position: "relative",
              left: "120px",
              bottom: "20px",
            }}
          >
            UI Designer
          </StyledLable>{" "}
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
            style={{
              position: "relative",
              left: "120px",
              bottom: "20px",
            }}
          ></input>
          <StyledLable
            for="vehicle1"
            style={{
              position: "relative",
              left: "120px",
              bottom: "20px",
            }}
          >
            UX Designer
          </StyledLable>{" "}
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
            style={{
              position: "relative",
              left: "120px",
              bottom: "20px",
            }}
          ></input>
          <StyledLable
            for="vehicle1"
            style={{
              position: "relative",
              left: "120px",
              bottom: "20px",
            }}
          >
            Product Designer
          </StyledLable>
        </div>
        <p
          style={{
            position: "relative",
            left: "115px",
          }}
        >
          Which software are you most comfortable in
        </p>
        <div
          style={{
            position: "relative",
            left: "-10px",
            top: "20px",
          }}
        >
          <input
            type="radio"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
            style={{
              position: "relative",
              left: "120px",
              bottom: "20px",
            }}
          ></input>
          <StyledLable
            for="vehicle1"
            style={{
              position: "relative",
              left: "120px",
              bottom: "20px",
            }}
          >
            Adobe XD
          </StyledLable>{" "}
          <input
            type="radio"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
            style={{
              position: "relative",
              left: "120px",
              bottom: "20px",
            }}
          ></input>
          <StyledLable
            for="vehicle1"
            style={{
              position: "relative",
              left: "120px",
              bottom: "20px",
            }}
          >
            Figma
          </StyledLable>{" "}
          <input
            type="radio"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
            style={{
              position: "relative",
              left: "120px",
              bottom: "20px",
            }}
          ></input>
          <StyledLable
            for="vehicle1"
            style={{
              position: "relative",
              left: "120px",
              bottom: "20px",
            }}
          >
            Sketch
          </StyledLable>
        </div>
        <div
          style={{
            position: "relative",
            left: "115px",
          }}
        >
          <p>Can you relocate to bengaluru for this job ?</p>
          <button>YES</button>
          <button>NO</button>

          <p>Please attached some demo work till now</p>
        </div>
        <div
          style={{
            textAlign: "center",

            border: "1px dashed grey",
            display: "inline",
            position: "relative",
            left: "10px",
            top: "100px",
            margin: "100px",
            padding: "47px 433px",
          }}
        >
          Share your linkdin profile
        </div>
        <div
          style={{
            position: "relative",
            left: "100px",
            top: "150px",
          }}
        >
          <p>What do you look most forward to our company</p>
          <input
            type="text"
            placeholder="Enter your url here"
            style={{
              width: "1050px",
            }}
          />
        </div>
        <hr
          style={{
            width: "74%",
            color: "grey",
            position: "relative",
            left: "-90px",
            top: "170px",
          }}
        />
      </StyledBox>
    </>
  );
}
