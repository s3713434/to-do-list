import React from 'react'
import Items from '../Items/Items'
import './style.css'

export default function List({
  todos,
  handleDoneToggle,
  deleteTodo,
  updateTodos,
}) {
  return (
    <div className="list-container">
      <ul>
        {todos.map((todo) => (
          <Items
            key={todo.id}
            todos={todo}
            handleDoneToggle={handleDoneToggle}
            deleteTodo={deleteTodo}
            updateTodos={updateTodos}
          />
        ))}
      </ul>
    </div>
  )
}
