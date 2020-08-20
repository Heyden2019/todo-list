import {connect} from "react-redux";
import Indicate from './Indicate'
import {getCompletedIssueNum, getTotalIssues} from "../../redux/issue-selector";
import {AppStateType} from "../../redux/store";

type MapStateToPropsType = {
    totalIssues: number
    completedIssueNum: number
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        totalIssues: getTotalIssues(state),
        completedIssueNum: getCompletedIssueNum(state)
    }
}

const IndicateContainer = connect<MapStateToPropsType, null, null, AppStateType>(
    mapStateToProps)(Indicate);

export default IndicateContainer;