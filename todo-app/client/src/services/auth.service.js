import axios from "axios";

const signupAPI = async ({ name, email, password }) => {
  try {
    const res = await axios.post("http://localhost:5000/user/signup", {
      name,
      email,
      password,
    });
    console.log("Signup response:", res.data);
    return res.data;
  } catch (error) {
    console.error("Error during signup:", error);
    throw error;
  }
};

const SignInAPI = async ({ email, password }) => {
    try {
        const res = await axios.post("http://localhost:5000/user/signin", {
            email,
            password,
        });
        localStorage.setItem("token", res.data.token);
        console.log("Signin response:", res.data);
        return res.data;
    } catch (error) {
        console.error("Error during signin:", error);
        throw error;
    }};

export { signupAPI, SignInAPI };
