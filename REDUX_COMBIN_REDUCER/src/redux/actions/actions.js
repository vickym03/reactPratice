import {INCREMENT, DECREMENT, RESET, LOGIN } from '../constants/constants'
// action creators
export const increment = () =>{
    return{
        type: INCREMENT
    }
}
export const decrement = () =>{
    return{
        type: DECREMENT
    }
}
export const reset = () =>{
    return{
        type: RESET
    }
}
export const login =(payload) => {
    return {
        type :LOGIN,
        payload:payload
    }
}