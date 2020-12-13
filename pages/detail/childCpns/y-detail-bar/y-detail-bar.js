
Component({
  properties: {

  },
  data: {

  },
  methods: {
    cartClick(){
      wx.showToast({
        title: '正在加入购物车',
        icon:'loading',
        duration:250
      });
      this.triggerEvent('cartClick',{})
    }
  }
})
