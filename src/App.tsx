import "./App.css";
import {useRef} from "react";
import EmployeeDetails from "./components/EmployeeDetails";
import Form from "./components/Form";

function App() {
  const formRef = useRef <HTMLDivElement>(null);
  return (
    <div>
      <Form formRef={formRef} />
      <EmployeeDetails formRef={formRef} />
    </div>
  );
}

export default App;
