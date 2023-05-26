import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

import { useDispatch } from "react-redux";

import { editarray,deleteItem} from "../service/actions/actions";
const ViewPostjob = ({ addjobdata }) => {
  const dispatch = useDispatch();
  const foam3 = useSelector(state => state.shiftinformation);

  console.log("getfoam3", foam3)
  const [jobdata, setjobdata] = useState(foam3);
  const [remainingjobdata, setremainingjobdata] = useState(foam3);

  console.log("getfoamjob", jobdata)




  const deleteuser = (id) => {
   

    dispatch(deleteItem(id));
    setremainingjobdata(foam3)
    
  };

  const edituserinfo = (index) => {
    dispatch(editarray(index));
    console.log("info", index)
    addjobdata(0)
  }
  return (
    <>
      <div className='table-responsive' style={{
        width: '95%', marginLeft: '10px'

      }}>
        <button className="buttojob" onClick={() => addjobdata(0)}>ADD Job Data</button>
        {remainingjobdata.length<0&&
        
       
        <p>no item found</p>
        }
        {remainingjobdata.length>0&&
        <table border={3} width="60" cellPadding={10} className='table'>
          <thead>
            <tr>
           
              <th>Looking For</th>
              <th>Rate</th>
              <th>Experience</th>
              <th>Education</th>
              <th>Skill</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {console.log("jobbdata", jobdata)}

            {/* <View userinfo={jobdata} edituserinfo={edituserinfo}/> */}
            {remainingjobdata.map((item, index) => (
              <tr key={index}>
               
                <td>{item.lokingfor}</td>
                <td>{item.hourlyrate}</td>
                <td>{item.experience}</td>
                <td>{item.education}</td>
                <td>{item.skill}</td>
                <td>{item.genders}</td>

                <td>
                  <button
                    className="edit"
                    onClick={() => {
                       edituserinfo(index);
                      // dispatch(editarray(index));
                      // console.log("info", index)
                    }}
                    type="button"
                    style={{
                      paddingLeft: 10,
                      paddingRight: 10,
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="delete"
                    onClick={() => {
                       deleteuser(item.id);

                    }}
                    type="button"
                    style={{
                      paddingLeft: 10,
                      paddingRight: 10,
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    }
      </div>
    </>
  )
}

export default ViewPostjob
