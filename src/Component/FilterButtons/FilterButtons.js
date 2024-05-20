import React from 'react'
import './style.css'

export default function FilterButtons({ setFilter }) {
  return (
    <div className="filter-container">
      <button className="filter-btn" onClick={() => setFilter('All')}>
        All
      </button>
      <button className="filter-btn" onClick={() => setFilter('Done')}>
        Done
      </button>
      <button className="filter-btn" onClick={() => setFilter('To do')}>
        To Do
      </button>
    </div>
  )
}
