import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";

const Todo = () => {
  const tasks = [
    { id: "task-1", title: "Купить молоко", isDone: false },
    { id: "task-2", title: "Погладить кота", isDone: true },
  ];

  const deleteAllTasks = () => {
    console.log("Hello");
  };

  const deleteTask = (taskId) => {
    console.log(`Hello ${taskId}`);
  };

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`Hello ${taskId} ${isDone}`);
  };

  const filterTasks = (query) => {
    console.log(`поиск ${query}`);
  };

  const addTask = () => {
    console.log("Задача добавлена");
  };

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm addTask={addTask} />
      <SearchTaskForm onSearchInput={filterTasks} />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  );
};

export default Todo;
