const { createSlice } = require('@reduxjs/toolkit');

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUsers(state, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);

      // state = state.filter(user => user.id !== action.payload);
    },
  },
});

export const { addUsers, deleteUser } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
