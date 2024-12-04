import { FieldName, ActionName } from "../action-names";
import { ActionType, FieldType } from "../action-type";
import { Employee } from "../../interfaces";
import { v4 as uuidv4 } from "uuid";

interface InitialState {
  formData: Employee;
  employeeList: Employee[];
}

const initialState: InitialState = {
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
      id: "002",
      name: "Kritika",
      gender: "Female",
      department: "Marketing",
      date: "2023-04-15",
      mail: "kritika@gmail.com",
    },
    {
      id: "001",
      name: "Pritam",
      gender: "Male",
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
    case ActionName.SORT:
      let sortedList;
      const param = action.payload.sortBy as keyof Employee;
      if (action.payload.order === "descending") {
        if (param === "date") {
          sortedList = [...state.employeeList].sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
          );
        } else {
          sortedList = [...state.employeeList].sort((a, b) =>
            b[param].localeCompare(a[param])
          );
        }
      } else {
        if (param === "date") {
          sortedList = [...state.employeeList].sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );
        } else {
          sortedList = [...state.employeeList].sort((a, b) =>
            a[param].localeCompare(b[param])
          );
        }
      }
      return {
        ...state,
        employeeList: sortedList,
      };
    default:
      return state;
  }
}
