import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import TasksPage from "./pages/TasksPage";

function App() {
const [user, setUser] = useState()
useEffect(()=>{
  setUser(localStorage.getItem("user"));
}, [user]);

  return (
    <>
    { user ? <TasksPage /> : <LoginPage />}
    </>
  );
}

export default App;
