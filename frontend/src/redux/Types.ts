export type IssueType = {
    id: number
    title: string
    iscomplete: boolean
}

export type DataType = {
    todos: Array<IssueType>
    totalTodos: number
}