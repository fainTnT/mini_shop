// conponents/y-backtop/y-backtop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    backtopClick(){
      wx.pageScrollTo({
        duration: 300,
        scrollTop:0
      })
    }
  }
})
