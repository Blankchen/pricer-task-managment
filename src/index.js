import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";

import { useInputValue, useTasks } from "./custom-hooks";

import Layout from "./components/Layout";

import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

const TaskApp = React.memo(() => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { tasks, addTask, checkTask, editTask, removeTask } = useTasks();

  const clearInputAndAddTask = () => {
    clearInput();
    addTask(inputValue);
  };

  return (
    <Layout>
      <AddTask
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTask}
        onInputKeyPress={(event) => keyInput(event, clearInputAndAddTask)}
      />
      <TaskList
        items={tasks}
        onItemCheck={checkTask}
        onItemRemove={removeTask}
      />
    </Layout>
  );
});

ReactDOM.render(<TaskApp />, document.getElementById("root"));
