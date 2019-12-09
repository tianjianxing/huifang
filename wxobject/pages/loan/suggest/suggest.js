var app = getApp()
Page({
  data: {
    bgc: "#c3c3c3",
    words: 0,
    wordNum: "none"
  },
  EventInput: function(e) {    // 文本框输入事件
    if (!e.detail.value) {
      this.setData({
        bgc: "#c3c3c3",
        wordNum: "none"
      })
    } else {
      this.setData({
        bgc: "blue",
        words: e.detail.value.length,
        wordNum: "block"
      });
    }
  },
  EventHandle: function(e) {    // 文本框聚焦事件
    var that = this;
    that.setData({
      details: e.detail.value
    });
  },
  btnclick: function() {    // 点击提交按钮事件
    var that = this;
    that.setData({
      details: ''
    });
  },
  onLoad: function (options) {

  },
})