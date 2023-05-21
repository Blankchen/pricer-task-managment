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
    const data = (await taskAPI.getList()) || [];
    setTasks(data);
  };

  return {
    tasks,
    addTask: async (name) => {
      if (name === "") {
        return;
      }
      const result = await taskAPI.create(name);
      if (result.status !== "error") {
        getList();
      }
    },
    checkTask: async (task) => {
      const result = await taskAPI.update(task);
      if (result.status !== "error") {
        getList();
      }
    },
    removeTask: async (id) => {
      const result = await taskAPI.delete(id);
      if (result.status !== "error") {
        getList();
      }
    },
  };
};
