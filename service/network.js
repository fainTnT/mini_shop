export default function request(options){
  return new Promise((resolve,reject) => {
    wx.request({
      url:'http://152.136.185.210:8000/api/w6' + options.url,
      data: options.data || {},
      method:options.method || 'get',
      success: resolve,
      fail:reject
    })
  })
}