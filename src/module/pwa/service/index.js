const url = 'http://v.juhe.cn/toutiao/index';
const key = '6463984cc40725baa856ed898d7e45f6';
import axios from 'axios';
import Vue from 'vue';
// axios.defaults.baseURL = '/api';
// export const FetchAPI = (url, param) => {
//   const defaultOptions = {
//     method: 'GET',
//     mode: 'cors'
//   }
// //   param = Object.assign(defaultOptions, param);
//   return axios(url, param);
// }
// export const requestData = (url, param = {}, options = {}) => new Promise((resolve, reject) => {
//   Vue.http.post(url, options).then((res) => {
//     if (res.body.code === 200 ){
//       resolve(res.body);
//     } else {
//       reject(res.body);
//     }
//   }).catch((error) => {
//     reject('错误');
//   })
// });
const host = 'https://huidoo.com.cn:8899';
export const requestData = (url, param = {}, options = {}) => new Promise((resolve, reject) => {
  fetch(url).then(response => response.json())
  .then(res => {
    if (res.code === 200){
      resolve(res);
    } else {
      reject(res);
    }
  })
  .catch(e => console.log("Oops, error", e))
});
export const API = {
  queryNews: `${host}/news`,
};
