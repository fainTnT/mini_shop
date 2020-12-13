import request from "./network";
export function getCategoryData(){
  return request({
    url:'/category'
  })
}

export function getSubcategory(maitKey) {
  return request({
    url: '/subcategory',
    data: {
      maitKey
    }
  })
}
