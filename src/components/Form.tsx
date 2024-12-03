import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux";
import { State } from "../redux/index";
import { GENDER, DEPARTMENT } from "../constants";

const Form = ({ formRef }: { formRef: React.RefObject<HTMLDivElement> }) => {
  const dispatch = useDispatch();

  const {
    handleNameChange,
    handleGenderChange,
    handleDepartmentChange,
    handleJoiningDateChange,
    handleMailChange,
    addNewRecord,
    updateEmployeeRecord,
    resetForm,
  } = bindActionCreators(actionCreators, dispatch);

  const formData = useSelector((state: State) => state.formData.formData);

  const handleFormSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.id) {
      updateEmployeeRecord({ ...formData });
    } else {
      addNewRecord({ ...formData });
    }
    resetForm();
  };

  return (
    <section ref={formRef}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto z-10">
        <div className="w-full rounded-sm shadow dark:border md:mt-0 sm:max-w-md bg-[#030639] dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-[#FBFF0E] md:text-2xl text-center">
              Form Submission
            </h1>
            <form
              className="space-y-1 md:space-y-2"
              action="#"
              onSubmit={handleFormSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-50"
                >
                  Employee Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  id="employeeName"
                  className="bg-[#F8EDED] border border-gray-400 focus:outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 capitalize"
                  placeholder="Enter Employee Name"
                  value={formData.name}
                  onChange={(event) => handleNameChange(event.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block mb-2 text-sm font-medium text-gray-50"
                >
                  Gender
                </label>
                <select
                  required
                  id="gender"
                  name="gender"
                  className="bg-[#F8EDED] border border-gray-400 focus:outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  value={formData.gender}
                  onChange={(event) => handleGenderChange(event.target.value)}
                >
                  <option value="" disabled selected hidden>
                    Select an option
                  </option>
                  {GENDER.map((gender, index) => (
                    <option key={index} value={gender} className="capitalize">
                      {gender}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="department"
                  className="block mb-2 text-sm font-medium text-gray-50"
                >
                  Department
                </label>
                <select
                  required
                  id="department"
                  name="department"
                  className="bg-[#F8EDED] border border-gray-400 focus:outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  value={formData.department}
                  onChange={(event) =>
                    handleDepartmentChange(event.target.value)
                  }
                >
                  <option value="" disabled selected hidden>
                    Select an option
                  </option>
                  {DEPARTMENT.map((department, index) => (
                    <option
                      value={department}
                      key={index}
                      className="capitalize"
                    >
                      {department}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="joining_date"
                  className="block mb-2 text-sm font-medium text-gray-50 "
                >
                  Date of Joining
                </label>
                <input
                  required
                  type="date"
                  name="joining_date"
                  id="joining_date"
                  className="bg-[#F8EDED] border border-gray-400 focus:outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  value={formData.date}
                  onChange={(event) =>
                    handleJoiningDateChange(event.target.value)
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="mail"
                  className="block mb-2 text-sm font-medium text-gray-50"
                >
                  Email ID
                </label>
                <input
                  type="email"
                  name="mail"
                  id="mail"
                  className="bg-[#F8EDED] border border-gray-400 focus:outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Enter Email"
                  value={formData.mail}
                  onChange={(event) => handleMailChange(event.target.value)}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="text-md bg-blue-700 text-white focus:outline-none font-medium rounded-lg px-3 py-2 text-center mr-3 mt-5"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="text-md bg-blue-700 text-white focus:outline-none font-medium rounded-lg px-3 py-2 text-center ml-3 mt-5"
                  onClick={() => resetForm()}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
