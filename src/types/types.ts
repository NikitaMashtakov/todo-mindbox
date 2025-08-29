export type Task = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export type FilterType = 'all' | 'completed' | 'active';

export type TasksState = {
  tasks: Task[];
  filter: FilterType;
};

export type TaskAction =
  | { type: 'ADD_TASK'; payload: { text: string } }
  | { type: 'COMPLETE_TASK'; payload: { id: string } }
  | { type: 'DELETE_TASK'; payload: { id: string } }
  | { type: 'SET_FILTER'; payload: { filter: FilterType } }
  | { type: 'CLEAR_COMPLETED' };
