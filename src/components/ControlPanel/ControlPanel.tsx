import { Box, Button, useTheme } from '@mui/material';
import { FC, useMemo } from 'react';
import { Task } from 'types/types';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTasks, useTasksDispatch } from 'contexts/TaskProvider';

const buttonStyles = {
  border: '1px solid #e9d9d8',
  padding: '2px 6px',
  width: 'max-content',
  minWidth: '',
  fontWeight: '300',
  color: '#7f7f7f',
  display: 'flex',
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
  textTransform: 'none',
};
const clearButtonStyles = {
  ...buttonStyles,
  border: '1px solid rgba(233, 217, 216, 0)',
  '&:hover': {
    backgroundColor: '#f5f5f5',
    border: '1px solid #e9d9d8',
  },
};
const buttonsBoxStyles = (match: boolean) => {
  return {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    padding: '5px 10px',
    flexDirection: match ? 'row' : 'column',
  };
};
const itemsLeftStyles = {
  display: 'flex',
  flex: '1',
  color: '#7f7f7f',
  fontWeight: '300',
};
const filterButtonsGroupStyles = {
  gap: '5px',
  display: 'flex',
  flex: '2',
  flexDirection: 'row' as const,
  justifyContent: 'center',
};
const clearButtonBlockStyles = {
  display: 'flex',
  flex: '1',
  justifyContent: 'end',
};

const ControlPanel: FC = () => {
  const { tasks, filter } = useTasks();
  const dispatch = useTasksDispatch();
  function handleClearButtonClick() {
    dispatch({ type: 'CLEAR_COMPLETED' });
  }
  const theme = useTheme(); //для стилей
  const matches = useMediaQuery(theme.breakpoints.up('md')); //для стилей
  const itemsLeft = useMemo(
    () => tasks.filter((task: Task) => task.isCompleted === false).length,
    [tasks],
  );
  return (
    <Box sx={buttonsBoxStyles(matches)}>
      <div style={itemsLeftStyles}>
        <span>{itemsLeft} items left</span>
      </div>
      <div style={filterButtonsGroupStyles}>
        <Button
          sx={
            filter === 'all'
              ? { ...buttonStyles, backgroundColor: '#e7e7e7' }
              : buttonStyles
          }
          onClick={() => {
            dispatch({ type: 'SET_FILTER', payload: { filter: 'all' } });
          }}
        >
          All
        </Button>
        <Button
          sx={
            filter === 'active'
              ? { ...buttonStyles, backgroundColor: '#e7e7e7' }
              : buttonStyles
          }
          onClick={() => {
            dispatch({ type: 'SET_FILTER', payload: { filter: 'active' } });
          }}
        >
          Active
        </Button>
        <Button
          sx={
            filter === 'completed'
              ? { ...buttonStyles, backgroundColor: '#e7e7e7' }
              : buttonStyles
          }
          onClick={() => {
            dispatch({ type: 'SET_FILTER', payload: { filter: 'completed' } });
          }}
        >
          Completed
        </Button>
      </div>
      <div style={clearButtonBlockStyles}>
        <Button sx={clearButtonStyles} onClick={handleClearButtonClick}>
          Clear completed
        </Button>
      </div>
    </Box>
  );
};

export default ControlPanel;
