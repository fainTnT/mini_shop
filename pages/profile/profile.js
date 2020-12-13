// pages/profile/profile.js
Page({
  data: {
    userInfo:{}
  },
  onLoad: function (options) {
    this._getUserInfo();
  },
  _getUserInfo(){
    wx.getUserInfo({
      lang: 'zh_CN',
      success:(res)=>{
        console.log(res)
        this.setData({
          userInfo: res.userInfo
        })
      }
    })
  },
  onReady: function () {

  },
  onShow: function () {

  }
})