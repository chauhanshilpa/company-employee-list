import { FieldName, ActionName } from "../action-names";
import { ActionType, FieldType } from "../action-type";
import { Employee } from "../../interfaces";
import { v4 as uuidv4 } from "uuid";

interface InitialState {
  isEditable: boolean;
  editableRowId: string;
  formData: Employee;
  employeeList: Employee[];
}

const initialState: InitialState = {
  isEditable: false,
  editableRowId: "",
  formData: {
    id: "",
    name: "",
    gender: "",
    department: "",
    date: "",
    mail: "",
  },
  employeeList: [
    {
      id: "01",
      name: "Kritika",
      gender: "female",
      department: "Marketing",
      date: "2023-04-15",
      mail: "kritika@gmail.com",
    },
    {
      id: "02",
      name: "Pritam",
      gender: "male",
      department: "Finance",
      date: "2021-06-19",
      mail: "pritam09@gmail.com",
    },
  ],
};

export function formData(state = initialState, action: FieldType) {
  switch (action.type) {
    case FieldName.ID:
    case FieldName.NAME:
    case FieldName.GENDER:
    case FieldName.DEPARTMENT:
    case FieldName.DATE:
    case FieldName.MAIL:
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.type.toLowerCase()]: action.payload,
        },
      };

    case FieldName.UPDATE_FORM_DATA:
     return {
       ...state,
       formData: action.payload as Employee,
     };
    case ActionName.RESET:
      return {
        ...state,
        formData: { ...initialState.formData },
      };
    default:
      return state;
  }
}

export function employeeReducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case ActionName.ADD:
      return {
        ...state,
        employeeList: [
          ...state.employeeList,
          { ...action.payload, id: uuidv4() },
        ],
      };
    case ActionName.EDIT:
      return {
        ...state,
        employeeList: state.employeeList.map((employee) =>
          employee.id === action.payload.id ? action.payload : employee
        ),
      };
    case ActionName.DELETE:
      return {
        ...state,
        employeeList: state.employeeList.filter(
          (employee) => employee.id !== action.payload
        ),
      };
    case ActionName.REVERSE:
      return {
        ...state,
        employeeList: state.employeeList.reverse(),
      };
    default:
      return state;
  }
}

