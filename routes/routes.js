export default function routes(app, db) {

    app.get('/api/todos', async (request, response) => {
        const res = await db.getTodos()
        const data = {
            'todos': res.rows,
            'totalTodos': res.rowCount
        }
        response.status(200).json(data)
    })

    app.post('/api/todos', async (request, response) => {
        const { title } = request.body
        await db.createTodo(title)
        response.status(201).send(`Todo added`)  
    })

    app.put('/api/todos/:id', async (request, response) => {
        const id = parseInt(request.params.id)
        const { iscomplete } = request.body
        await db.updateTodo(id, iscomplete)
        response.status(200).send(`Todo modified with ID: ${id}`)  
    })

    app.delete('/api/todos/:id', async (request, response) => {
        const id = parseInt(request.params.id)
        await db.deleteTodo(id)
        response.status(200).send(`Todo deleted with ID: ${id}`)
    })
}
