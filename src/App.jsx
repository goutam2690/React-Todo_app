
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Typography from '@mui/material/Typography';

const App = () => (
  <div>
    <Typography variant="h4" align="center" gutterBottom>
      React To-Do App
    </Typography>
    <TaskInput />
    <TaskList />
  </div>
);

export default App;
