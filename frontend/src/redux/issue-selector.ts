import {AppStateType} from "./store";
import {createSelector} from "reselect";


export const getTotalIssues = (state: AppStateType) => {
    return state.issuePage.totalIssues
}

export const getIssues = (state: AppStateType) => {
    return state.issuePage.issues
}

export const getCompletedIssueNum = createSelector(getIssues, (issues) => {
    return issues.filter(issue => issue.iscomplete).length

})

export const getIsFetching = (state: AppStateType) => {
    return state.issuePage.isFetching
}