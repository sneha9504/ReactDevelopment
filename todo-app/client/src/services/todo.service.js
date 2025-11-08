import axios from "axios";

const API_URL = "http://localhost:5000/todo";

// ✅ Add new todo
export const addTodoAPI = async ({ userId, title, description }) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(
      `${API_URL}/add`,
      { userId, title, description },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Add Todo response:", res.data);
    return res.data;
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error;
  }
};

// ✅ Fetch all todos for a user
export const fetchTodosAPI = async (userId) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${API_URL}/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Fetch Todos response:", res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

// ✅ Delete todo by ID
export const deleteTodoAPI = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.delete(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Delete Todo response:", res.data);
    return res.data;
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};

// ✅ Update todo (title or completion)
export const updateTodoAPI = async (id, data) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.put(`${API_URL}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Update Todo response:", res.data);
    return res.data;
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
};
