import React, { useState } from 'react'
import Axios from "axios";

import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { addshiftinfo } from '../service/actions/actions'
import userinformation from '../service/reducers/reducer';
import ViewPostjob from '../tabledata/ViewPostjob';
import {editarray , deleteItem} from "../service/actions/actions";
import { v4 as uuidv4 } from 'uuid';


const Page3component = (Props) => {
  const dispatch = useDispatch();
  const getindex = useSelector(state => state.getindex);
  const foamsdata = useSelector(state => state.shiftinformation);


  const [jobdata, setjobdata] = useState(0);
  const [clickstatusm, setclickstatusm] = useState(0);
  const [clickstatustu, setclickstatustu] = useState(0);
  const [clickstatusw, setclickstatusw] = useState(0);
  const [clickstatust, setclickstatust] = useState(0);
  const [clickstatusf, setclickstatusf] = useState(0);
  const [pid, setid] = useState(0)
  const [monday, setmonday] = useState(foamsdata.length > 0 && getindex.editinedex > -1 ? foamsdata[getindex.editinedex].stmonday : "08am-05am");
  const [tuesday, settuesday] = useState(foamsdata.length > 0 && getindex.editinedex > -1 ? foamsdata[getindex.editinedex].sttuesday : "07pm-04am");
  const [wednesday, setwednesday] = useState(foamsdata.length > 0 && getindex.editinedex > -1 ? foamsdata[getindex.editinedex].stwednesday : "08pm-05am");
  const [thursday, setthursday] = useState(foamsdata.length > 0 && getindex.editinedex > -1 ? foamsdata[getindex.editinedex].stthursday : "07pm-03am");
  const [friday, setfriday] = useState(foamsdata.length > 0 && getindex.editinedex > -1 ? foamsdata[getindex.editinedex].stfriday : "10pm-07am");


  const foam1data = useSelector(state => state.userinformation);
  const foam2data = useSelector(state => state.condinformation);
  console.log("ffff", foam1data)
  console.log("ffff222", foam2data)

  let foamlength = foam1data.length - 1;
  let userinformations = foam1data[foamlength]
  let foam2length = foam2data.length - 1;
  let condinformations = foam2data[foam2length]

  const foam3 = useSelector(state => state.shiftinformation);
  







  const getprivousfoam2 = () => {
    Props.getprevioussfoam2(1);
  }

  const jobpostclick = () => {
 if(getindex.editinedex>-1){
  
  dispatch(deleteItem(foamsdata[getindex.editinedex].id));
 }

    
    dispatch(addshiftinfo({
      // id: foam3.length+1,
      id:uuidv4(),
      lokingfor: userinformations.infodata.joblokings,
      education: userinformations.infodata.usereduc,
      experience: userinformations.infodata.userexps,
      skill: userinformations.infodata.userskill,
      description: userinformations.infodata.userdescp,
      careerlavel: condinformations.conddata.careerlavel,
      expdate: condinformations.conddata.expdate,
      genders: condinformations.conddata.genders,
      hourlyrate: condinformations.conddata.hourlyrate,
      equpdescrption: condinformations.conddata.equpdescrption,

      stmonday: monday,
      sttuesday: tuesday,
      stwednesday: wednesday,
      stthursday: thursday,
      stfriday: friday
    }))

    alert("Job Post sucessfully")

    setjobdata(1);
    dispatch(editarray(-1));
    Props.getvisiblefoam3(3);




  }
  const getBackgroundColorm = () => {
    let color;
    if (clickstatusm === 0) {
      color = "#d5d8da";
    } else if (clickstatusm === 1) {
      color = "#006ab3";
    }

    return color;
  }
  const getBackgroundColortu = () => {
    let color;
    if (clickstatustu === 0) {
      color = "#d5d8da";
    } else if (clickstatustu === 1) {
      color = "#006ab3";
    }

    return color;
  }
  const getBackgroundColorw = () => {
    let color;
    if (clickstatusw === 0) {
      color = "#d5d8da";
    } else if (clickstatusw === 1) {
      color = "#006ab3";
    }

    return color;
  }
  const getBackgroundColort = () => {
    let color;
    if (clickstatust === 0) {
      color = "#d5d8da";
    } else if (clickstatust === 1) {
      color = "#006ab3";
    }

    return color;
  }
  const getBackgroundColorf = () => {
    let color;
    if (clickstatusf === 0) {
      color = "#d5d8da";
    } else if (clickstatusf === 1) {
      color = "#006ab3";
    }

    return color;
  }



  return (
    <>

      <blockquote
        class="blockquote mb-0"
        style={{
          display: "flex",
          marginTop: "40px",
          justifyItems: "center",
          // align-items: center;
          // text-align: center;
        }}
      >
        <div
          class="divbtn1"
          style={{
            backgroundColor: "#d5d8da",
            width: "30px",
            borderRadius: "5px",
            marginLeft: "35px",
            height: "30px",
            textAlign: "center",
          }}
        >
          S
        </div>
        <div
          class="divbtn1"
          onClick={() => setclickstatusm(1)}
          style={{
            backgroundColor: getBackgroundColorm(),
            borderRadius: "5px",
            width: "30px",
            color: "white",
            marginLeft: "70px",
            height: "30px",
            textAlign: "center",
          }}
        >
          M
        </div>
        <div
          class="divbtn1"
          onClick={() => setclickstatustu(1)

          }
          style={{
            backgroundColor: getBackgroundColortu(),
            borderRadius: "5px",
            width: "30px",
            color: "white",
            marginLeft: "70px",
            height: "30px",
            textAlign: "center",
          }}
        >
          T
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            class="divw1"
            onClick={() => setclickstatusw(1)}
            style={{
              backgroundColor: getBackgroundColorw(),
              borderRadius: "5px",
              borderRadius: "5px",
              width: "30px",

              color: "white",
              marginLeft: "70px",
              height: "30px",
              textAlign: "center",
            }}
          >
            W
          </div>
          <div
            class="divw2"
            onClick={() => setclickstatust(1)}
            style={{
              backgroundColor: getBackgroundColort(),
              borderRadius: "5px",
              width: "30px",
              color: "white",
              marginLeft: "70px",
              height: "30px",
              textAlign: "center",
            }}
          >
            T
          </div>
          <div
            class="divbtn1"
            onClick={() => setclickstatusf(1)}
            style={{
              backgroundColor: getBackgroundColorf(),
              borderRadius: "5px",
              width: "30px",
              color: "white",
              marginLeft: "70px",
              height: "30px",
              textAlign: "center",
            }}
          >
            F
          </div>
          <div
            class="divbtn1"

            style={{
              backgroundColor: "#d5d8da",
              borderRadius: "5px",
              width: "30px",
              color: "white",
              marginLeft: "70px",
              height: "30px",
              textAlign: "center",
            }}
          >
            S
          </div>
        </div>
        {/* <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> */}
      </blockquote>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              width: 100,
              height: 40,
              backgroundColor: "#d5d8da",
              alignItems: "center",
              paddingTop: 7,
              alignContent: "center",
              textAlign: "center",
            }}
          >
            Sunday
          </div>
          <input
            type="text"
            disabled
            // value="07pm-04am"
            style={{
              borderRadius: "0px 10px 10px 0px",
            }}
          ></input>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "40px",
            marginLeft: 100,
          }}
        >
          <div
            style={{
              width: 100,
              height: 40,
              backgroundColor: "#006ab3",
              alignItems: "center",
              paddingTop: 7,
              alignContent: "center",
              textAlign: "center",
            }}
          >
            Monday
          </div>
          <input
            type="text"
            defaultValue={monday}
            //  value="08am-05am"
            placeholder='8am-5am'
            onChange={(e) => setmonday(e.target.value)}
            style={{
              borderRadius: "0px 10px 10px 0px",
            }}
          ></input>
        </div>
      </div>

      {/* row2=================== */}
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              width: 100,
              height: 40,
              backgroundColor: "#006ab3",
              alignItems: "center",
              paddingTop: 7,
              alignContent: "center",
              textAlign: "center",
            }}
          >
            Tuesday
          </div>
          <input
            type="text"
            defaultValue={tuesday}
            placeholder='07pm-04am'
            onChange={(e) => settuesday(e.target.value)}
            style={{
              borderRadius: "0px 10px 10px 0px",
            }}
          ></input>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "40px",
            marginLeft: 100,
          }}
        >
          <div
            style={{
              width: 100,
              height: 40,
              backgroundColor: "#006ab3",
              alignItems: "center",
              paddingTop: 7,
              alignContent: "center",
              textAlign: "center",
            }}
          >
            Wednesday
          </div>
          <input
            type="text"
            defaultValue={wednesday}
            placeholder='08pm-05am'
            onChange={(e) => setwednesday(e.target.value)}
            style={{
              borderRadius: "0px 10px 10px 0px",
            }}
          ></input>
        </div>
      </div>
      {/* row3============================ */}

      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              width: 100,
              height: 40,
              backgroundColor: "#006ab3",
              alignItems: "center",
              paddingTop: 7,
              alignContent: "center",
              textAlign: "center",
            }}
          >
            Thursday
          </div>
          <input
            type="text"
            defaultValue={thursday}
            placeholder='07pm-04am'
            onChange={(e) => setthursday(e.target.value)}
            style={{
              borderRadius: "0px 10px 10px 0px",
            }}
          ></input>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "40px",
            marginLeft: 100,
          }}
        >
          <div
            style={{
              width: 100,
              height: 40,
              backgroundColor: "#006ab3",
              alignItems: "center",
              paddingTop: 7,
              alignContent: "center",
              textAlign: "center",
            }}
          >
            Friday
          </div>
          <input
            type="text"
            defaultValue={friday}
            placeholder='08pm-05am'
            onChange={(e) => setfriday(e.target.value)}
            style={{
              borderRadius: "0px 10px 10px 0px",
            }}
          ></input>
        </div>
      </div>
      {/* row 4========================= */}
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              width: 100,
              height: 40,
              backgroundColor: "#d5d8da",
              alignItems: "center",

              paddingTop: 7,
              alignContent: "center",
              textAlign: "center",
            }}
          >
            Saturday
          </div>
          <input
            type="text"
            disabled
            style={{
              borderRadius: "0px 10px 10px 0px",
            }}
          ></input>
        </div>
      </div>
      <div class="selectbutton1">
        <button
          class="buttonppp"
          onClick={getprivousfoam2}
        >
          Previous
        </button>
        <button
          class="buttonn"
          onClick={jobpostclick}
        >
          Next
        </button>
      </div>


      <div style={{
        marginTop: 30
      }}>

      </div>

      {/* {jobdata === 1 &&
        <ViewPostjob />
      } */}
    </>
  )
}

export default Page3component