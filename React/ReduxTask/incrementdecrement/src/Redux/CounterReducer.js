export function CounterReducer (state = 0, action) {
        switch(action.type){
            case "INCREMENT":
                return action + 1
                case "DECREMENT" :
                    return action - 1
                    default :
                    return state
        }
}