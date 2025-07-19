import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      onAddTask(taskText);
      setTaskText('');
    }
  };

  return (
    <div className="task-form-container">
      <form onSubmit={handleSubmit} className="task-form">
        <div className="input-group">
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="What needs to be done?"
            className="task-input"
            maxLength={200}
          />
          <button type="submit" className="add-task-btn" disabled={!taskText.trim()}>
            <span className="btn-text">Add Task</span>
            <span className="btn-icon">+</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm; 