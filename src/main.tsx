import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { TaskProvider } from 'contexts/TaskProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </StrictMode>,
);
