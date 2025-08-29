import { render } from '@testing-library/react';
import App from './../App';
import { TaskProvider } from 'contexts/TaskProvider';

describe('App', () => {
  test('просто рендер без ошибок', () => {
    render(
      <TaskProvider>
        <App />
      </TaskProvider>,
    );
  });
});
