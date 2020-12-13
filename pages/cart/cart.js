const appInstance = getApp()
Page({
  data: {
    cartGoods:[],
    allCount:0,
    allPrice:0,
    allCheck:true,
  },
  onShow: function (options) {
    const cartList = appInstance.globalData.cart;
    if(cartList.length != 0){
      this._setData(cartList);
    }
    // 
    this.setData({
      cartGoods:appInstance.globalData.cart
    })   
  },
  chooseClick(a){
    const id = a.detail.id;
    const cartList = appInstance.globalData.cart;
    const oldGood = cartList.find(item => item.id === id);
    oldGood.checked = !oldGood.checked;
    this._setData(cartList);
  },
  checkClick(a){
    if(a.detail.isCheck){
    const cartList = appInstance.globalData.cart;
    cartList.map(item => item.checked = false);
    this._setData(cartList);
    }else {
      const cartList = appInstance.globalData.cart;
      cartList.map(item => item.checked = true);
      this._setData(cartList);
    }
  },
  _setData(cartList){
    const allCheck = cartList.some(item => !item.checked)
    const checkList = cartList.filter(item => item.checked)
    const counts = checkList.reduce((pre,item)=>pre+item.count,0);
    const price = checkList.reduce((pre,item)=>pre+(item.price*item.count),0);
    this.setData({
      cartGoods:appInstance.globalData.cart,
      allCount:counts,
      allPrice:price,
      allCheck:!allCheck,
    })  
  }
})