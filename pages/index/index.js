const app = getApp()
Page({
  data:{
    topics:[],
  },
  onLoad(){
    this.getData()
  },
  getData(){
    wx.request({
      url: "https://www.v2ex.com/api/topics/hot.json",
      success:(res)=>{
        console.log(res)
        this.setData({
          topics:res.data
        })
      }
    })
  }
})
