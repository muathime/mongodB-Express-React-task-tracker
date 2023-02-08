import React, { useState } from "react";

function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  const [day, setday] = useState("");
  const [reminder, setReminder] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();

    onAddTask({text, day, reminder});

    setday('')
    setReminder(true)
    setText('')
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Add Task</label>
        <input
          className="form-control input"
          type="text"
          placeholder="Add New Task"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Task date and Time</label>
        <input
          className="form-control input"
          type="text"
          placeholder="eg. 1st January, 2023"
          required
          value={day}
          onChange={(e) => setday(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label>Set Reminder? </label>
        <input
          type="checkbox"
          value={reminder}
          checked = {reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <div className="form-control">
        <input className="btn btn-block" type="submit" value="Create task" />
      </div>
    </form>
  );
}

export default AddTask;
