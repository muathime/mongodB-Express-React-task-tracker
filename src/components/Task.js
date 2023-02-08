import React from 'react'
import {FaTimes} from 'react-icons/fa'

function Task({ task, onDelete, toggleReminder }) {
  return (
    <div className={`task ${task.reminder? 'reminder' : " "}`} onDoubleClick={() => toggleReminder(task.taskId)}>
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "progress" }}
          onClick={() => onDelete(task.taskId)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task