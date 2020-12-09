import request from "./network";
export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}