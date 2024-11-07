import { useReducer } from "react"

type stateType = { count : number }

type actionType = { type: "Increment" } | { type:"Decrement" } | { type:"Reset" }

const reducer = (state: stateType, action: actionType): stateType => {
    switch (action.type) {
        case "Increment":
            return { count: state.count + 1 };

        case "Decrement":
            return { count: state.count - 1};

        case "Reset":
            return { count: 0};
    
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {count:0});

  return (
    <div>
        <p>Count : {state.count}</p>
        <button onClick={() => dispatch({ type: "Decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "Increment" })}>+</button>
    </div>
  )
}

export default Counter