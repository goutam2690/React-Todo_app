import { useDispatch } from 'react-redux';
import { addTask } from '../redux/reducers'; // Update import statement to actions.js
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    } else {
      alert('Please enter a task');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ padding: '1rem' }}>
      <Grid item xs={12} sm={8} md={6}>
        <TextField
          label="Enter task"
          variant="outlined"
          fullWidth
          value={task}
          onChange={e => setTask(e.target.value)}
          style={{ marginBottom: '1rem' }}
        />
        <Button variant="contained" color="primary" onClick={handleAddTask} style={{ borderRadius: '2rem' }}>
          Add Task
        </Button>
      </Grid>
    </Grid>
  );
};

export default TaskInput;