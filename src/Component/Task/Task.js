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

  const updateTodos = (updatedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === updatedTodo.id) {
        return updatedTodo
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const deleteTodo = (id) => {
    const deleteTodo = todos.filter((todo) => todo.id !== id)
    setTodos(deleteTodo)
  }

  const handleDoneToggle = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div className="container">
      <Header addTodos={addTodos} todos={todos} />
      <List
        todos={todos}
        handleDoneToggle={handleDoneToggle}
        deleteTodo={deleteTodo}
        updateTodos={updateTodos}
      />
    </div>
  )
}
