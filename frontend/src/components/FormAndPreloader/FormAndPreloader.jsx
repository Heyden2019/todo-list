import {connect} from "react-redux";
import React from 'react';
import NewIssueForm from './NewIssueForm';
import {addNewIssue} from "../../redux/issue-reducer";
import Spinner from '@atlaskit/spinner';

const FormAndPreloader = (props) => {

    const addNewIssues = (values) => {
        props.addNewIssue(values.issueTitle, props.jiraIssueKey)
      }

  return (
    <div className="form_and_preloader">
      <div className="form">
        <NewIssueForm onSubmit={addNewIssues} />
        </div>
      <div className="preloader">
        {props.isFetching && <Spinner />}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.issuePage.isFetching,
        jiraIssueKey: state.issuePage.jiraIssueKey
    }
}

const FormAndPreloaderContainer = connect(mapStateToProps, {addNewIssue})(FormAndPreloader);

export default FormAndPreloaderContainer;