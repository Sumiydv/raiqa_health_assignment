'use client';

import { useState } from 'react';

type CounterProps = {
  onAdd?: (value: number) => void;
};

export default function Counter({ onAdd }: CounterProps) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => Math.max(0, c - 1));

  const handleAdd = () => {
    if (count > 0) {
      onAdd?.(count);
      setCount(0); // reset after add
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 card-surface">
      <h1 className="text-2xl font-semibold mb-4 text-slate-900">Counter</h1>

      <div className="flex items-center justify-between">
        <button
          onClick={decrement}
          className="px-4 py-2 rounded-xl border border-sky-300 bg-white text-sky-700 shadow-sm hover:bg-sky-50 disabled:opacity-50"
          disabled={count === 0}
          aria-label="Decrement"
        >
          −
        </button>

        <div className="text-4xl font-bold tabular-nums text-sky-900">{count}</div>

        <button
          onClick={increment}
          className="px-4 py-2 rounded-xl border border-sky-300 bg-white text-sky-700 shadow-sm hover:bg-sky-50"
          aria-label="Increment"
        >
          +
        </button>
      </div>

      <button
        onClick={handleAdd}
        disabled={count === 0}
        className="mt-6 w-full px-4 py-2 rounded-xl bg-sky-500 text-white font-medium shadow hover:bg-sky-600 disabled:opacity-50"
      >
        Add
      </button>

      <p className="mt-2 text-sm text-slate-500">
        Tip: Add is enabled only when the counter is &gt; 0. After adding, it resets to 0.
      </p>
    </div>
  );
}
