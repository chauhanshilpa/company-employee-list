import { ActionName, FieldName } from "../action-names";
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

interface Sort {
  type: ActionName.SORT;
  payload: {
    sortBy: string;
    order: string;
  };
}

export type ActionType = Add | Edit | Delete | Reset | Sort;
export interface FormField {
  type: string;
  payload: string;
}
interface UpdateFormData {
  type: FieldName.UPDATE_FORM_DATA;
  payload: Employee;
}

export type FieldType = UpdateFormData | FormField ;

