import {Component} from 'react'
import TodoItem from '../TodoItem/index'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todosList: initialTodosList}

  deleteTodo = id => {
    const {todosList} = this.state

    const updatedTodosList = todosList.filter(todo => todo.id !== id)
    this.setState({todosList: updatedTodosList})
  }

  render() {
    const {todosList} = this.state
    // console.log('todos list', todosList)
    return (
      <div className="todo-list-outer-container">
        <div className="todos-list-bg-container">
          <h1 className="todos-main-heading">Simple Todos</h1>
          <ul className="todos-list-container">
            {todosList.map(todo => (
              <TodoItem
                todo={todo}
                deleteTodo={this.deleteTodo}
                key={todo.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
