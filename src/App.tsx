import { Route, Routes } from "react-router-dom";
import ToDoCreator from "./Routes/ToDo";
import LoginForm from "./Routes/LoginForm";
//const LoginForm = require("./Routes/LoginForm");

//const ToDoCreator = require("./Routes/ToDo");


// export default function App() {

export const App : React.FC = () => { 
  return (
    <>
      {/* Comment ToDoCreator to use the Form */}
      {/* <ToDoForm/>   */}
      {/* <ToDoCreator/> */}
      {/* <LoginForm/> */}
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/todo" element={<ToDoCreator />} />
      </Routes>
    </>
  );
}
