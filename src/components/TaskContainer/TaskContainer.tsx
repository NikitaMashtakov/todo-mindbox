import { FC } from 'react';
import TaskList from 'components/TaskList/TaskList';
import TaskFilter from 'components/ControlPanel/ControlPanel';
import TaskInput from 'components/TaskInput/TaskInput';
import { Paper } from '@mui/material';

const taskContainerStyles = {
  backgroundColor: 'white',
  width: '60%',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0px 0px 3px 0px #b9b9b9',
  borderRadius: '0',
};

const TaskContainer: FC = () => {
  return (
    <Paper sx={taskContainerStyles}>
      <TaskInput />
      <TaskList />
      <TaskFilter />
    </Paper>
  );
};

export default TaskContainer;
