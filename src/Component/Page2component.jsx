import React,{useState} from 'react'
import { useSelector } from 'react-redux';

const Page2component = (Props) => {

  const getindex = useSelector(state => state.getindex);
  const foamsdata = useSelector(state => state.shiftinformation);
  // {getvisiblefoam2,getpreviousfoam2}
    const [hrerror, sethrerror] = useState("");
    const [esderror, setesderror] = useState("");
    const [carearlavelerror, setcarearerror] = useState("");
    const [gendererror, setgendererror] = useState("");
    const [foamuserdescerror, setfoamUserdescerror] = useState("");
    const [hourrate, sethourrate] = useState(foamsdata.length>0&&getindex.editinedex>-1? foamsdata[getindex.editinedex].hourlyrate:"");
    const [esdate, setesdate] = useState(foamsdata.length>0&&getindex.editinedex>-1? foamsdata[getindex.editinedex].expdate:"")
    const [carearlavel, setcarearlavel] = useState(foamsdata.length>0&&getindex.editinedex>-1? foamsdata[getindex.editinedex].careerlavel:"")
    const [gender, setgender] = useState(foamsdata.length>0&&getindex.editinedex>-1? foamsdata[getindex.editinedex].genders:"")
    const [fdescrption, setfdescrption] = useState(foamsdata.length>0&&getindex.editinedex>-1? foamsdata[getindex.editinedex].equpdescrption:"")

    const [isvisible, setisvisible] = useState(0);
  const [issubmit, setissubmit] = useState(false);
  const [fissubmit, setfissubmit] = useState(false);
  
  const previousfaom1 = () => {
   
    Props.getpreviousfoam2(0);
  }
    const handleupclick2 = () => {
          console.log("cond",Props)
        // console.log(userexp)
        // console.log(useredu)
        // console.log(userskil)
        // console.log(userdesc)
        if (hourrate === "") {
          sethrerror("select value");
          setfissubmit(false);
        } else {
          sethrerror("");
          setfissubmit(true);
        }
        if (esdate === "") {
          setesderror("select value");
          setfissubmit(false);
        } else {
          setesderror("");
          setfissubmit(true);
        }
        if (carearlavel === "") {
          setcarearerror("select value");
          setfissubmit(false);
        } else {
          setcarearerror("");
          setfissubmit(true);
        }
        if (gender === "") {
          setgendererror("select value");
          setfissubmit(false);
        } else {
          setgendererror("");
          setfissubmit(true);
        }
        if (fdescrption === "") {
          setfoamUserdescerror("select value");
          setfissubmit(false);
        } else {
          setfoamUserdescerror("");
          setfissubmit(true);
        }
        if (hourrate !== ""&&esdate !== ""&&carearlavel !== ""&&gender !== ""&&fdescrption !== "") {
          setisvisible(2);
          Props. getvisiblefoam2(2);
          Props.addTocondinfoHandler({
            hourlyrate:hourrate,
            expdate:esdate,
            careerlavel:carearlavel,
            genders:gender,
            equpdescrption:fdescrption
          })
          
  
          console.log(isvisible);
        }
      };
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
                      Hourly Rate
                    </label>
                    <select
                      name="format"
                      id="format"
                      value={hourrate}
                      onChange={(e) => sethourrate(e.target.value)}
                    >
                      <option selected>Enter value...</option>
                      <option>120</option>
                      <option>130</option>
                      <option>140</option>
                      <option>150</option>
                      <option>160</option>
                    </select>
                  </div>
                  <label style={{ fontSize: 15, color: "red", marginLeft: 20 }}>
                    {hrerror}
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
                      Expected start date
                    </label>
                    <select
                      name="format"
                      id="format"
                      // value={esdate}
                      onChange={(e) => setesdate(e.target.value)}
                    >
                      <option selected>Enter Value...</option>
                      <option>1 june </option>
                      <option>2 june </option>
                      <option>3june</option>
                      <option>4 june</option>
                      <option>5 june</option>
                    </select>
                  </div>

                  <label
                    style={{ fontSize: 15, color: "red", marginLeft: 120 }}
                  >
                    {esderror}
                  </label>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
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
                      Career lavel
                    </label>
                    <select
                      name="format"
                      id="format"
                      value={carearlavel}
                      onChange={(e) => setcarearlavel(e.target.value)}
                    >
                      <option selected>Enter Value...</option>
                      <option>entry lave</option>
                      <option>experence lavel</option>
                      <option>profectional lavel</option>
                    </select>
                  </div>
                  <label style={{ fontSize: 15, color: "red", marginLeft: 20 }}>
                    {carearlavelerror}
                  </label>
                </div>
                <div>
                  <div
                    class="select2"
                    style={{
                      marginLeft: 70,
                    }}
                  >
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
                      Gender
                    </label>
                    <select
                      name="format"
                      id="format"
                      value={gender}
                      onChange={(e) => setgender(e.target.value)}
                    >
                      <option selected>Enter Value...</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Trans</option>
                    </select>
                  </div>
                  <label
                    style={{ fontSize: 15, color: "red", marginLeft: 120 }}
                  >
                    {gendererror}
                  </label>
                </div>
              </div>

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
                  Equipment specification
                </label>
                <textarea
                  class="form-control"
                  aria-label="With textarea"
                  defaultValue={fdescrption}
                  value={fdescrption}
                  onChange={(e) => setfdescrption(e.target.value)}
                  style={{
                    borderColor: "black",
                    height: 150,
                  }}
                ></textarea>
              </div>

              {/* <div class="selectlabel1">
                <p>And if there is any inspiration</p>

                <input type="file" id="myfile" name="myfile" multiple />
              </div> */}

              <div
                class="selectbutton1"
                style={{
                  marginTop: 40,
                }}
              >
                <button
                  class="buttonp"
                  onClick={previousfaom1}
                >
                  Previous
                </button>
                <button class="buttonn" onClick={handleupclick2}>
                  Next
                </button>
              </div>
            
    </>
  )
}

export default Page2component
