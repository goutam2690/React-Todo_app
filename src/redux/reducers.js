// src/redux/reducers.js
const initialState = { tasks: [] };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
    default:
      return state;
  }
};

export default rootReducer;

// src/redux/actions.js
let nextTaskId = 0;

export const addTask = content => ({
  type: 'ADD_TASK',
  payload: { id: ++nextTaskId, content },
});

export const deleteTask = id => ({ type: 'DELETE_TASK', payload: id });
