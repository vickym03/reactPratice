
import countReducer from './reducer/countReducer'
import  { combineReducers,createStore} from 'redux'
import authReducer from './reducer/authReducer'



const allReducers = combineReducers({
    countReducer,
    authReducer
})


export const store = createStore(allReducers)// createStore is a function // export store to index.