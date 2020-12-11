import {getHomeMultidata,getHomeGoodsdata} from "../../service/home"
const type = ['pop','new','sell']
Page({
  data: {
    banners: [],
    recommends:[],
    titles:["流行","新款","精选"],
    currentIndex:0,
    goodsData:{
      pop:{page:0,list:[]},
      new:{page:0,list:[]},
      sell:{page:0,list:[]}
    },
    currentType:'pop',
    isShowBack: false,
    topDistance:1000,
    tabTop:0,
    isShowTab:false
  },
  onLoad: function (options) {
    // 获取首页轮播图与推荐的数据并保存
    this._getHomeMultidata();
    // 获取页面商品数据
    this._getHomeGoodsdata('pop');
    this._getHomeGoodsdata('new');
    this._getHomeGoodsdata('sell');
  },
  onShow:function(options){
    // 获取组件距离顶部的位置
    setTimeout(()=> {
      wx.createSelectorQuery().select('#tabbar').boundingClientRect(rect => {
            this.setData({
              tabTop:rect.top
            })
          }).exec();
    },400)
  },
  // -----------------------发送网络请求的函数----------------------
  _getHomeMultidata(){
    getHomeMultidata().then(res=>{
          const banners = res.data.data.banner.list;
          const recommends = res.data.data.recommend.list;
          this.setData({
            banners,
            recommends
          })
        })
  },
  _getHomeGoodsdata(type){
    const page = this.data.goodsData[type].page + 1
    getHomeGoodsdata(type,page).then(res => {
      const list = res.data.data.list;
      const oldList = this.data.goodsData[type].list;
      oldList.push(...list)
      const listkey = `goodsData.${type}.list`;
      const pagekey = `goodsData.${type}.page`;
      this.setData({
        [listkey]:oldList,
        [pagekey]:page
      })
    })
  },
  // -----------------------事件监听函数----------------------
  homeTabClick(event){
    if(event.detail.index!=this.data.currentIndex){
      wx.pageScrollTo({
        duration: 300,
        scrollTop:this.data.tabTop
      })
      this.setData({
        currentIndex:event.detail.index,
        currentType:type[event.detail.index]
      })
    }
  },
  onReachBottom: function() {
    this._getHomeGoodsdata(this.data.currentType);
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
  }
})