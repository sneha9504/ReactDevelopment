import React, { useState } from "react";

export default function CounterDeluxe({ intialState }) {
  const [count, setCount] = useState(intialState);

  return (
    <div className="m-6 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-semibold">
        Count is {count}
      </h1>

      {/* BUG #1 role typo */}
      <button
        role="button"
        className="px-4 py-2 bg-green-600 text-white rounded"
        onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>

      {/* BUG #2 off-by-one */}
      <button
        role="buton"
        className="px-4 py-2 bg-red-600 text-white rounded"
        onClick={() => setCount((c) => c - 2)}>
        Decrement
      </button>

      {/* BUG #3 wrong reset */}
      <button
        role="buton"
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => setCount((c) => c * 2)}>
        Reset
      </button>
    </div>
  );
}
