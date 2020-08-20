import {connect} from "react-redux";
import React, {FC} from 'react';
import NewIssueForm from './NewIssueForm';
import {addNewIssue} from "../../redux/issue-reducer";
import Spinner from '@atlaskit/spinner';
import {AppStateType} from "../../redux/store";
import {getIsFetching} from "../../redux/issue-selector";

export type FormValuesType = {
    issueTitle: string
}

const FormAndPreloader: FC<MapStateToProps & MapDispatchToProps> = ({isFetching, addNewIssue}) => {

    const onSubmit = (values: FormValuesType) => {
        addNewIssue(values.issueTitle)
    }

  return (
    <div className="form_and_preloader">
      <div className="form">
        <NewIssueForm onSubmit={onSubmit} />
        </div>
      <div className="preloader">
        {isFetching && <Spinner />}
      </div>
    </div>
  )
}

type MapStateToProps = {
    isFetching: boolean
}
const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        isFetching: getIsFetching(state),
    }
}

type MapDispatchToProps = {
    addNewIssue: (value: string) => void
}

const FormAndPreloaderContainer = connect<MapStateToProps, MapDispatchToProps, {}, AppStateType>(
    mapStateToProps, {addNewIssue})(FormAndPreloader);

export default FormAndPreloaderContainer;