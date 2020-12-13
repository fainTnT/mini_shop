// pages/detail/childCpns/y-detail-comment/y-detail-comment.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    commentInfo:{
      type:Object,
      value:{},
    }
  },
  data: {
    timer:'',
    isShowComment:false
  },
  methods: {
    dateFormat(time){
       let timer1 = new Date(time);
       let year = timer1.getFullYear();
       let month = timer1.getMonth()+1;
       let day = timer1.getDate();
       var h = timer1.getHours();
        h = h < 10 ? '0' + h : h;
        let m = timer1.getMinutes();
        m = m < 10 ? '0' + m : m;
        let s = timer1.getSeconds();
        s = s < 10 ? '0' + s : s;
        this.setData({
          timer:year+'/'+month+'/'+day+' '+h+':'+m+':'+s
        })
    }
  },
  observers:{
    commentInfo:function(a){
      // 判断评论是否为空
      if(Object.keys(a).length !== 0){
        let timer = this.properties.commentInfo.created * 1000;
        this.dateFormat(timer);
        this.setData({
          isShowComment:true
        })
      }
    }
  }
})
