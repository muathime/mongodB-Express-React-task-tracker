import { useEffect, useState } from "react";
import {
  addNew,
  getTasks,
  deleteTaskById,
  updateTaskbyId,
} from "../api/AppApi";
import AddTask from "../components/AddTask";
import Header from "../components/Header";
import Tasks from "../components/Tasks";
import { Col, Row } from "react-bootstrap";

function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getApiTasks();
  }, [tasks]);

  const getApiTasks = async () => {
    const response = await getTasks();
    if (response.data) setTasks(response.data);
  };

  const [taskForm, setTaskForm] = useState(false);

  //add task
  const addTask = async (task) => {
    const taskId = Math.floor(Math.random() * 1000 + 1);
    const newTask = { taskId, ...task };
    const response = await addNew(newTask);
    setTasks(newTask);
    console.log(response);
  };

  //delete task
  const deleteTask = async (taskId) => {
    try {
      const response = await deleteTaskById(taskId);
      if (response) {
        console.log(response);
        setTasks(tasks.filter((task) => task.taskId !== taskId));
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Toggle reminder
  const toggleReminder = async (taskId) => {
    try {
      const response = await updateTaskbyId(taskId);
      if (response) {
        console.log(response);
        setTasks(
          tasks.map((task) =>
            task.taskId === taskId
              ? { ...task, reminder: !task.reminder }
              : task
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row>
      <Col></Col>
      <Col md="9">
        <Header
          showBtn={true}
          title={taskForm? "Add New Task" : "Task Tracker"}
          onAddBtnClick={() => setTaskForm(true)}
          onCloseBtnClick={() => setTaskForm(false)}
          showAdd={taskForm}
        />

        {taskForm && <AddTask onAddTask={addTask} />}

        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            toggleReminder={toggleReminder}
          />
        ) : (
          <p>No tasks to show!</p>
        )}
      </Col>
      <Col></Col>
    </Row>
  );
}

export default TasksPage;
