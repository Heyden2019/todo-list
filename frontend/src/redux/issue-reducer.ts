import issueAPI from '../api/api'
import { reset } from "redux-form";
import {Dispatch} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import { AppStateType } from './store';
import {DataType, IssueType} from './Types';

const SET_STATE = 'SET_STATE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

type InitialStateType = {
    issues: Array<IssueType>
    totalIssues: number
    isFetching: boolean
}

let initialState: InitialStateType = {
    issues: [
        // {id: 1, title: 'Issue', iscomplete: false},
    ],
    totalIssues: 0,
    isFetching: false
};

const issuePageReducer = (state: InitialStateType = initialState, action: ActionCreatorsTypes): InitialStateType => {
    switch (action.type) {
        case SET_STATE: {
            return {
                ...state,
                issues: action.data.todos,
                totalIssues: action.data.totalTodos,
            }
        }
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default: return state;
    }
};

type ActionCreatorsTypes = SetStateACType | SetIsFetchingACType

type SetStateACType = {
    type: typeof SET_STATE
    data: DataType
}
export const setState = (data: DataType): SetStateACType => ({type: SET_STATE, data });
type SetIsFetchingACType = {
    type: typeof SET_IS_FETCHING
    isFetching: boolean
}
export const setIsFetching = (isFetching: boolean): SetIsFetchingACType => ({type: SET_IS_FETCHING, isFetching });

export type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorsTypes>
export type ThunkDispatchType = ThunkDispatch<AppStateType, void, ActionCreatorsTypes>
type DispatchType = Dispatch<ActionCreatorsTypes>

export const getState = (): ThunkType => {
    return async (dispatch: DispatchType) => {
        dispatch(setIsFetching(true));
        const data: DataType = await issueAPI.getIssues()
        dispatch(setState(data));
        dispatch(setIsFetching(false));
    }
}

export const addNewIssue = (title: string): ThunkType => {
    return async (dispatch: ThunkDispatchType) => {
        dispatch(setIsFetching(true));
        // @ts-ignore
        dispatch(reset('newIssueForm'));
        await issueAPI.addIssue(title)
        dispatch(getState());
    }
}

export const deleteIssue = (id: number): ThunkType => {
    return async (dispatch: ThunkDispatchType) => {
        dispatch(setIsFetching(true));
        await issueAPI.deleteIssue(id)
        dispatch(getState());
    }
}

export const toggleCompleteStatus = (id: number, iscomplete: boolean): ThunkType => {
    return async (dispatch: ThunkDispatchType) => {
        dispatch(setIsFetching(true));
        await issueAPI.toggleCompleteStatus(id, iscomplete)
        dispatch(getState());
    }
}

export default issuePageReducer;