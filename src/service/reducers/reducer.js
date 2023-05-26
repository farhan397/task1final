import { ADD_USER_INFO } from '../constants'
const initialState = {
    infodata: []
}
export default function userinformation(state = [], action) {
    switch (action.type) {
        case ADD_USER_INFO:
            // console.warn("reducer",action)
            return [
                ...state,
                {infodata: action.data}
            ]
        default:
            return state
    }


}
