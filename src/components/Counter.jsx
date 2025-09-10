import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      <div className="shadow-md rounded-lg w-[300px] h-[200px] bg-gray-200 text-black p-5 flex justify-center gap-5 items-center">
        <button
          onClick={() => {
            setCount(count - 1);
          }}
          className="bg-red-300 py-2 px-5 rounded-sm hover:bg-red-500 active:scale-[1.2]"
        >
          -
        </button>
        <p id="count" className="font-bold text-2xl">
          {count}
        </p>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
          className="bg-green-300 py-2 px-5 rounded-sm hover:bg-green-500 active:scale-[1.2]"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
