import { Dispatch } from "redux";
import { FieldName, ActionName } from "../action-names";
import { FieldType, ActionType } from "../action-type";
import { Employee } from "../../interfaces"

export const handleNameChange = (value: string) => {
  return (dispatch: Dispatch<FieldType>) => {
   dispatch({
    type: FieldName.NAME,
    payload: value
   })
  }
}

export const handleGenderChange = (value: string) => {
  return (dispatch: Dispatch<FieldType>) => {
    dispatch({
      type: FieldName.GENDER,
      payload: value,
    });
  };
};

export const handleDepartmentChange = (value: string) => {
  return (dispatch: Dispatch<FieldType>) => {
    dispatch({
      type: FieldName.DEPARTMENT,
      payload: value,
    });
  };
};


export const handleJoiningDateChange = (value: string) => {
  return (dispatch: Dispatch<FieldType>) => {
    dispatch({
      type: FieldName.DATE,
      payload: value,
    });
  };
};


export const handleMailChange = (value: string) => {
  return (dispatch: Dispatch<FieldType>) => {
    dispatch({
      type: FieldName.MAIL,
      payload: value,
    });
  };
};

export const addNewRecord = (newRecord: Employee) => {
  return (dispatch: Dispatch<ActionType>) => {
    dispatch({
      type: ActionName.ADD,
      payload: newRecord,
    });
  };
};

export const resetForm = () => {
  return (dispatch: Dispatch) =>{
    dispatch({
      type: ActionName.RESET
    })
  }
}

export const updateFormData = (employee: Employee) => {
  return (dispatch: Dispatch<FieldType>) => {
    dispatch({
      type: FieldName.UPDATE_FORM_DATA,
      payload: employee,
    });
  };
};

export const updateEmployeeRecord = (newRecord: Employee) => {
  return (dispatch: Dispatch<ActionType>) => {
    dispatch({
      type: ActionName.EDIT,
      payload: newRecord,
    });
  };
};

export const deleteRecord = (id: string) => {
  return (dispatch: Dispatch<ActionType>) => {
    dispatch({
      type: ActionName.DELETE,
      payload: id,
    });
  };
};
