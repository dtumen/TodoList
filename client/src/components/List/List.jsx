import React from 'react';
import './List.css';

export default function List({ todos, delHandler }) {
  return (
    <ul className='list-container'>
      {
        todos.map((todo, index) => (
          <li 
          className='list-item'
          key={Math.random()} 
          >
            {todo}
            <span className="icons" onClick={() => delHandler(index)}>
            <i className="fa-solid fa-trash"></i>
            </span>
          </li>
        ))
      }
    </ul>
  )
}
