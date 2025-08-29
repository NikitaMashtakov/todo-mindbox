import { createContext, Dispatch, FC, ReactNode, useContext, useReducer } from 'react';
import { taskReducer } from 'reducers/taskReducer';
import { Task, TaskAction, TasksState } from 'types/types';

const initTasks: Task[] = [
  { id: '1', text: 'Тестовое задание', isCompleted: false },
  { id: '2', text: 'Прекрасный код', isCompleted: true },
  { id: '3', text: 'Покрытие тестами', isCompleted: false },
];

const initState: TasksState = {
  tasks: initTasks,
  filter: 'all',
};

const TasksContext = createContext<TasksState | null>(null);
const DispatchContext = createContext<Dispatch<TaskAction> | null>(null);

export const TaskProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [tasksState, dispatch] = useReducer(taskReducer, initState);
  return (
    <TasksContext.Provider value={tasksState}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (context === null) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return context;
};

export const useTasksDispatch = () => {
  const context = useContext(DispatchContext);
  if (context === null) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return context;
};
