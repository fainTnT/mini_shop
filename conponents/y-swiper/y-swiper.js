
Component({
  properties: {
    list:{
      type: Array,
      value:[]
    }
  },
  data: {

  },
  methods: {
    swiperLoad(){
      this.triggerEvent('swiperLoad',{})
    }
  },
  externalClasses:['home-class']
})
