// // Action Types
// const SET_USER = 'session/SET_USER';
// const REMOVE_USER = 'session/REMOVE_USER';

// // Initial State
// const initialState = { user: null };

// // Reducer
// export default function sessionReducer(state = initialState, action) {
//   switch (action.type) {
//     case SET_USER:
//       return { ...state, user: action.payload };
//     case REMOVE_USER:
//       return { ...state, user: null };
//     default:
//       return state;
//   }
// }

// // Action Creators
// export const setUser = (user) => ({
//   type: SET_USER,
//   payload: user,
// });

// export const removeUser = () => ({
//   type: REMOVE_USER,
// });

import { createSlice } from '@reduxjs/toolkit';

const sessionSlice = createSlice({
  name: 'session',
  initialState: { user: null },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    }
  }
});

export const { setUser, removeUser } = sessionSlice.actions;
export default sessionSlice.reducer;



