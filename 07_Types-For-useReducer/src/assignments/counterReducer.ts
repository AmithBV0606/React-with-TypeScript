type initialStateType = {
    count: number
}

export const initialState: initialStateType = { count: 0 }

type incrementAction = { type: "Increment" };
type decrementAction = { type: "Decrement" };
type resetAction = { type:"Reset" };

export type actionType = incrementAction | decrementAction | resetAction

export const counterReducer = (state:initialStateType, action: actionType) : initialStateType => {
    switch (action.type) {
        case "Increment":
            return {
                count: state.count + 1
            };

        case "Decrement":
            return {
                count: state.count - 1
            };

        case "Reset":
            return {
                count: 0
            };
    
        default:
            return state;
    }
}