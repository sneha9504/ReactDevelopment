
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import Todo from "./components/TodoDashboard";
import "./index.css";
import { Route, Routes } from "react-router-dom";

function App() {



  return (
    <>
     
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  
    </>
  )
}

export default App
