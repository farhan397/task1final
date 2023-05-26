import { ADD_COND_INFO,  ADD_USER_INFO } from '../constants'
const initialState = {
    infodata: [],
    conddata: []
}
export default function clearinformation(state = [], action) {
    switch (action.type) {
        case ADD_USER_INFO:
            // console.warn("reducer",action)
            return [
                ...state,
                {infodata: []}
            ]
            case ADD_COND_INFO:
            // console.warn("reducer",action)
            return [
                ...state,
                {conddata: []}
            ]
            
        default:
            return state
    }


}
