import axios from 'axios';

const devUrl ='https://ty-shop.herokuapp.com/'
const paymentGateWayUrl=''
const testUrl=''

const axiosInstance = axios.create({
    baseURL: devUrl
})

const axiosInstancePayment = axios.create({
    baseURL: paymentGateWayUrl
})
export default axiosInstance;
export {axiosInstancePayment}
