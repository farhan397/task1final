
import {connect} from 'react-redux'
import {addcondinfo} from '../service/actions/actions'
import Page2component from '../Component/Page2component'


const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addTocondinfoHandler:data=>dispatch(addcondinfo(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Page2component)
// export default Home;