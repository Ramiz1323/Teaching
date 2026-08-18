import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";
import { useState } from "react";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const [filter, setFilter] = useState("all");

  // Fixed parameter name from 'tasks' to 'task'
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const filterButtons = [
    { label: "All", value: "all" },
    { label: "Pending", value: "pending" },
    { label: "Completed", value: "completed" },
  ];

  return (
    <div className="w-full space-y-4">
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold text-gray-800">Tasks</h2>
          <span className="px-2.5 py-0.5 text-xs font-semibold bg-gray-100 text-gray-600 rounded-full">
            {filteredTasks.length}
          </span>
        </div>

        {/* Filter Tab Buttons */}
        <div className="flex bg-gray-100 p-1 rounded-lg self-start sm:self-auto">
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value)}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                filter === btn.value
                  ? "bg-white text-gray-900 shadow-sm font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Task List / Empty State */}
      {filteredTasks.length === 0 ? (
        <div className="text-center py-10 px-4 rounded-xl bg-gray-50 border-2 border-dashed border-gray-200">
          <p className="text-gray-500 font-medium">
            {tasks.length === 0
              ? "No tasks added yet."
              : `No ${filter} tasks found.`}
          </p>
          <p className="text-sm text-gray-400 mt-1">
            {tasks.length === 0
              ? "Add a new task above to get started!"
              : "Try switching filters or add a new task."}
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filteredTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;