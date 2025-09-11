import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import CounterDeluxe from "./apps/CounterDeluxe/CounterDeluxe";
import UserProfile from "./apps/UserProfile/UserProfile";
import TodoFilters from "./apps/TodoFilters/TodoFilters";
import MiniShop from "./apps/MiniShop/MiniShop";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="flex gap-4 p-4 bg-slate-800 text-white">
        <Link to="/">Counter</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/cart">Shop</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<CounterDeluxe intialState={0} />}
        />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/todos" element={<TodoFilters />} />
        <Route path="/cart/*" element={<MiniShop />} />
      </Routes>
    </BrowserRouter>
  );
}
