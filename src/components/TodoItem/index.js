import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo} = props
  // console.log(todo)

  const {id} = todo

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item-bg-container">
      <p className="todo-item-description">{todo.title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
