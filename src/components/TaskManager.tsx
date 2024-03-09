import { useState } from "react";
import { useTaskManager } from "./hook/useTaskManager";

export const TaskManager: React.FC = () => {
  const { tasks, addTask, deleteTask, updateTask, filterTasks } = useTaskManager();
  const [title, setTitle] = useState("");
  
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(ev.target.value);
  };

  const filteredTasks = filterTasks(searchKeyword);

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <div>
        <input type="text" onChange={handleSearch} placeholder="Search Task" />
      </div>

      <div className="task">
        <input
          type="text"
          value={title}
          onChange={(ev) => {
            setTitle(ev.target.value);
          }}
        />
        <button onClick={() => addTask(title)}>Add Task</button>
      </div>

      <ul className="container">
        {filteredTasks.map((task) => (
          <li key={task.id} className="task">
            <div className="task">
              <input
                type="text"
                placeholder="Add new task"
                value={task.title}
                onChange={(e) => updateTask(task.id, { title: e.target.value })}
              />
              <button onClick={() => deleteTask(task.id)}>Done</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
