Page({
  data:{
    nodes:[]
  },
  onLoad(){
    this.getData()
  },
  getData(){
    wx.request({
      url: 'https://www.v2ex.com/api/nodes/all.json',
      success:(res)=>{
        this.setData({
          nodes:res.data
        })
      }
    })
  }
})
