import { useReducer } from "react";
import { counterReducer, initialState } from "./counterReducer";

const CounterAss = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <p>Count : {state.count}</p>
      <button onClick={() => dispatch({ type: "Decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "Increment" })}>+</button>
    </div>
  );
};

export default CounterAss;