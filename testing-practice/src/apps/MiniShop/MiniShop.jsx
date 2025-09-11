import {
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";

export default function MiniShop() {
  return (
    <Routes>
      <Route index element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  );
}

function Cart() {
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const price = 9.99;
  const subtotal = qty * price;
  const tax = subtotal * 0.05;
  const total = subtotal; // BUG #2 ignores tax

  return (
    <div className="m-6 space-y-4">
      <h1 className="text-2xl font-semibold">Your Cart</h1>
      <div className="flex items-center gap-4">
        <p>Almond Milk — ₹{price}</p>
        <input
          type="number"
          min="1"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          className="w-16 border px-1"
        />
      </div>
      <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
      <p>Total: ₹{total.toFixed(2)}</p>
      {/* BUG #1 typo in route */}
      <button
        className="bg-green-600 text-white px-4 py-2"
        onClick={() => navigate("/checkot")}>
        Checkout
      </button>
    </div>
  );
}

function Checkout() {
  const [name, setName] = useState("");
  const [processing, setProcessing] = useState(false);

  const placeOrder = () => {
    setProcessing(true);
    setTimeout(() => setProcessing(false), 800);
  };

  return (
    <div className="m-6 space-y-4">
      <h1 className="text-2xl font-semibold">Checkout</h1>
      <input
        className="border px-2 py-1 w-full max-w-sm"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 disabled:opacity-50"
        disabled={!name || processing} // BUG #3 never flips back when valid
        onClick={placeOrder}>
        {processing ? "Placing…" : "Place Order"}
      </button>
    </div>
  );
}
