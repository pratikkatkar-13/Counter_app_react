import "./App.css";
import { useState } from "react";

function App() {
  const[count,setcount] = useState(0);
  function decreasehandler()
  {
    setcount(count-1);
  }
  function increasehandler()
  {
    setcount(count-1);
  }
  function resethandler()
  {
    setcount(0);
  }
  return (
    <div className="w-[100vw] h-[100vw] flex justify-center items-center flex-col gap-10 bg-[#344151]">
      <div className="text-[#0398d4] font-medium text-2xl" >Increament and Decrement</div>
        <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
          <button onClick={decreasehandler} className="text-center w-20 border-r-2 text-5xl border-[#bfbfbf]">
            -
          </button>
          <div className="font-bold gap-12 text-5xl">
            {count}
          </div>
          <button onClick={increasehandler} className="text-center w-20 border-l-2 text-5xl border-[#bfbfbf]">
            +
          </button>
        </div>
        <button onClick={resethandler} className="bg-[#0395d4] text-white px-5 py-2 rounded-sm text-lg">
          Reset
        </button>
    </div>
  );
}

export default App;
