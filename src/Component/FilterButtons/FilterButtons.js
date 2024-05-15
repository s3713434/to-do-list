import React from 'react'
import './style.css'

export default function FilterButtons({ todos }) {
  return (
    <div className="filter-container">
      <button className="filter-btn">All</button>
      <button className="filter-btn">Done</button>
      <button className="filter-btn">To Do</button>
    </div>
  )
}
