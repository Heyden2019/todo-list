import {connect} from "react-redux";
import {toggleCompleteStatus, getState, deleteIssue} from "../../redux/issue-reducer";
import Issues from './Issues';
import {AppStateType} from "../../redux/store";
import {getIssues} from "../../redux/issue-selector";
import {IssueType} from "../../redux/Types";

type MapStateToPropsType = {
    issues: Array<IssueType>
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType=> {
    return {
        issues: getIssues(state)
    }
}

type MapDispatchToPropsType = {
    toggleCompleteStatus: (id: number, iscomplete: boolean) => void
    getState: () => void
    deleteIssue: (id: number) => void
}

const IssuesContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    toggleCompleteStatus, getState, deleteIssue
})(Issues);

export default IssuesContainer;