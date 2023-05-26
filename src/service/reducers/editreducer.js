import { EDIT_ARRAY } from '../constants'
const initialState = {
    editinedex: -1
}
export default function getindex(state = "", action) {
    switch (action.type) {
        case EDIT_ARRAY:
            // console.warn("reducer",action)
            return {
                ...state,
                editinedex:action.payload
            }
        default:
            return state
    }


}
