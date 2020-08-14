Page({
  data:{
    topics:[]
  },
  onLoad(options){
    this.getData(options.id)
  },
  getData(id){
    wx.request({
      url: 'https://www.v2ex.com/api/topics/show.json?node_id='+id,
      success:(res)=>{
        this.setData({
          topics:res.data
        })
      }
    })
  }
})