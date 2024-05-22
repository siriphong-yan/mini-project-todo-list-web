import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './reducers/usersReducer';
import tasksReducer from './reducers/tasksReducer';
// ...

const loadState = () => {
  try {
    if (typeof window !== 'undefined') {
      const serializedState = sessionStorage.getItem('state');
      return serializedState ? JSON.parse(serializedState) : undefined ;
    }

  } catch (Error) {
    console.log('[loadState]', Error);
    return undefined;
  }
};

const saveState = (state:RootState) => {
  try {
    sessionStorage.setItem('state', JSON.stringify(state));
  } catch (Error) {
    console.log('[saveState]', Error);
  }
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    users: usersReducer,
  },
  preloadedState
});

store.subscribe(()=>saveState(store.getState()));

// Infer the return type of `makeStore`
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;