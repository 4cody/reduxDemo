import { INCREMENT } from './numberCounterTypes'
import { DECREMENT } from './numberCounterTypes'

export const incrementNumber = () => {
    return {
        type: INCREMENT
    }
}

export const decrementNumber = () => {
    return {
        type: DECREMENT
    }
}

