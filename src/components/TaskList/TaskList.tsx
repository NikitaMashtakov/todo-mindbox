import FormGroup from '@mui/material/FormGroup';
import TaskItem from 'components/TaskItem/TaskItem';
import { FC } from 'react';
import { useTasks } from 'contexts/TaskProvider';

export const TaskList: FC = () => {
  const { tasks, filter } = useTasks();
  return (
    <FormGroup>
      {tasks
        .filter((task) =>
          filter === 'active'
            ? task.isCompleted === false
            : filter === 'completed'
            ? task.isCompleted === true
            : true,
        )
        .map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
    </FormGroup>
  );
};

export default TaskList;
