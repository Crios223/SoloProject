
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import sessionReducer from './session/sessionReducer';

// const rootReducer = combineReducers({
//   session: sessionReducer,
//   // other reducers...
// });

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );

// export default store;


// import { configureStore } from '@reduxjs/toolkit';
// import sessionReducer from './session/sessionReducer';

// const store = configureStore({
//   reducer: {
//     session: sessionReducer,
//   },
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './session/sessionReducer';

const store = configureStore({
  reducer: {
    session: sessionReducer,
  },
});

export default store;