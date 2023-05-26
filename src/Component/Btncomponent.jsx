import React, { useEffect, useState } from "react";

import Foam1component from "./Foam1component";
import Page3component from "./Page3component";
import Page2component from "./Page2component";
import Foam1Container from "../containers/Foam1Container";
import Foam2Container from "../containers/Foam2Container";
import Foam3Container from "../containers/Foam3Container";
import ViewPostjob from "../tabledata/ViewPostjob";
import { useSelector } from "react-redux";
import { RiNotification2Line } from "react-icons/ri";

function Btncomponent() {
  const [jobloking, setjobloking] = useState("");
  const [userexp, setUserexp] = useState("");
  const [useredu, setUseredu] = useState("");
  const [userskil, setUserskil] = useState("");
  const [userdesc, setUserdesc] = useState("");

  const [joblokingerror, setjoblokingerror] = useState("");
  const [userexperror, setUserexperror] = useState("");
  const [usereduerror, setUsereduerror] = useState("");
  const [userskilerror, setUserskilerror] = useState("");
  const [userdescerror, setUserdescerror] = useState("");
  const [isvisible, setisvisible] = useState(0);
  const [issubmit, setissubmit] = useState(false);
  const [showfoam, setshowfoam] = useState(0);
  const [foam1, setfoam1] = useState(0);

  const foam3 = useSelector((state) => state.shiftinformation);

  const getpreviousfoam2 = (VALUES) => {
    debugger;
    console.log(VALUES);
    setshowfoam(VALUES);
  };
  const addjobdata = (VALUES) => {
    
    console.log(VALUES);
    setshowfoam(VALUES);
  };
  const getBackgroundColor = () => {
    let color;
    if (showfoam === 0) {
      color = "#eaeaea";
    } else if (showfoam === 1) {
      color = "#006ab3";
    } else if (showfoam === 2) {
      color = "#006ab3";
    }

    //  else if (value >= 50 && value < 90) {
    //     color = 'yellow';
    // } else if (value >= 90) {
    //     color = 'green';
    // }
    return color;
  };
  const getBackgroundColor2 = () => {
    let color;

    if (showfoam === 0) {
      color = "#eaeaea";
    } else if (showfoam === 1) {
      color = "#eaeaea";
    } else if (showfoam === 2) {
      color = "#006ab3";
    }
    //  else if (value >= 50 && value < 90) {
    //     color = 'yellow';
    // } else if (value >= 90) {
    //     color = 'green';
    // }
    return color;
  };
  const getBackgroundColor3 = () => {
    let color;
    if (showfoam === 2) {
      color = "#006ab3";
    } else {
      color = "#eaeaea";
    }
    //  else if (value >= 50 && value < 90) {
    //     color = 'yellow';
    // } else if (value >= 90) {
    //     color = 'green';
    // }
    return color;
  };
  const gettextcolor3 = () => {
    let color;
    if (showfoam === 2) {
      color = "white";
    } else {
      color = "black";
    }
    //  else if (value >= 50 && value < 90) {
    //     color = 'yellow';
    // } else if (value >= 90) {
    //     color = 'green';
    // }
    return color;
  };

  const getfoamheight = () => {
    let foamheight;
    if (showfoam === 0) {
      foamheight = "900px";
    } else if (showfoam === 1) {
      foamheight = "700px";
    } else if (showfoam === 2) {
      foamheight = "700px";
    }
    //  else if (value >= 50 && value < 90) {
    //     color = 'yellow';
    // } else if (value >= 90) {
    //     color = 'green';
    // }
    return foamheight;
  };
  const getprevioussfoam2 = (VALUES) => {
    debugger;
    console.log(VALUES);
    setshowfoam(VALUES);
  };

  const getVissiblityVALUE = (VALUES) => {
    console.log(VALUES);
    setshowfoam(VALUES);
    if (VALUES === 1) {
      console.log(foam1);
    }
  };
  const getvisiblefoam2 = (VALUES) => {
    console.log(VALUES);

    setshowfoam(VALUES);
    console.log(foam1);
  };
  const getvisiblefoam3 = (VALUES) => {
    console.log(VALUES);

    setshowfoam(VALUES);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          class="card"
          style={{
            width: "50%",
            marginTop: 20,
            marginBottom: 20,
            height: getfoamheight(),

            marginLeft: "20%",
          }}
        >
          <div
            class="card-body"
            style={{
              marginLeft: 20,
              marginTop: 20,
            }}
          >
            <div className="notijob">
              <span
                for="first"
                style={{
                  position: "absolute",
                  fontSize: 10,

                  top: "8ex",
                  padding: "3px",
                  borderRadius: "40%",
                  backgroundColor: "red",
                  color: "white",
                  zIndex: 1,
                }}
              >
                {foam3.length}
              </span>

              {/* <BsSave /> */}
              <RiNotification2Line onClick={() => setshowfoam(3)} />
            </div>

            {showfoam !== 3 && (
              <blockquote
                class="blockquote mb-0"
                style={{
                  display: "flex",
                  justifyItems: "center",
              
                }}
              >
                <div
                  class="divbtn1"
                  style={{
                    width: "232px",
                    // border: "1px solid rgba(0, 0, 0, 0.6)",
                    backgroundColor: getBackgroundColor(),
                    // backgroundColor: showfoam===0 ? "#eaeaea" :  "#006ab3"
                  }}
                >
                  <button
                    class="btn1"
                    onClick={() => {
                      if (showfoam === 1) {
                        setshowfoam(0);
                      }
                      if (showfoam === 2) {
                        setshowfoam(0);
                      }
                    }}
                    style={{ backgroundColor: "#006ab3", color: "white" }}
                  >
                    Job Information
                  </button>
                </div>

                <div
                  class="divbtn2"
                  style={{
                    backgroundColor: getBackgroundColor2(),
                    width: "240px",
                    // border: "1px solid rgba(0, 0, 0, 0.6)",
                  }}
                >
                  <button
                    class="btn1"
                    onClick={() => {
                      if (showfoam === 2) setshowfoam(1);
                    }}
                    style={{
                      backgroundColor: showfoam === 0 ? "#eaeaea" : "#006ab3",
                      border: 0,
                      color: showfoam === 0 ? "black" : "white",
                    }}
                  >
                    Condidate type
                  </button>
                </div>
                <div
                  class="divbtn3"
                  style={{
                    // width: "308px",
                    backgroundColor: getBackgroundColor3(),

                    // border: "1px solid rgba(1, 1, 1, 0)",
                  }}
                >
                  <button
                    class="btn3"
                    onClick={() => {
                      if (showfoam === 2) {
                        setshowfoam(2);
                      }
                    }}
                    style={{
                      backgroundColor: getBackgroundColor3(),
                      color: gettextcolor3(),
                    }}
                  >
                    Shift Time
                  </button>
                </div>

                {/* <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> */}
              </blockquote>
            )}

            {showfoam === 0 && (
              <Foam1Container getVissiblityVALUE={getVissiblityVALUE} />
            )}
            {showfoam === 1 && (
              <Foam2Container
                getvisiblefoam2={getvisiblefoam2}
                getpreviousfoam2={getpreviousfoam2}
              />
            )}
            {showfoam === 2 && (
              <Page3component
                getprevioussfoam2={getprevioussfoam2}
                getvisiblefoam3={getvisiblefoam3}
              />
            )}
          </div>

          {showfoam === 3 && <ViewPostjob addjobdata={addjobdata} />}
        </div>
      </div>
    </>
  );
}

export default Btncomponent;
