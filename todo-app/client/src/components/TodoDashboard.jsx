import React, { useState, useEffect } from "react";
import { Check, Trash2, Plus, LogOut, Loader2 } from "lucide-react";
import {
  addTodoAPI,
  fetchTodosAPI,
  deleteTodoAPI,
  updateTodoAPI,
} from "../services/todo.service";

export default function TodoDashboard({ user, onLogout }) {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);

  // ✅ Fetch all todos on mount
  useEffect(() => {
    const loadTodos = async () => {
      setLoading(true);
      try {
        const data = await fetchTodosAPI(user?._id);
        setTodos(data);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      } finally {
        setLoading(false);
      }
    };
    if (user?._id) loadTodos();
  }, [user]);

  // ✅ Add new todo
  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setAdding(true);

    try {
      const { todo } = await addTodoAPI({
        userId: user?._id,
        title: newTodo,
        description: "",
      });
      setTodos((prev) => [...prev, todo]);
      setNewTodo("");
    } catch (error) {
      console.error("Error adding todo:", error);
      alert("Failed to add todo — check console for details.");
    } finally {
      setAdding(false);
    }
  };

  // ✅ Toggle completion status
  const toggleTodo = async (id) => {
    const target = todos.find((t) => t._id === id);
    if (!target) return;
    try {
      const { todo } = await updateTodoAPI(id, {
        iscompleted: !target.iscompleted,
      });
      setTodos((prev) =>
        prev.map((t) => (t._id === id ? { ...t, ...todo } : t))
      );
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  // ✅ Delete todo
  const deleteTodo = async (id) => {
    try {
      await deleteTodoAPI(id);
      setTodos((prev) => prev.filter((t) => t._id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 w-10 h-10 rounded-lg flex items-center justify-center">
              <Check className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">My Tasks</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 hidden sm:block">{user?.email}</span>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              <LogOut size={18} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Add Todo */}
      <div className="max-w-3xl mx-auto p-4 sm:p-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Task</h2>
          <form className="flex gap-3" onSubmit={addTodo}>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="What needs to be done?"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
            />
            <button
              type="submit"
              disabled={adding}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold text-white transition ${
                adding
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 to-pink-500 hover:shadow-lg transform hover:scale-105"
              }`}
            >
              {adding ? <Loader2 className="animate-spin" size={20} /> : <Plus size={20} />}
              <span className="hidden sm:inline">{adding ? "Adding..." : "Add"}</span>
            </button>
          </form>
        </div>

        {/* Todo List */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Your Tasks</h2>
            <div className="text-sm text-gray-600">
              {todos.filter((t) => t.iscompleted).length} of {todos.length} completed
            </div>
          </div>

          {loading ? (
            <p className="text-center text-gray-500 py-8">Loading...</p>
          ) : todos.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              No tasks yet. Add one above!
            </p>
          ) : (
            <div className="space-y-3">
              {todos.map((todo) => (
                <div
                  key={todo._id}
                  className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition group"
                >
                  <button
                    onClick={() => toggleTodo(todo._id)}
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
                      todo.iscompleted
                        ? "bg-gradient-to-r from-purple-600 to-pink-500 border-transparent"
                        : "border-gray-300 hover:border-purple-500"
                    }`}
                  >
                    {todo.iscompleted && (
                      <Check size={16} className="text-white" />
                    )}
                  </button>
                  <span
                    className={`flex-1 ${
                      todo.iscompleted
                        ? "line-through text-gray-400"
                        : "text-gray-800"
                    }`}
                  >
                    {todo.title}
                  </span>
                  <button
                    onClick={() => deleteTodo(todo._id)}
                    className="flex-shrink-0 text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
