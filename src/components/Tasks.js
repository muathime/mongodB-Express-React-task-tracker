import Task from "./Task"

function Tasks({ tasks, onDelete, toggleReminder }) {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.taskId} task={task} onDelete={onDelete} toggleReminder={toggleReminder} />
      ))}
    </>
  );
}

export default Tasks