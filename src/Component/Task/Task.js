import { useState } from 'react'
import Header from '../Header/Header'
import List from '../List/List'
import './style.css'
import FilterButtons from '../FilterButtons/FilterButtons'

export default function Task() {
  // init state
  const [todos, setTodos] = useState([
    { id: 1, name: 'Example Task', done: true },
  ])
  const [idCounter, setIdCounter] = useState(todos.length + 1)
  const [filter, setFilter] = useState('All')

  // add task into list
  const addTodos = (newTodo) => {
    const todoWithID = { id: idCounter, ...newTodo }
    setTodos([todoWithID, ...todos])
    setIdCounter(idCounter + 1)
  }

  // update(edit) task name
  const updateTodos = (updatedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === updatedTodo.id) {
        return updatedTodo
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  // delete a task
  const deleteTodo = (id) => {
    const deleteTodo = todos.filter((todo) => todo.id !== id)
    setTodos(deleteTodo)
  }

  // handle the done state and update the object
  const handleDoneToggle = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  // Filter the todos based on the current filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'All') return true
    if (filter === 'Done') return todo.done
    if (filter === 'To do') return !todo.done
    return true
  })

  return (
    <div className="task-container">
      <Header addTodos={addTodos} />
      <FilterButtons todos={todos} setFilter={setFilter} />
      <div className="list-container">
        <ul>
          {filteredTodos.map((todo) => (
            <List
              key={todo.id}
              todos={todo}
              handleDoneToggle={handleDoneToggle}
              deleteTodo={deleteTodo}
              updateTodos={updateTodos}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
