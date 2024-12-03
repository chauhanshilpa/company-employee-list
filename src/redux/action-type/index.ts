import { ActionName } from "../action-names";
import { Employee } from "../../interfaces";

interface Add {
  type: ActionName.ADD;
  payload: Employee;
}

interface Edit {
  type: ActionName.EDIT;
  payload: Employee;
}

interface Delete {
  type: ActionName.DELETE;
  payload: string;
}

interface Reset {
  type: ActionName.RESET;
}

export type ActionType = Add | Edit | Delete | Reset;
export interface FieldType {
  type: string;
  payload: string;
}
export interface EditableField {
  type: string;
  payload: { isEditable: boolean; editableRowId: string };
}
