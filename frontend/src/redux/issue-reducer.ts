import issueAPI from '../api/api'
import { reset } from "redux-form";
import {Dispatch} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import { AppStateType } from './store';
import {DataType, IssueType} from './Types';

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
        case 'SET_STATE': {
            return {
                ...state,
                issues: action.data.todos,
                totalIssues: action.data.totalTodos,
            }
        }
        case 'SET_IS_FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default: return state;
    }
};

export const action = {
    setState: (data: DataType) => ({type: 'SET_STATE', data}) as const,
    setIsFetching: (isFetching: boolean) => ({type: 'SET_IS_FETCHING', isFetching}) as const
}

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
type ActionCreatorsTypes = InferActionsTypes<typeof action>

export type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorsTypes>
export type ThunkDispatchType = ThunkDispatch<AppStateType, void, ActionCreatorsTypes>
type DispatchType = Dispatch<ActionCreatorsTypes>

export const getState = (): ThunkType => {
    return async (dispatch: DispatchType) => {
        dispatch(action.setIsFetching(true));
        const data: DataType = await issueAPI.getIssues()
        dispatch(action.setState(data));
        dispatch(action.setIsFetching(false));
    }
}

export const addNewIssue = (title: string): ThunkType => {
    return async (dispatch: ThunkDispatchType) => {
        dispatch(action.setIsFetching(true));
        // @ts-ignore
        dispatch(reset('newIssueForm'));
        await issueAPI.addIssue(title)
        dispatch(getState());
    }
}

export const deleteIssue = (id: number): ThunkType => {
    return async (dispatch: ThunkDispatchType) => {
        dispatch(action.setIsFetching(true));
        await issueAPI.deleteIssue(id)
        dispatch(getState());
    }
}

export const toggleCompleteStatus = (id: number, iscomplete: boolean): ThunkType => {
    return async (dispatch: ThunkDispatchType) => {
        dispatch(action.setIsFetching(true));
        await issueAPI.toggleCompleteStatus(id, iscomplete)
        dispatch(getState());
    }
}

export default issuePageReducer;


