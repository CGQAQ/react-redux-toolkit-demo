import { configureStore, Store } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

// 这就是store了
export const store = configureStore({
  reducer: {
    // configureStore会自动调用combineReducers
    // configureStore还会自动配置redux-thunk，启用redux devtool
    counter: counterReducer,
  },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
