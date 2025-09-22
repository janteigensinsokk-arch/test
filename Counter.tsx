"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => setCount(count + 1)}
      className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
    >
      Count: {count}
    </button>
  );
}
