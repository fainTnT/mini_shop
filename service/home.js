import request from "./network";
export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}
export function getHomeGoodsdata(type,page){
  return request({
    url:'/home/data',
    data:{
      type,
      page
    }
  })
}