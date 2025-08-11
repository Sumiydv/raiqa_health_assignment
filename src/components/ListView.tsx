'use client';

import { useState } from 'react';

type ListViewProps = {
  items: number[];
  onClear?: () => void;
};

export default function ListView({ items, onClear }: ListViewProps) {
  const [sortAsc, setSortAsc] = useState(true);

  const sortedItems = [...items].sort((a, b) =>
    sortAsc ? a - b : b - a
  );

  return (
    <div className="w-full max-w-md mx-auto mt-8 p-6 card-surface">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-sky-800">List</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setSortAsc((prev) => !prev)}
            className="px-3 py-1 rounded-xl border border-sky-300 bg-white text-sky-700 shadow-sm hover:bg-sky-50"
          >
            Sort {sortAsc ? '↓' : '↑'}
          </button>
          {onClear && (
            <button
              onClick={onClear}
              className="px-3 py-1 rounded-xl bg-rose-50 text-rose-600 border border-rose-200 shadow-sm hover:bg-rose-100"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {sortedItems.length === 0 ? (
        <p className="text-sky-50/90 font-medium">No numbers yet.</p>
      ) : (
        <>
          <ul className="list-disc list-inside space-y-1">
            {sortedItems.map((num, idx) => (
              <li
                key={idx}
                className={`
                  ${num === Math.max(...items) ? 'text-green-600 font-semibold' : ''}
                  ${num === Math.min(...items) ? 'text-red-600 font-semibold' : ''}
                `}
              >
                {num}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-green-600 inline-block"></span> Highest</div>
            <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-red-600 inline-block"></span> Lowest</div>
          </div>
        </>
      )}
    </div>
  );
}
