var app = getApp()
Page({
  data: {

  },
  know: function(e) {    // 点击知道了返回上一级页面
    wx.navigateBack({
      delta: 1
    })
  },
  onLoad: function(options) {

  },
})