
import {connect} from 'react-redux'
import {adduserinfo} from '../service/actions/actions'
import Foam1component from '../Component/Foam1component'

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addTouserinfoHandler:data=>dispatch(adduserinfo(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Foam1component)
// export default Home;