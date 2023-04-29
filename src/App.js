import LoginForm from "./Routes/LoginForm";
import{ ToDoCreator } from "./Routes/ToDo";
import { Route, Routes } from "react-router-dom";

export default function TODO() {
  return (
    <>
      {/* Comment ToDoCreator to use the Form */}
      {/* <ToDoForm/>   */}

      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/todo" element={<ToDoCreator />} />
      </Routes>
    </>
  );
}
