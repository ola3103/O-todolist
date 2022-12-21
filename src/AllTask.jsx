import { useState } from "react";
import EditPage from "./EditPage";

const AllTask = function ({ tasks, editFormData, setEditFormData, setTask }) {
  const [watchId, setWatchId] = useState(null);
  const [checkBoxData, setCheckBoxData] = useState(false);
  const handleEdit = function (t) {
    console.log(t.taskName);
    setWatchId(t.id);
    setEditFormData(t.taskName);
  };

  const handleUpdate = function () {
    const updateTask = {
      id: watchId,
      taskName: editFormData,
    };
    const newUpdatedTasks = tasks.map((task) =>
      task.id === updateTask.id ? { ...task, ...updateTask } : task
    );

    setTask(newUpdatedTasks);
    setWatchId(null);
  };

  const handleDelete = function (id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTask(newTasks);
  };

  const handleChecked = function (id) {
    const checkComplete = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    setTask(checkComplete);
  };

  console.log(tasks);

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li className="single--task" key={task.id}>
            {task.id === watchId ? (
              <EditPage
                editFormData={editFormData}
                setEditFormData={setEditFormData}
                handleUpdate={handleUpdate}
              />
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleChecked(task.id)}
                />
                <p
                  className="task--name"
                  style={{
                    textDecoration: task.completed
                      ? "line-through solid 2.5px"
                      : "",
                  }}
                >
                  {task.taskName}
                </p>
                <div className="btn--box">
                  <button
                    style={{ display: task.completed ? "none" : "" }}
                    onClick={() => handleEdit(task)}
                    className="edit--btn"
                  >
                    <span>
                      <i className="bx bx-edit"></i>
                    </span>
                  </button>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="delete--btn"
                  >
                    <span>
                      <i className="bx bx-trash"></i>
                    </span>
                  </button>
                </div>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default AllTask;
