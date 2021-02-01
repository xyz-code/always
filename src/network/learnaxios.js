const { default: axios } = require("axios");

require('axios')
// axios.get('https://www.runoob.com/try/ajax/json_demo.json')
//       .then(response => (console.log(response.data)))
//       .catch(function (error) { // 请求失败处理
//         console.log(error);
//       });
//axios(config)
axios({
  method:'post',
  url:'user/12345',
  data:{
    firstName:'zhong',
    lastName:'hanliang'
  }
});
//  GET 请求远程图片
// axios({
//   method:'get',
//   url:'http://bit.ly/2mTM3nY',
//   responseType:'stream'
// })
//   .then(function(response) {
//   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
// });

//发送并发请求
axios.all([axios({
  method:'get',
  url:'https://www.runoob.com/try/ajax/json_demo.json',
}
),axios({
  method:'get',
  url:'https://www.runoob.com/try/ajax/json_demo.json',
})])
  .then(axios.spread((res1,res2) => {
    console.log(res1.data);
    console.log(res2.data);
  }))