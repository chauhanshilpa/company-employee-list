import { FaArrowUp, FaEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Employee } from "../interfaces";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../redux/index";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux";
import { useState } from "react";
import Alert from "./Alert";

const EmployeeDetails = () => {
  const [error, setError] = useState({ email: false, date: false });

  const dispatch = useDispatch();

  const employeeList = useSelector(
    (state: State) => state.employee.employeeList
  );

  const editable = useSelector((state: State) => state.onEdit);

  const { toggleEditableMode, updateEmployeeRecord, deleteRecord } =
    bindActionCreators(actionCreators, dispatch);

  const handleEmployeeEdit = (id: string) => {
    toggleEditableMode(!editable.isEditable, id);
  };

  const validateEmail = (tableCell: HTMLElement, text: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(text)) {
      setError((prev) => ({ ...prev, email: true }));
      tableCell.style.color = "red";
      tableCell.style.borderColor = "red";
    } else {
      setError((prev) => ({ ...prev, email: false }));
      tableCell.style.color = "black";
      tableCell.style.borderColor = "black";
    }
  };

  const validateDate = (tableCell: HTMLElement, text: string) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(text)) {
      setError((prev) => ({ ...prev, date: true }));
      tableCell.style.color = "red";
      tableCell.style.borderColor = "red";
    } else {
      setError((prev) => ({ ...prev, date: false }));
      tableCell.style.color = "black";
      tableCell.style.borderColor = "black";
    }
  };

  function handleTaskUpdate(
    event: React.KeyboardEvent<HTMLTableRowElement>,
    id: string
  ) {
    Array.from(event.currentTarget.children).forEach((child) => {
      if (child.id === "date") {
        validateDate(child as HTMLElement, child.innerHTML);
      } else if (child.id === "mail") {
        validateEmail(child as HTMLElement, child.innerHTML);
      }
    });

    if (event.key === "Enter") {
      const tempInnerText: Record<string, string> = {};
      Array.from(event.currentTarget.children).forEach((child) => {
        if (child.id) {
          tempInnerText[child.id] = child.innerHTML.trim();
        }
      });
      const updatedText: Employee = {
        id,
        name: tempInnerText.name,
        gender: tempInnerText.gender,
        department: tempInnerText.department,
        date: tempInnerText.date,
        mail: tempInnerText.mail,
      };
      error.email === false &&
        error.date === false &&
        updateEmployeeRecord({ ...updatedText });
      toggleEditableMode(false, id);
    }
  }
  // console.log(employeeList);
  return (
    <>
      {error.email && error.date ? (
        <Alert message="Both email and date inputs are invalid. Please ensure the email is in the format example@domain.com and the date is in the format YYYY-MM-DD." />
      ) : error.email ? (
        <Alert message="Invalid email address. Please enter a valid email in the format: example@domain.com." />
      ) : error.date ? (
        <Alert message="Invalid date format. Please enter a valid date in the format: YYYY-MM-DD." />
      ) : null}
      <div className="relative overflow-x-auto mb-2">
        <h2 className="text-center text-lg my-5 font-medium">Employee List</h2>
        <table className="w-[80%] m-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-black">
          <thead className="text-md text-black uppercase">
            <tr className="border border-black bg-[#00FFFF]">
              <th scope="col" className="px-6 py-3">
                <div className="flex gap-2 items-center capitalize">
                  Employee name <FaArrowUp />
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-black capitalize"
              >
                <div className="flex gap-2 items-center capitalize">
                  Gender <FaArrowUp />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 border border-black">
                <div className="flex gap-2 items-center capitalize">
                  Department <FaArrowUp />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 border border-black">
                <div className="flex gap-2 items-center capitalize">
                  Date of Joining <FaArrowUp />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 border border-black">
                <div className="flex gap-2 items-center capitalize">
                  Email Id <FaArrowUp />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 border border-black">
                <div className="flex gap-2 items-center capitalize">
                  Actions
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {employeeList.map((employee: Employee) => (
              <tr
                className={`border border-black ${
                  editable.isEditable &&
                  employee.id === editable.editableRowId &&
                  "bg-blue-100 border-2"
                }`}
                key={employee.id}
                contentEditable={
                  editable.isEditable && employee.id === editable.editableRowId
                }
                suppressContentEditableWarning={true}
                onKeyDown={(event) => handleTaskUpdate(event, employee.id)}
              >
                <th
                  id="name"
                  scope="row"
                  className="px-6 py-4 font-medium text-black whitespace-nowrap border border-black capitalize"
                >
                  {employee.name}
                </th>
                <td
                  id="gender"
                  className="px-6 py-4 border text-black border-black capitalize"
                >
                  {employee.gender}
                </td>
                <td
                  id="department"
                  className="px-6 py-4 border text-black border-black capitalize"
                >
                  {employee.department}
                </td>
                <td
                  id="date"
                  className="px-6 py-4 border text-black border-black"
                >
                  {employee.date}
                </td>
                <td
                  id="mail"
                  className="px-6 py-4 border text-black border-black"
                >
                  {employee.mail}
                </td>
                <td className="px-6 py-4 border text-black border-black capitalize">
                  <div className="flex gap-2">
                    <FaEdit
                      className="text-xl cursor-pointer"
                      onClick={() => handleEmployeeEdit(employee.id)}
                    />
                    <MdOutlineDeleteOutline
                      className="text-xl cursor-pointer"
                      onClick={() => deleteRecord(employee.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeeDetails;
