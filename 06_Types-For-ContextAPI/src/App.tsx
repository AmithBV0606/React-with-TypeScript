import { FC, useContext } from "react";
import { counterContext } from "./Context/MyContext";

const App: FC = () => {
  const { count, increment, decrement } = useContext(counterContext);
  return (
      <div>
        <h1>Count : {count}</h1>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
  );
};

export default App;