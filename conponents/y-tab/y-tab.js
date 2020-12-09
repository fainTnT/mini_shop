// components/tabbar/tabbar.js
Component({
  data:{
    currentIndex: 0
  },
  properties: {
    tabTitle:{
      type: Array,
      value:[]
    }
  },
  methods: {
    tabbarClick(event){
      this.setData({
        currentIndex:event.currentTarget.dataset.currentindex
      });
      this.triggerEvent('tabClick',{index:this.data.currentIndex})
    }
  }
})
