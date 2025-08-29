import { IconButton, InputBase, Paper } from '@mui/material';
import { FC, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import { useTasksDispatch } from 'contexts/TaskProvider';

const paperStyles = {
  padding: '2px 4px',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  borderRadius: '0',
};
const inputStyles = {
  ml: 0,
  flex: 1,
  fontSize: '22px',
  fontWeight: '300',
  fontStyle: 'italic',
};
const TaskInput: FC = () => {
  const [text, setText] = useState<string>('');
  const dispatch = useTasksDispatch();

  function addTask(text: string) {
    if (text) {
      dispatch({ type: 'ADD_TASK', payload: { text } });
      setText('');
    }
  }
  return (
    <Paper sx={paperStyles}>
      <IconButton sx={{ p: '10px' }} aria-label="menu" disabled>
        <KeyboardArrowDownIcon />
      </IconButton>
      <InputBase
        sx={inputStyles}
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') addTask(text);
        }}
      />
      {text && (
        <IconButton
          type="button"
          aria-label="add"
          id="add-button"
          onClick={() => addTask(text)}
        >
          <AddIcon />
        </IconButton>
      )}
    </Paper>
  );
};

export default TaskInput;
