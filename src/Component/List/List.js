import React from 'react'
import { useState } from 'react'
import './style.css'

export default function List({
  todos,
  handleDoneToggle,
  deleteTodo,
  updateTodos,
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [updatedName, setUpdatedName] = useState(todos.name)

  // Allow user to use enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEditTodo()
    }
  }

  // Trigger of Edit HTML
  const handleToggleEdit = () => {
    setIsEditing(!isEditing)
  }

  // To get the input
  const handleInputChange = (e) => {
    setUpdatedName(e.target.value)
  }

  // For edit task
  const handleEditTodo = () => {
    // console.log('Updated name:', updatedName)
    if (updatedName.trim() !== '') {
      const updatedTodo = { ...todos, name: updatedName }
      updateTodos(updatedTodo)
    }
    setIsEditing(false)
  }

  //Delete task
  const handleDeleteTodo = () => {
    // console.log('Deleted todo ID:', todos.id)
    deleteTodo(todos.id)
  }
  return (
    <li>
      {isEditing ? (
        <div className="edit-container">
          <input
            className="edit-input"
            type="text"
            value={updatedName}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button className="btn-save" onClick={handleEditTodo}>
            Save
          </button>
        </div>
      ) : (
        <div className="normal-container">
          <label>
            <input
              type="checkbox"
              defaultChecked={todos.done}
              onChange={() => handleDoneToggle(todos.id)}
            />
            <span className={todos.done ? 'completed' : ''}>{todos.name}</span>
          </label>
          <div className="btn-container">
            <button className="btn" onClick={handleToggleEdit}>
              Edit
            </button>
            <button className="btn" onClick={handleDeleteTodo}>
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  )
}
