import axios from 'axios'
import {Message} from 'element-ui'
export function request(config){
  const instance = axios.create({
    baseURL:'http://127.0.0.1:8888/api/v1',
    timeout:5000
  })
  //拦截器
  instance.interceptors.request.use( config => {
    //可以加类似的请求时响应动画
    return config;
  }, error => {
    return Promise.reject(error);
  });
  //响应拦截器
  instance.interceptors.response.use(response => {
    return response.data;
  }, error => {
    Message({
      message:error.message,
      type:error,
      duration:3*1000
    })
    // return Promise.reject(error);
  });
  //本身就是Promise
  return instance(config)
}


  // return new Promise((resolve,reject) => {
  //   const instance = axios.create({
  //     baseURL:'http://',
  //     timeout:5000
  //   })
  //   instance(config)
  //     .then(res => {
  //       resolve(res)
  //     })
  //     .catch(err => {
  //       reject(err)
  //     })
  // })