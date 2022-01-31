import axios from 'axios'
import authToken from './../authToken/authToken';


const HTTP = axios.create({
    baseURL:'https://ty-shop-token.herokuapp.com',
    headers:{
        Authorization:`Bearer ${authToken() && authToken().token}`
    }

})


export default HTTP