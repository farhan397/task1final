import {combineReducers} from 'redux'
import userinformation from './reducer'

import condinformation from './condreducer'
import shiftinformation from './shiftreducer'
import getindex from './editreducer'


export default combineReducers({
    userinformation,
    condinformation,
    shiftinformation,
    getindex

    
})