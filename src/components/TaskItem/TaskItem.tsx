import { FC } from 'react';
import { Task } from 'types/types';
import checkedIcon from 'components/icons/checked';
import uncheckedIcon from 'components/icons/unchecked';
import { Checkbox, FormControlLabel, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useTasksDispatch } from 'contexts/TaskProvider';

type Props = {
  task: Task;
};
const taskItemStyles = {
  borderBottom: '1px solid #d9d9d9',
  display: 'flex',
  flex: '1',
  alignItems: 'center',
};
const deleteButtonStyles = {
  width: '30px',
  height: '30px',
  padding: '5px 5px',
  marginRight: '5px',
  color: '#d9d9d9',
  '&:hover': {
    color: '#ff4d4d',
  },
};
const labelStyles = (isChecked: boolean) => {
  return {
    display: 'flex',
    flex: '2',
    margin: '0',
    padding: '5px',
    textDecorationLine: isChecked ? 'line-through' : '',
    color: isChecked ? '#d9d9d9' : '#4d4d4d',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };
};

export const TaskItem: FC<Props> = ({ task }) => {
  const { id, text, isCompleted } = task;

  const dispatch = useTasksDispatch();

  const handleCheck = (completeId: string) => {
    dispatch({ type: 'COMPLETE_TASK', payload: { id: completeId } });
  };
  const handleDelete = (deleteId: string) => {
    dispatch({ type: 'DELETE_TASK', payload: { id: deleteId } });
  };

  return (
    <div className="task-item" style={taskItemStyles}>
      <FormControlLabel
        control={
          <Checkbox
            id={id}
            icon={uncheckedIcon}
            checkedIcon={checkedIcon}
            checked={isCompleted}
            onChange={() => {
              handleCheck(id);
            }}
          />
        }
        label={<p>{text}</p>}
        sx={labelStyles(isCompleted)}
      />
      <IconButton
        id={id}
        type="button"
        aria-label="remove"
        sx={deleteButtonStyles}
        onClick={() => {
          handleDelete(id);
        }}
      >
        <ClearIcon />
      </IconButton>
    </div>
  );
};

export default TaskItem;
