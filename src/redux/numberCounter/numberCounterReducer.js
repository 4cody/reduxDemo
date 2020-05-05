import { INCREMENT } from './numberCounterTypes'
import { DECREMENT } from './numberCounterTypes'

const initialState = {
    number: 1
}

const numberCounterReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT: return {
            ...state,
            number: state.number + 1
        }
        case DECREMENT: return {
            ...state,
            number: state.number - 1
        }
        default: return state
    }
}

export default numberCounterReducer;