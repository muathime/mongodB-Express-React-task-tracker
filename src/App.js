import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AuthPage from "./pages/AuthPage";
import TasksPage from "./pages/TasksPage";

function App() {
const [user, setUser] = useState()
useEffect(()=>{
  setUser(localStorage.getItem("user"));
}, [user]);

  return (
    <Container fluid className="mt-3">
      {user ? <TasksPage /> : <AuthPage />}
    </Container>
  );
}

export default App;
