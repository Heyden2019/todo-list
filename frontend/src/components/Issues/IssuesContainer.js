import {connect} from "react-redux";
import {toggleCompleteStatus, getState, deleteIssue} from "../../redux/issue-reducer";
import Issues from './Issues';

const mapStateToProps = (state) => {
    return {
        issues: state.issuePage.issues,
        jiraIssueKey: state.issuePage.jiraIssueKey
    }
}

const IssuesContainer = connect(mapStateToProps, {
    toggleCompleteStatus, getState, deleteIssue
})(Issues);

export default IssuesContainer;