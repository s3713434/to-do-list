import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import './style.css'

export default function Header({ addTodos }) {
  // Init state
  const [name, setName] = useState('')
  const [done, setDone] = useState(false)

  // Get the input
  const handleInputChange = (e) => {
    setName(e.target.value)
  }

  // Allow users to use enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo()
    }
  }

  //Add Task
  const handleAddTodo = () => {
    if (name.trim() !== '') {
      const newTodo = { name: name, done: done }
      addTodos(newTodo)
    }
    setName('')
  }

  return (
    <header>
      <div className="header-title">
        <h1>Welcome back,</h1>
        <h3>Let's see what needs to be done today.</h3>
      </div>
      <div className="user-input">
        <input
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Please enter a Task..."
          value={name}
        />
        <button className="btn" onClick={handleAddTodo}>
          <AddIcon />
        </button>
      </div>
    </header>
  )
}
