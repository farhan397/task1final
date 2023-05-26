import { ADD_COND_INFO } from '../constants'
const initialState = {
    conddata: []
}
export default function condinformation(state = [], action) {
    switch (action.type) {
        case ADD_COND_INFO:
            // console.warn("reducer",action)
            return [
                ...state,
                {conddata: action.data}
            ]
        default:
            return state
    }


}
