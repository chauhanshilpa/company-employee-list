import { combineReducers } from "redux";
import {
  formData,
  employeeReducer,
} from "./employeeReducer";

const reducers = combineReducers({
  formData: formData,
  employee: employeeReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
