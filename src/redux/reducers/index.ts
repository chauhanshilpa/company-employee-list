import { combineReducers } from "redux";
import {
  formData,
  employeeReducer,
  editableRowReducer,
} from "./employeeReducer";

const reducers = combineReducers({
  formData: formData,
  employee: employeeReducer,
  onEdit: editableRowReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;
