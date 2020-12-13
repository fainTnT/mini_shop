// pages/category/childCpns/y-cate-list/y-cate-list.js
Component({
  properties: {
    categoryList:{
      type:Array,
      value:[]
    }
  },
  data: {
    currentIndex:0
  },
  methods: {
    itemClick(event){
      const index = event.currentTarget.dataset.index;
      this.setData({
        currentIndex:index
      });
      this.triggerEvent('itemsClick',{index})
    }
  }
})
