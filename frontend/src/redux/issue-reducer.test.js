import issuePageReducer, {action as AC} from "./issue-reducer";

let state = {
    issues: [
        {id: 1, title: 'Issues', iscomplete: false},
    ],
    totalIssues: 0,
    isFetching: false
};

it('isFetching must be toggled', () => {
    let action = AC.setIsFetching(true);
    let newState = issuePageReducer(state, action);

    expect(newState.isFetching).toBe(true);

});

it('new state must be add', () => {
    let newIssue = {
        todos: [
            {
                "id": 126,
                "title": "qweqw",
                "iscomplete": false
            },
            {
                "id": 125,
                "title": "df",
                "iscomplete": true
            }
        ],
        totalTodos: 2,
    }

    let action = AC.setState(newIssue);
    let newState = issuePageReducer(state, action);

    expect(newState.issues).toBe(newIssue.todos);
    expect(newState.totalIssues).toBe(newIssue.totalTodos);
});
