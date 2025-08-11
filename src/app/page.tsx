'use client';

import { useEffect, useState } from 'react';
import Counter from "@/components/Counter";
import ListView from "@/components/ListView";

export default function Page() {
  const [numbers, setNumbers] = useState<number[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const raw = localStorage.getItem('numbers');
      return raw ? (JSON.parse(raw) as number[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try { localStorage.setItem('numbers', JSON.stringify(numbers)); } catch {}
  }, [numbers]);

  const handleAdd = (n: number) => {
    setNumbers((prev) => (prev.includes(n) ? prev : [...prev, n]));
  };

  const handleClear = () => {
    setNumbers([]);
    try { localStorage.removeItem('numbers'); } catch {}
  };

  return (
    <main>
      <div className="container-narrow py-8 space-y-6">
        <Counter onAdd={handleAdd} />
        <ListView items={numbers} onClear={handleClear} />
      </div>
    </main>
  );
}
