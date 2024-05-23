import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { tasksReducer } from "./tasks/tasks.reducer";
import { loadingReducer } from "./loading/loading.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  tasksList: tasksReducer,
  loading: loadingReducer,
});
