import { ADD_SHIFT_INFO, DELETE_ITEM } from '../constants'
const initialState = {
    shiftdata: []
}
export default function shiftinformation(state = [], action) {
    switch (action.type) {
        case ADD_SHIFT_INFO:
            //  console.warn("reducer",action)
            // return {
            //     ...state,
            //    shiftdata: [action.data ]
            // };
            return[action.data,...state]
        case DELETE_ITEM:
            
            console.warn("reducerdeletesss",action)
            const remainingdata=state.filter((item) => item.id !== action.data)
            console.warn("remainingdata",remainingdata)
            return[...remainingdata]
            // return {
            //     ...state,
            //     shiftdata: state.shiftdata.filter((item,index) => index.skill !== 0)
                
            // };
        default:
            return state
    }


}
