import {request} from './request'

request({
  url:'/home'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})