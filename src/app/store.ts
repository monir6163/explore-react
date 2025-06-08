import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // Add your reducers here
    // For example, if you have a posts slice:
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(),
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export default store;
