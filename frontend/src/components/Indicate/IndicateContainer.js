import {connect} from "react-redux";
import Indicate from './Indicate'

const mapStateToProps = (state) => {
    return {
        totalIssues: state.issuePage.totalIssues,
        completedIssueNum: state.issuePage.issues.filter(issue => issue.iscomplete).length
    }
}

const IndicateContainer = connect(mapStateToProps)(Indicate);

export default IndicateContainer;