import issueAPI from '../api/api'
import { reset } from "redux-form";

const SET_STATE = 'SET_STATE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_JIRA_ISSUE_KEY = 'SET_JIRA_ISSUE_KEY';

let initialState = {
    issues: [
        // {id: 1, title: 'Issue', iscomplete: false},
    ],
    totalIssues: 0,
    isFetching: false,
    jiraIssueKey: 'ZZZ'
};

const issuePageReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_STATE: {
            return {
                ...state,
                issues: action.issues.todos,
                totalIssues: action.issues.totalTodos,
            }
        }
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_JIRA_ISSUE_KEY: {
            return {
                ...state,
                jiraIssueKey: action.jiraIssueKey
            }
        }
        default: return state;
    }
};

export const setState = (issues) => ({type: SET_STATE, issues });
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching });
export const setJiraIssueKey = (jiraIssueKey) => ({type: SET_JIRA_ISSUE_KEY, jiraIssueKey});

export const getState = (jiraIssueKey) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        const data = await issueAPI.getIssues(jiraIssueKey)
        dispatch(setState(data));
        dispatch(setIsFetching(false));
    }
}

export const addNewIssue = (title, jiraIssueKey) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(reset('newIssueForm'));
        await issueAPI.addIssue(title, jiraIssueKey)
        dispatch(getState(jiraIssueKey));
    }
}

export const deleteIssue = (id, jiraIssueKey) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        await issueAPI.deleteIssue(id)
        dispatch(getState(jiraIssueKey));
    }
}

export const toggleCompleteStatus = (id, iscomplete, jiraIssueKey) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        await issueAPI.toggleCompleteStatus(id, iscomplete)
        dispatch(getState(jiraIssueKey));
    }
}

export default issuePageReducer;