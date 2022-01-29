import {createStore} from 'redux'
import countReducer from './reducer/countReducer'


export const store = createStore(countReducer)                  // createStore is a function // export store to index.js