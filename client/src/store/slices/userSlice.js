import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    current_user: {},
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    login: (state, action) => {
      if (!localStorage.getItem('user_id')) {
        localStorage.setItem('user_id', action.payload._id.toString());
      }
      state.current_user = action.payload;
    },
    logout: (state, action) => {
      if (localStorage.getItem('user_id')) {
        localStorage.removeItem('user_id');
      }
      state.current_user = {};
    },
  },
});

export const { login, logout } = userSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const loginAsync = (user) => (dispatch) => {
  setTimeout(() => {
    // dispatch(login(user));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUser = (state) => state.user.current_user;

export default userSlice.reducer;
