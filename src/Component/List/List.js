import React from 'react'
import Items from '../Items/Items'
import './style.css'

export default function List({ todos }) {
  return (
    <div className="list-container">
      <ul>
        {todos.map((todo) => (
          <Items key={todo.id} todos={todo} />
        ))}
      </ul>
    </div>
  )
}
