import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignupForm from './components/SignupForm'


function App() {


  // const [Seachterm, setSearchterm] = useState(null);

  // const handleChange = (e) => {
  //   setSearchterm(e.target.value);
  // };
  // const inputRef = useRef(null);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const inputValue = inputRef.current.value;
  //   console.log('Submitted:', inputValue);
  // You would typically send this value to an API here.
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState({});
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setErrors({});
  //   try {
  //     await loginSchema.validate(
  //       { email, password },
  //       { abortEarly: false }
  //     );
  //     console.log("Form is valid!");
  //     // Send data to API...
  //   } catch (validationErrors) {
  //     const errorMap = {};
  //     console.log(validationErrors[0]);
  //     if (validationErrors.inner) {
  //       validationErrors.inner.forEach((err) => {
  //         errorMap[err.path] = err.message;
  //       });
  //     } else if (validationErrors.path) {
  //       errorMap[validationErrors.path] =
  //         validationErrors.message;
  //     }
  //     setErrors(errorMap);
  //   }
  // };

  return (
    <>
      <SignupForm />
    </>
  )
}

export default App
