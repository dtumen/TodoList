import { useEffect, useRef, useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List';

function App() {

  const [todos, setTodos] = useState([])
  const inputRef = useRef(null);

  
  useEffect(() => {
    const fromLocal = JSON.parse(localStorage.getItem('todos'))
    fromLocal === null ? setTodos([]) : setTodos(fromLocal)
  }, [])
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = () => {
    setTodos([...todos, inputRef.current.value])
    inputRef.current.value = '';
  }

  const delHandler = (index) => {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }

  return (
    <div className="main-container">
      <div className="center-container">
        <Form inputRef={inputRef} addHandler={addHandler} />
        <h1 className="heading">TODO</h1>
        <hr />
        <List todos={todos} delHandler={delHandler} />
      </div>
    </div>
  );
}

export default App;
