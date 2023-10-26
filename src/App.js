import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, done: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleDone = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <div className="TaskInput">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Новая задача..."
        />
        <button onClick={addTask}>Добавить</button>
      </div>
      <ul className="TaskList">
        {tasks.map((task, index) => (
          <li key={index} className={task.done ? 'done' : ''}>
            {task.text}
            <div>
              <button className="delete" onClick={() => deleteTask(index)}>
                &#10060;
              </button>
              <button className="done" onClick={() => toggleDone(index)}>
                &#10004;
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
