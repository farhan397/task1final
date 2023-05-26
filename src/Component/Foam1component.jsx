import { Alert } from "bootstrap";
import React,{useState,useEffect} from "react";
import { useSelector } from 'react-redux';

const Foam1component = (Props) => {

  const getindex = useSelector(state => state.getindex);

  const foamsdata = useSelector(state => state.shiftinformation);
  

  const [jobloking, setjobloking] = useState(foamsdata.length>0&&getindex.editinedex>-1? foamsdata[getindex.editinedex].lokingfor:"");
  const [userexp, setUserexp] = useState(foamsdata.length>0&&getindex.editinedex>-1? foamsdata[getindex.editinedex].experience:"");
   const [useredu, setUseredu] = useState(foamsdata.length>0&&getindex.editinedex>-1? foamsdata[getindex.editinedex].education:"");
  
  const [userskil, setUserskil] = useState(foamsdata.length>0&&getindex.editinedex>-1? foamsdata[getindex.editinedex].skill:"");
  const [userdesc, setUserdesc] = useState(foamsdata.length>0&&getindex.editinedex>-1? foamsdata[getindex.editinedex].description:"");

  const [joblokingerror, setjoblokingerror] = useState("");
  const [userexperror, setUserexperror] = useState("");
  const [usereduerror, setUsereduerror] = useState("");
  const [userskilerror, setUserskilerror] = useState("");
  const [userdescerror, setUserdescerror] = useState("");
  const [isvisibless, setisvisibless] = useState(0);
   const [isvisible, setisvisible] = useState(0);
  const [issubmit, setissubmit] = useState(false);


  // const getindex = useSelector(state => state.getindex);
  // console.log("ddd",getindex.editinedex)
 
  // const foamsdata = useSelector(state => state.userinformation);

  // if(foamsdata.length>0){
  // console.log("rrrd",foamsdata)
  // let length=getindex.editinedex
  // let userinformations=foamsdata[length]
  // console.log(userinformations.infodata.usereduc)
 
 
  // }
   

  

  const handleupclick=()=>{

   
        console.log(jobloking)
     
     if (jobloking === "") {
       setjoblokingerror("select value");
       setissubmit(false);
     } else {
       setjoblokingerror("");
       setissubmit(true);
     }
     if (userexp === "") {
       setUserexperror("select value");
       setissubmit(false);
     } else {
       setUserexperror("");
       setissubmit(true);
     }
     if (useredu === "") {
       setUsereduerror("select value");
       setissubmit(false);
     } else {
       setUsereduerror("");
       setissubmit(true);
     }
     if (userskil === "") {
       setUserskilerror("select value");
       setissubmit(false);
     } else {
       setUserskilerror("");
       setissubmit(true);
     }
     if (userdesc === "") {
       setUserdescerror("select value");
       setissubmit(false);
     } else {
       setUserdescerror("");
       setissubmit(true);
     }
 console.log("foam 1 input filed",jobloking,userexp,useredu,userskil,userdesc)
     if (
      jobloking !== "" &&
       userexp !== "" &&
       useredu !== "" &&
       userskil !== "" &&
       userdesc !== ""
     )
     

     
      {
       setisvisible(1);
        Props.getVissiblityVALUE(1)
        Props.addTouserinfoHandler({

          joblokings:jobloking,
          usereduc:useredu,
          userexps:userexp,
          userskill:userskil,
          userdescp:userdesc
        })
       // setchangecolorbtn("blue");
       // setchangecolordiv("blue");
 
       
      
     }
   }
   


 
  
  
  return (
    <>
      <div
        class="dropdownitems"
        style={{
          display: "flex",
        }}
      >
        <div>
          <div class="select1">
            <label
              for="first"
              style={{
                position: "absolute",
                fontSize: 10,
                bottom: "6.5ex",
                left: "2em",
                padding: "0 5px",
                zIndex: 1,
                backgroundColor: "white",
              }}
            >
              Loking for
            </label>
            <label
              for="first"
              style={{
                position: "absolute",
                fontSize: 10,
                bottom: "6.5ex",
                left: "7em",
                color: "red",
                padding: "0 5px",
                zIndex: 1,
                backgroundColor: "white",
              }}
            >
              *
            </label>
            <select
              name="format"
              id="format"
              value={jobloking}
              onChange={(e) => setjobloking(e.target.value)}
            >
              <option selected>Enter Value...</option>
              <option>Electrical engenner</option>
              <option>.net developer</option>
              <option>backend developer</option>
              <option>PHP developer</option>
              <option>IOS Developer</option>
            </select>
          </div>
          <label style={{ fontSize: 15, color: "red", paddingLeft: 20 }}>
            {joblokingerror}
          </label>
        </div>
        <div>
          <div class="select2">
            <label
              for="first"
              style={{
                position: "absolute",
                fontSize: 10,
                bottom: "6.5ex",
                left: "2em",
                padding: "0 5px",
                zIndex: 1,
                backgroundColor: "white",
              }}
            >
              Experience
            </label>
            <label
              for="first"
              style={{
                position: "absolute",
                fontSize: 10,
                bottom: "6.5ex",
                left: "7.2em",
                color: "red",
                padding: "0 5px",
                zIndex: 1,
                backgroundColor: "white",
              }}
            >
              *
            </label>
            <select
              name="format"
              id="format"
              value={userexp}
              onChange={(e) => setUserexp(e.target.value)}
            >
              <option selected>Enter Value...</option>
              <option>1 year</option>
              <option>2 year</option>
              <option>3 year</option>
              <option>4 year</option>
              <option>5 year</option>
            </select>
          </div>
          <label style={{ fontSize: 15, color: "red", marginLeft: 120 }}>
            {userexperror}
          </label>
        </div>
      </div>

      <div>
        <div class="select3">
          <label
            for="first"
            style={{
              position: "absolute",
              fontSize: 10,
              bottom: "6.5ex",
              left: "2em",
              padding: "0 5px",
              zIndex: 1,
              backgroundColor: "white",
            }}
          >
            Education
          </label>

          <label
            for="first"
            style={{
              position: "absolute",
              fontSize: 10,
              bottom: "6.5ex",
              left: "7em",
              color: "red",
              padding: "0 5px",
              zIndex: 1,
              backgroundColor: "white",
            }}
          >
            *
          </label>
          <select
            name="format"
            id="format"
            value={useredu}
            onChange={(e) => setUseredu(e.target.value)}
          >
            <option selected>Enter Value...</option>
            <option>softwere engenering</option>
            <option>electrical engenering</option>
            <option>MBA</option>
            <option>BBA</option>
            <option>cival engenering</option>
          </select>
        </div>
        <label style={{ fontSize: 15, color: "red", marginLeft: 20 }}>
          {usereduerror}
        </label>
      </div>
      <div>
        <div class="select3rd">
          <label
            for="first"
            style={{
              position: "absolute",
              fontSize: 10,
              bottom: "6.5ex",
              left: "2em",
              padding: "0 5px",
              zIndex: 1,
              backgroundColor: "white",
            }}
          >
            Skill
          </label>
          <label
            for="first"
            style={{
              position: "absolute",
              fontSize: 10,
              bottom: "6.5ex",
              left: "4.5em",
              color: "red",
              padding: "0 5px",
              zIndex: 1,
              backgroundColor: "white",
            }}
          >
            *
          </label>
          <select
            name="format"
            id="format"
            value={userskil}
            onChange={(e) => setUserskil(e.target.value)}
          >
            <option selected>Enter Value...</option>
            <option>java</option>
            <option>react</option>
            <option>rubi</option>
            <option>sql</option>
            <option>designing</option>
          </select>
        </div>
        <label style={{ fontSize: 15, color: "red", marginLeft: 20 }}>
          {userskilerror}
        </label>
      </div>
      <div>
        <div class="select4">
          <label
            for="first"
            style={{
              position: "absolute",
              fontSize: 10,
              bottom: "13.05ex",
              left: "3em",
              padding: "0 5px",
              zIndex: 1,
              backgroundColor: "white",
            }}
          >
            Description
          </label>
          <label
            for="first"
            style={{
              position: "absolute",
              fontSize: 10,
              bottom: "13.05ex",
              left: "8.6em",
              color: "red",
              padding: "0 5px",
              zIndex: 1,
              backgroundColor: "white",
            }}
          >
            *
          </label>
          <textarea
            class="form-control"
            aria-label="With textarea"
            defaultValue={userdesc}
            value={userdesc}
            onChange={(e) => setUserdesc(e.target.value)}
            style={{
              borderColor: "black",
            }}
          ></textarea>
        </div>
        <label style={{ fontSize: 15, color: "red", marginLeft: 20 }}>
          {userskilerror}
        </label>
      </div>
      <div class="selectlabel1">
        <p>And if there is any inspiration</p>

        <input type="file" id="myfile" name="myfile" multiple />
      </div>
      <div class="selectbutton1">
                <button class="buttonp" disabled>
                  Previous
                </button>
                <button class="buttonn" 
                  onClick={handleupclick}
                >
                  Next
                </button>
              </div>
    </>
  );
}


export default Foam1component;
