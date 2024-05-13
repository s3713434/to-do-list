import './style.css'
import { useState } from 'react'

// rfc
export default function Items({ todos }) {
  const [isEditing, setIsEditing] = useState(false)
  const [updatedName, setUpdatedName] = useState(todos.name)
  const handleToggleEdit = () => {
    setIsEditing(!isEditing)
    setUpdatedName(todos.name)
  }
  const handleInputChange = (e) => {
    setUpdatedName(e.target.value)
  }

  const handleEditTodo = () => {
    console.log('Updated name:', updatedName)
    setIsEditing(false)
  }

  const handleDeleteTodo = () => {
    console.log('Deleted todo ID:', todos.id)
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
          />
          <button className="btn-save" onClick={handleEditTodo}>
            Save
          </button>
        </div>
      ) : (
        <div className="normal-container">
          <label>
            <input type="checkbox" defaultChecked={todos.done} />
            <span>{todos.name}</span>
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
  // <li>
  //   <label>
  //     <input type="checkbox" defaultChecked={todos.done}></input>
  //     <span>{todos.name}</span>
  //   </label>
  //   <div className="btn-container">
  //     <button className="btn">Edit</button>
  //     <button className="btn">Delete</button>
  //   </div>
  // </li>
}
