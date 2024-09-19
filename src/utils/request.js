// axios
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 5000
})

// request interceptor
// before sending request, customize configuration/parameters
request.interceptors.request.use((config)=> {
    return config
  }, (error)=> {
    return Promise.reject(error)
})

// response interceptor
// before sending response to client, intercept and return the useful data
request.interceptors.response.use((response)=> {
    // 200 status code - to call this function
    // response to  data
    return response.data
  }, (error)=> {
    // Not 200 status code - call
    // response to error message
    return Promise.reject(error)
})

export { request }