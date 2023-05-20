import React from "react";
import { List, Paper } from "@material-ui/core";

import TaskListItem from "./TaskListItem";

const TaskList = React.memo(({ items, onItemCheck, onItemRemove }) => (
  <>
    {items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List style={{ overflow: "scroll" }}>
          {items.map((task, idx) => (
            <TaskListItem
              {...task}
              key={`TaskItem.${task.id}`}
              divider={idx !== items.length - 1}
              onButtonClick={() => onItemRemove(task.id)}
              onCheckBoxToggle={() => onItemCheck(task)}
            />
          ))}
        </List>
      </Paper>
    )}
  </>
));

export default TaskList;
