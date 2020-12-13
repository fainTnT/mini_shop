import {getCategoryData,getSubcategory} from '../../service/category'
Page({
  data: {
    categoryList: [],
    subCategoryList:[],
  },
  onLoad: function (options) {
    this._getCategory()
  },
  _getCategory(){
    // 获取分类列表信息
    getCategoryData().then((res)=>{
      this.setData({
        categoryList:res.data.data.category.list
      })
      getSubcategory(this.data.categoryList[0].maitKey).then((res)=>{
        this.setData({
          subCategoryList:res.data.data.list
        })
      });
    });
  },
  cateItemClick(a){
    const index = a.detail.index;
    getSubcategory(this.data.categoryList[index].maitKey).then((res)=>{
      this.setData({
        subCategoryList:res.data.data.list
      })
    });
  }
})