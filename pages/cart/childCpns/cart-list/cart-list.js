const appInstance = getApp();
Component({
  properties: {
    cartGoods:{
      type:Array,
      value:[]
    }
  },
  data: {

  },
  methods: {
    goodsClick(event){
      const id = event.currentTarget.dataset.id;
      this.triggerEvent('goodsClick',{id:id})
    }
  }
})
