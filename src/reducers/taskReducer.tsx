import { TasksState, TaskAction, Task } from 'types/types';

export const taskReducer = (prevState: TasksState, action: TaskAction): TasksState => {
  switch (action.type) {
    case 'ADD_TASK': {
      const newTask: Task = {
        id: String(Date.now()),
        text: action.payload.text,
        isCompleted: false,
      };
      return { ...prevState, tasks: [...prevState.tasks, newTask] };
    }
    case 'COMPLETE_TASK': {
      return {
        ...prevState,
        tasks: prevState.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, isCompleted: !task.isCompleted }
            : task,
        ),
      };
    }
    case 'DELETE_TASK': {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== action.payload.id),
      };
    }
    case 'SET_FILTER': {
      return { ...prevState, filter: action.payload.filter };
    }
    case 'CLEAR_COMPLETED': {
      return { ...prevState, tasks: prevState.tasks.filter((task) => !task.isCompleted) };
    }
    default:
      return prevState;
  }
};
