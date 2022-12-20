import { useEffect, useState } from "react";
import "./App.css";
import AllTask from "./AllTask";
import AddTask from "./AddTask";

function App() {
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [editFormData, setEditFormData] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <AddTask tasks={tasks} setTask={setTask} />
      <AllTask
        tasks={tasks}
        editFormData={editFormData}
        setEditFormData={setEditFormData}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
