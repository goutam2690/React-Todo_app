import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../redux/reducers'; // Update import statement to actions.js
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import Grid from '@mui/material/Grid';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  return (
    <Grid container justifyContent="center" style={{ padding: '1rem' }}>
      <Grid item xs={12} sm={8} md={6}>
        <List>
          {tasks.map(task => (
            <ListItem
              key={task.id}
              style={{
                marginBottom: '1rem',
                borderRadius: '0.5rem',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                transition: 'box-shadow 0.3s',
                '&:hover': {
                  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <ListItemText primary={task.content} />
              <Button
                variant="contained"
                color="error"
                style={{
                  backgroundColor: red[500],
                  color: '#fff',
                  marginLeft: '1rem',
                  borderRadius: '0.5rem',
                  '&:hover': {
                    backgroundColor: red[700],
                  },
                }}
                onClick={() => dispatch(deleteTask(task.id))}
              >
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default TaskList;