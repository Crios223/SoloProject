// // Example with async Thunks

// // Action Types
// const SET_USER = 'session/SET_USER';
// const REMOVE_USER = 'session/REMOVE_USER';

// // Action Creators
// export const setUser = (user) => ({
//   type: SET_USER,
//   payload: user,
// });

// export const removeUser = () => ({
//   type: REMOVE_USER,
// });

// // Thunk: Log In User
// export const login = ({ credential, password }) => async (dispatch) => {
//   try {
//     // Adjust the fetch URL & body to match your backend login route
//     const response = await fetch('/api/session', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ credential, password }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       dispatch(setUser(data.user)); // or however your backend returns user
//       return data.user;
//     } else {
//       const errorData = await response.json();
//       throw errorData;
//     }
//   } catch (err) {
//     throw err;
//   }
// };

// // Thunk: Demo User
// export const demoLogin = () => {
//   // Hardcode the “demo user” credentials
//   return login({ credential: 'demoUser', password: 'demopassword' });
// };

// // Thunk: Restore User (for page refresh to stay logged in)
// export const restoreUser = () => async (dispatch) => {
//   try {
//     const response = await fetch('/api/session');
//     if (response.ok) {
//       const data = await response.json();
//       if (data.user) {
//         dispatch(setUser(data.user));
//       }
//     }
//   } catch (err) {
//     console.error(err);
//     // no-op; user not logged in
//   }
// };

// // Thunk: Log Out
// export const logout = () => async (dispatch) => {
//   const response = await fetch('/api/session', {
//     method: 'DELETE',
//   });
//   if (response.ok) {
//     dispatch(removeUser());
//   }
// };

// // Reducer
// const initialState = { user: null };

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




// import { setUser, removeUser } from './sessionReducer';

// // Thunk: Log In User
// export const login = ({ credential, password }) => async (dispatch) => {
//   try {
//     const response = await fetch('/api/session', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ credential, password }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       dispatch(setUser(data.user));
//       return data.user;
//     } else {
//       const errorData = await response.json();
//       throw errorData;
//     }
//   } catch (err) {
//     throw err;
//   }
// };

// // Other thunks remain the same...
// export const demoLogin = () => login({ credential: 'demoUser', password: 'demopassword' });

// export const restoreUser = () => async (dispatch) => {
//   try {
//     const response = await fetch('/api/session');
//     if (response.ok) {
//       const data = await response.json();
//       if (data.user) {
//         dispatch(setUser(data.user));
//       }
//     }
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const logout = () => async (dispatch) => {
//   const response = await fetch('/api/session', {
//     method: 'DELETE',
//   });
//   if (response.ok) {
//     dispatch(removeUser());
//   }
// };

import { setUser, removeUser } from './sessionReducer';

export const login = ({ credential, password }) => async (dispatch) => {
  try {
    const response = await fetch('/api/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ credential, password }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(setUser(data.user));
      return data.user;
    } else {
      const errorData = await response.json();
      throw errorData;
    }
  } catch (err) {
    throw err;
  }
};

export const demoLogin = () => login({ credential: 'demoUser', password: 'demopassword' });

export const restoreUser = () => async (dispatch) => {
  try {
    const response = await fetch('/api/session');
    if (response.ok) {
      const data = await response.json();
      if (data.user) {
        dispatch(setUser(data.user));
      }
    }
  } catch (err) {
    console.error(err);
  }
};

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/session', {
    method: 'DELETE',
  });
  if (response.ok) {
    dispatch(removeUser());
  }
};