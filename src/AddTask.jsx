import { useState } from "react";

const AddTask = function ({ tasks, setTask }) {
  const [addTaskform, setAddTaskForm] = useState("");

  const addTask = function () {
    const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = { id: newId, taskName: addTaskform, completed: false };
    const allTask = [...tasks, { ...newTask }];
    if (!addTaskform) return;
    setTask(allTask);
    setAddTaskForm("");
  };

  return (
    <form className="addForm--box" onSubmit={(e) => e.preventDefault()}>
      <input
        className="add--form"
        type="text"
        value={addTaskform}
        onChange={(e) => setAddTaskForm(e.target.value)}
        placeholder="Add Task"
      />
      <button className="add--btn" onClick={addTask}>
        Add New Task
      </button>
    </form>
  );
};

export default AddTask;
