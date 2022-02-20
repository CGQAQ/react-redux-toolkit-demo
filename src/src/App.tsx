import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { plusOne, add } from "./store/features/counter/counterSlice";
import "./style.css";

function App() {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const [amount, setAmount] = useState(0);

  return (
    <div className="App">
      <div>{counter}</div>

      <button onClick={() => dispatch(plusOne())}>+1</button>
      <input type="number" onChange={(event) => setAmount(Number(event.target.value))}/>
      <button onClick={() => dispatch(add(amount))}>+ N</button>
    </div>
  );
}

export default App;
