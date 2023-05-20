import { useState, useEffect } from "react";
import { taskAPI } from "./api";

export const useInputValue = (initialValue = "") => {
  const [inputValue, setInputValue] = useState(initialValue);

  return {
    inputValue,
    changeInput: (event) => setInputValue(event.target.value),
    clearInput: () => setInputValue(""),
    keyInput: (event, callback) => {
      if (event.which === 13 || event.keyCode === 13) {
        callback(inputValue);
        return true;
      }

      return false;
    },
  };
};

export const useTasks = (initialValue = []) => {
  const [tasks, setTasks] = useState(initialValue);
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const result = await taskAPI.getList();
    setTasks(result.data);
  };

  return {
    tasks,
    addTask: async (name) => {
      if (name === "") {
        return;
      }
      await taskAPI.create(name);
      
      getList();
    },
    checkTask: async (task) => {
      await taskAPI.update(task);

      getList();
    },
    removeTask: async (id) => {
      await taskAPI.delete(id);
      getList();
    },
  };
};
