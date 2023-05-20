import React from "react";
import {
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutline";

const TaskListItem = React.memo(
  ({ name, divider, checked, onCheckBoxToggle, onButtonClick }) => (
    <ListItem divider={divider}>
      <Checkbox onClick={onCheckBoxToggle} checked={checked} disableRipple />
      <ListItemText primary={name} />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Task" onClick={onButtonClick}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
);

export default TaskListItem;
