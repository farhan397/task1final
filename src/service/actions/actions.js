import {ADD_USER_INFO, DELETE_ITEM} from '../constants'
import {ADD_COND_INFO} from '../constants'
import {ADD_SHIFT_INFO} from '../constants'
import {EDIT_ARRAY} from '../constants'

export const adduserinfo =(data)=>{
     console.warn("actionuserinfo",data)
    return {
        type:ADD_USER_INFO,
        data:data
    }
}
export const addcondinfo =(data)=>{
     console.warn("actioncondinfo",data)
    return {
        type:ADD_COND_INFO,
        data:data
    }
}
export const addshiftinfo =(data)=>{
     console.warn("shiftaction",data)
    return {
        type:ADD_SHIFT_INFO,
        data:data
    }
}
export const editarray =(indexn)=>{
    // console.warn("CLEARARRAY",data)
   return {
       type:EDIT_ARRAY,
       payload: indexn
       
   }
}

export const deleteItem = (id) => {
   
    return {
   
    type: DELETE_ITEM,
    data: id
    }
  };
