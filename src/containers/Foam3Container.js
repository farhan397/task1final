
import {connect} from 'react-redux'
import {addshiftinfo} from '../service/actions/actions'
// import Page3component from '../Component/Page3component'


const mapStateToProps=state=>({
    //  data:state.userinformation,

})
const mapDispatchToProps=dispatch=>({
    addToshiftHandler:data=>dispatch(addshiftinfo(data))

})
export default connect(mapStateToProps,mapDispatchToProps)
// export default Home;