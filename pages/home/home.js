import {getHomeMultidata} from "../../service/home"
Page({
  data: {
    banners: [],
    recommends:[],
    titles:["流行","新款","精选"],
    currentIndex:0
  },
  onLoad: function (options) {
    // 获取首页轮播图与推荐的数据并保存
    getHomeMultidata().then(res=>{
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      this.setData({
        banners,
        recommends
      })
    })
  },
  homeTabClick(event){
    this.setData({
      currentIndex:event.detail.index
    })
  }
})