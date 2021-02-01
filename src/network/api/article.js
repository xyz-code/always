import {request} from '../request'

export function CreateArticle(data){
  return request({
    url:'/article/postArticle',
    method:'post',
    data
  })
}
export function updateArticle(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}
export function fetchList(){
  return request({
    url:'/article/list',
    method:'get',
  })
}
export function fetchArticle(id){
  return request({
    url:`/article/${id}`,
    method:'get',
  })
}
