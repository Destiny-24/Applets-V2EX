Page({
  data:{
    replies:[],
    topic:{},
  },
  onLoad(options){
    this.getTopics(options.id)
  },
  getTopics(id){
    wx.request({
      url: 'https://www.v2ex.com/api/topics/show.json?id='+id,
      success:(res)=>{
        this.setData({
          topic:res.data[0]
        })
      }
    })
  },
  //接口无数据
  // getReplies(id){
  //   wx.request({
  //     url: 'https://www.v2ex.com/api/replies/show.json?topic_id='+id,
  //     success:(res)=>{
  //       console.log(res.data)
  //     }
  //   })
  // }
})
