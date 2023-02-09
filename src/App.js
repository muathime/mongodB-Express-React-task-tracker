import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import TasksPage from "./pages/TasksPage";

function App() {
  const [user, setUser] = useState(false)

  useEffect(() => {
    setUser(localStorage.getItem("user"))
  }, [user]);

  return (
    <div>
      {user ? <TasksPage /> : <LoginPage />}
    </div>
  );
}

export default App;
