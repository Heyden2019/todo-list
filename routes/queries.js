const { pool } = require('../DB_config')

const getTodos = async () => {
    const res = await pool.query('SELECT * FROM todos')
    return res
}

const createTodo = async (title, issue_key) => {
    await pool.query('INSERT INTO todos (title, iscomplete, issue_key) VALUES ($1, False, $2)', [title, issue_key])
}

const updateTodo = async (id, iscomplete) => {
    await pool.query('UPDATE todos SET iscomplete = $1 WHERE id = $2',[iscomplete, id])  
}

const deleteTodo = async (id) => {
    await pool.query('DELETE FROM todos WHERE id = $1', [id])
}

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
}