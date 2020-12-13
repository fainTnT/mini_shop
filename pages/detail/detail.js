const appInstance = getApp();
import {getGoodsDetail,Goods,Shop,getRecommend} from "../../service/detail"
Page({
  data: {
    id:'',
    swiperImg:[],
    goods:{},
    shop:{},
    detailInfo:{},
    commentInfo: {},
    recommendList:[],
    isShowBack: false,
    topDistance:1000
  },
  onLoad: function (options) {
    this.setData({
      id:options.id
    });
    this._getGoodsDetail(this.data.id);
  },
  onPageScroll(event){
    let flag = event.scrollTop > this.data.topDistance;
    if(flag != this.data.isShowBack){
      this.setData({
        isShowBack:flag
      })
    }
    let flag2 = event.scrollTop > this.data.tabTop;
    if(flag2 != this.data.isShowTab){
      this.setData({
        isShowTab:flag2
      })
    }
  },
  // --------------发送网络请求----------------
  _getGoodsDetail(id){
    getGoodsDetail(id).then(res => {
      this.setData({
        // 获取顶部轮播图的信息
        swiperImg:res.data.result.itemInfo.topImages,
        // 获取商品信息
        goods:new Goods(res.data.result.itemInfo, res.data.result.columns, res.data.result.shopInfo.services),
        // 获取店铺信息
        shop:new Shop(res.data.result.shopInfo),
        // 获取商品信息
        detailInfo:res.data.result.detailInfo,
        // 保存评论信息
        commentInfo:res.data.result.rate.list?res.data.result.rate.list[0]:{}
      })
    }),
    // 获取推荐列表
    getRecommend().then((res, error) => {
      if (error) return
      this.setData({
        recommendList:res.data.data.list
      })
    })
  },
  // 分享
  onShareAppMessage:function(options){
    return {
      title:this.data.goods.title,
      imageUrl:'http:'+this.data.swiperImg[0],
      path:''
    }
  },
  // 加入购物车
  addCartClick(){
    const product = {};
    const gData = appInstance.globalData.cart;
    product.id = this.data.id;
    product.title = this.data.goods.title;
    product.imgUrl = this.data.swiperImg[0];
    product.desc = this.data.goods.desc;
    product.price = this.data.goods.nowPrice;
    product.checked = true;
    let oldGood = gData.find(item => item.id === product.id)
    if(!oldGood){
      product.count = 1;
      gData.push(product);
    }else {
      oldGood.count += 1
    } 
  }
})