import { describe, it, expect, beforeEach, vi } from 'vitest';
import { taskReducer } from 'reducers/taskReducer';
import { TasksState } from 'types/types';

describe('taskReducer', () => {
  let initialState: TasksState;

  beforeEach(() => {
    initialState = {
      tasks: [
        { id: '1', text: 'Task 1', isCompleted: true },
        { id: '2', text: 'Task 2', isCompleted: false },
      ],
      filter: 'all',
    };

    // мок Date.now() чтобы получать предсказуемый результат
    vi.spyOn(Date, 'now').mockReturnValue(123456789);
  });

  it('состояние по умолчанию', () => {
    const result = taskReducer(initialState, { type: 'UNKNOWN_ACTION' } as any);
    expect(result).toEqual(initialState);
  });

  it('добавление задачи ADD_TASK', () => {
    const result = taskReducer(initialState, {
      type: 'ADD_TASK',
      payload: { text: 'New Task' },
    });

    expect(result.tasks).toHaveLength(3);
    expect(result.tasks[2]).toEqual({
      id: '123456789',
      text: 'New Task',
      isCompleted: false,
    });
  });

  it('выполнение задачи COMPLETE_TASK', () => {
    const result = taskReducer(initialState, {
      type: 'COMPLETE_TASK',
      payload: { id: '2' },
    });

    expect(result.tasks.find((task) => task.id === '2')?.isCompleted).toBe(true);
  });

  it('удаление задачи DELETE_TASK', () => {
    const result = taskReducer(initialState, {
      type: 'DELETE_TASK',
      payload: { id: '2' },
    });

    expect(result.tasks).toHaveLength(1);
    expect(result.tasks.some((task) => task.id === '2')).toBe(false);
  });

  it('фильтрация SET_FILTER', () => {
    const result = taskReducer(initialState, {
      type: 'SET_FILTER',
      payload: { filter: 'completed' },
    });

    expect(result.filter).toBe('completed');
  });

  it('очистка завершенных CLEAR_COMPLETED', () => {
    const result = taskReducer(initialState, {
      type: 'CLEAR_COMPLETED',
    });

    expect(result.tasks).toHaveLength(1);
    expect(result.tasks[0].isCompleted).toBe(false);
  });
});
