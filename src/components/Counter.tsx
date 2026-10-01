import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const isReset = count === 0;

  return (
    <div className="bg-blue-100 max-w-lg p-6 min-w-sm rounded-lg mx-auto text-center">
      <p className="text-xl mb-6">
        カウント：<span data-testid="count" className="font-bold text-2xl">{count}</span>
      </p>
      <div className="flex justify-center gap-6">
        <button 
          onClick={() => setCount(prev => prev + 1)} 
          className="bg-blue-400 p-3 rounded-lg hover:cursor-pointer active:scale-95"
        >
          カウント＋１
        </button>
        <button 
          onClick={() => setCount(0)} 
          disabled={isReset}
          className="bg-blue-400 p-2 rounded-lg hover:cursor-pointer active:scale-95 disabled:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
        >
          リセット→０
        </button>
      </div>
    </div>
  );
}