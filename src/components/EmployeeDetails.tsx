import { useState } from "react";
import { FaArrowUp, FaArrowDown, FaEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Employee } from "../interfaces";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../redux/index";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux";

const EmployeeDetails = () => {
  const [order, setOrder] = useState("descending");

  const dispatch = useDispatch();

  const employeeList = useSelector(
    (state: State) => state.employee.employeeList
  );

  const { reverseListOrder, updateFormData, deleteRecord } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleEmployeeEdit = (id: string) => {
    const employee = employeeList.filter((employee) => employee.id === id)[0];
    updateFormData({ ...employee });
  };

  const handleOrder = () => {
    if (order === "descending") {
      setOrder("ascending");
    } else {
      setOrder("descending");
    }
    reverseListOrder();
  };

  return (
    <>
      <div className="relative overflow-x-auto mb-2">
        <h2 className="text-center text-lg my-5 font-medium">Employee List</h2>
        <table className="w-[80%] m-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-black">
          <thead className="text-md text-black uppercase">
            <tr className="border border-black bg-[#00FFFF]">
              <th scope="col" className="px-6 py-3">
                <div
                  className="flex gap-2 items-center capitalize"
                  onClick={handleOrder}
                >
                  <span>Employee name</span>
                  <span>
                    {order === "descending" ? <FaArrowUp /> : <FaArrowDown />}
                  </span>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-black capitalize"
              >
                <div className="flex gap-2 items-center capitalize">
                  <span>Gender</span>
                  <span>
                    {order === "descending" ? <FaArrowUp /> : <FaArrowDown />}
                  </span>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 border border-black">
                <div className="flex gap-2 items-center capitalize">
                  <span>Department</span>
                  <span>
                    {order === "descending" ? <FaArrowUp /> : <FaArrowDown />}
                  </span>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 border border-black">
                <div className="flex gap-2 items-center capitalize">
                  <span>Date of Joining</span>
                  <span>
                    {order === "descending" ? <FaArrowUp /> : <FaArrowDown />}
                  </span>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 border border-black">
                <div className="flex gap-2 items-center capitalize">
                  <span>Email Id</span>
                  <span>
                    {order === "descending" ? <FaArrowUp /> : <FaArrowDown />}
                  </span>
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
              <tr className="border border-black" key={employee.id}>
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
