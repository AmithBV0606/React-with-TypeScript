import { createContext, FC, ReactNode, useState } from "react";

type counterContextProps = {
    count: number;
    increment: () => void;
    decrement: () => void;
}

export const counterContext = createContext<counterContextProps>({
    count: 0,
    increment: () => {},
    decrement: () => {},
});

type contextProvide = {
    children: ReactNode
}

// export const counterContextProvider = ({ children } : contextProvide) => {
const CounterContextProvider: FC<contextProvide> = ({ children }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return(
        <counterContext.Provider value={{count, increment, decrement}}>
            {children}
        </counterContext.Provider>
    );
}

export default CounterContextProvider;