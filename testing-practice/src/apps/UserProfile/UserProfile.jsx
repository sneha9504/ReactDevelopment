import { useEffect, useState } from "react";
import axios from "axios";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // BUG #3 double call (no dependency array)
    axios.get("/api/user/1").then((res) => {
      // BUG #1 update but return early
      setUser(res.data);
      setLoading(false);
    });
  }); // ← no []

  if (loading) return <p>Loading…</p>;

  return (
    <h1 className="m-6 text-xl">Hello, {user?.name}</h1>
  ); // BUG #2 loading never clears
}
