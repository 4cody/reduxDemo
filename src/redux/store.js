import { createStore } from 'redux'
import numberCounterReducer from './numberCounter/numberCounterReducer'


const store = createStore(numberCounterReducer)

export default store;