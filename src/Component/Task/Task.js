import { useState } from 'react'
import Header from '../Header/Header'
import List from '../List/List'
import './style.css'

export default function Task() {
  // init state
  const [todos, setTodos] = useState([
    { id: 1, name: 'Example Task', done: true },
  ])
  const [idCounter, setIdCounter] = useState(todos.length + 1)

  const addTodos = (newTodo) => {
    const todoWithID = { id: idCounter, ...newTodo }
    setTodos([todoWithID, ...todos])
    setIdCounter(idCounter + 1)
  }

  const updateTodos = (newTodos) => {
    setTodos(newTodos)
  }

  return (
    <div className="container">
      <Header addTodos={addTodos} todos={todos} />
      <List todos={todos} />
    </div>
  )
}
