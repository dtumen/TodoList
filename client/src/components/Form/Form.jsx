import React from 'react';
import './Form.css';

export default function Form({ inputRef, addHandler }) {
  return (
    <div className="form-container">
      <input type="text" 
      className="input-box" 
      placeholder='Enter something...'
      ref={inputRef}
      />
      <button 
      className="add-btn"
      onClick={addHandler}
      >
        +
      </button>
    </div>
  )
}
