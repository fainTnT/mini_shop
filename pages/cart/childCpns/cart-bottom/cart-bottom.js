// pages/cart/childCpns/cart-bottom/cart-bottom.js
Component({
  properties: {
    cartGoods:{
      type:Array,
      value:[]
    },
    allCount:{
      type:Number,
      value:0
    },
    allPrice:{
      type:Number,
      value:0
    },
    allCheck:{
      type:Boolean,
      value:true
    }
  },
  data: {
    
  },
  methods: {
    allCheckClick(){
      this.triggerEvent('allCheckClick',{isCheck:this.properties.allCheck})
    }
  }
})
