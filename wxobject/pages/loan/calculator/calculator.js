var app = getApp()

const years = []
const years2 = []
const years3 = []
const years4 = []

for (let i = 1; i <= 30; i++) {
  let name = i + '年';
  let year = { name: name, value: i }
  years.push(year)
}
for (let i = 1; i <= 30; i++) {
  let name2 = i + '年';
  let year2 = { name2: name2, value: i }
  years2.push(year2)
}
for (let i = 1; i <= 30; i++) {
  let name3 = i + '年';
  let year3 = { name3: name3, value: i }
  years3.push(year3)
}
for (let i = 1; i <= 30; i++) {
  let name4 = i + '年';
  let year4 = { name4: name4, value: i }
  years4.push(year4)
}

Page({
  data: {
    array: ['按贷款总额', '按房屋总价'],
    objectArray: [
      {
        id: 0,
        name: '按贷款总额'
      },
      {
        id: 1,
        name: '按房屋总价'
      }
    ],
    index: 0,
    array4: ['按贷款总额', '按房屋总价'],
    objectArray: [
      {
        id: 0,
        name: '按贷款总额'
      },
      {
        id: 1,
        name: '按房屋总价'
      }
    ],
    index4: 0,
    array5: ['按贷款总额', '按房屋总价'],
    objectArray: [
      {
        id: 0,
        name: '按贷款总额'
      },
      {
        id: 1,
        name: '按房屋总价'
      }
    ],
    index5: 0,
    currentData: 0,
    years: years,
    yearIndex: 29,
    years2: years2,
    yearIndex2: null,
    years3: years3,
    yearIndex3: 29,
    years4: years4,
    yearIndex4: null,
    num: null,
    num_gongjijin: null,
    num_shangdai: null,
    num_shangdai1: null,
    num_shangdai2: null,
    num_gongjijin1: null,
    num_gongjijin2: null,
    rate_num: null,
    rate_num2: null,
    house_money: null,
    house_money2: null,
    house_money3: null,
    house: "none",
    house2: "block",
    way_one: "block",
    way_two: "none",
    way_three: "block",
    way_four: "none",
    lprNumber: 4.85,
    basePoint: 0,
    lprNumber2: 4.85,
    basePoint2: 0,
    scaleNumber: 6.5,
    scaleNumber2: 6.5,
    scaleNumber3: 6.5,
    all_years: 30,
    all_yearsG: 30,
    all_yearsS: 30,
    variable: null,
    array2: ['按旧版基准利率', '按最新LPR'],
    objectArray2: [
      {
        id: 0,
        name: '按旧版基准利率'
      },
      {
        id: 1,
        name: '按最新LPR'
      }
    ],
    index2: 1,
    array7: ['按旧版基准利率', '按最新LPR'],
    objectArray7: [
      {
        id: 0,
        name: '按旧版基准利率'
      },
      {
        id: 1,
        name: '按最新LPR'
      }
    ],
    index7: 1,
    array3: ['最新基准利率(3.25%)', '最新基准利率上浮10%(3.575%)'],
    objectArray3: [
      {
        id: 0,
        name: '最新基准利率(3.25%)',
        discount: 0.0325
      },
      {
        id: 1,
        name: '最新基准利率上浮10%(3.575%)',
        discount: 0.03575
      }
    ],
    index3: 0,
    array6: ['最新基准利率(3.25%)', '最新基准利率上浮10%(3.575%)'],
    objectArray6: [
      {
        id: 0,
        name: '最新基准利率(3.25%)',
        discount: 0.0325
      },
      {
        id: 1,
        name: '最新基准利率上浮10%(3.575%)',
        discount: 0.03575
      }
    ],
    index6: 0,
    array8: ['旧版基准利率9折(4.41%)', '旧版基准利率95折(4.655%)', '旧版基准利率(4.9%)', '旧版基准利率上浮5%(5.145%)', '旧版基准利率上浮10%(5.39%)', '旧版基准利率上浮15%(5.635%)', '旧版基准利率上浮20%(5.88%)', '旧版基准利率上浮25%(6.125%)', '旧版基准利率上浮30%(6.37%)', '旧版基准利率上浮35%(6.615%)', '旧版基准利率上浮40%(6.86%)'],
    objectArray8: [
      {
        id: 0,
        name: '旧版基准利率9折(4.41%)',
        discount: 0.0441
      },
      {
        id: 1,
        name: '旧版基准利率95折(4.655%)',
        discount: 0.04655
      },
      {
        id: 2,
        name: '旧版基准利率(4.9%)',
        discount: 0.049
      },
      {
        id: 3,
        name: '旧版基准利率上浮5%(5.145%)',
        discount: 0.05145
      },
      {
        id: 4,
        name: '旧版基准利率上浮10%(5.39%)',
        discount: 0.0539
      },
      {
        id: 5,
        name: '旧版基准利率上浮15%(5.635%)',
        discount: 0.05635
      },
      {
        id: 6,
        name: '旧版基准利率上浮20%(5.88%)',
        discount: 0.0588
      },
      {
        id: 7,
        name: '旧版基准利率上浮25%(6.125%)',
        discount: 0.06125
      },
      {
        id: 8,
        name: '旧版基准利率上浮30%(6.37%)',
        discount: 0.0637
      },
      {
        id: 9,
        name: '旧版基准利率上浮35%(6.615%)',
        discount: 0.06615
      },
      {
        id: 10,
        name: '旧版基准利率上浮40%(6.86%)',
        discount: 0.0686
      }
    ],
    index8: 2,
    array9: ['旧版基准利率9折(4.41%)', '旧版基准利率95折(4.655%)', '旧版基准利率(4.9%)', '旧版基准利率上浮5%(5.145%)', '旧版基准利率上浮10%(5.39%)', '旧版基准利率上浮15%(5.635%)', '旧版基准利率上浮20%(5.88%)', '旧版基准利率上浮25%(6.125%)', '旧版基准利率上浮30%(6.37%)', '旧版基准利率上浮35%(6.615%)', '旧版基准利率上浮40%(6.86%)'],
    objectArray9: [
      {
        id: 0,
        name: '旧版基准利率9折(4.41%)',
        discount: 0.0441
      },
      {
        id: 1,
        name: '旧版基准利率95折(4.655%)',
        discount: 0.04655
      },
      {
        id: 2,
        name: '旧版基准利率(4.9%)',
        discount: 0.049
      },
      {
        id: 3,
        name: '旧版基准利率上浮5%(5.145%)',
        discount: 0.05145
      },
      {
        id: 4,
        name: '旧版基准利率上浮10%(5.39%)',
        discount: 0.0539
      },
      {
        id: 5,
        name: '旧版基准利率上浮15%(5.635%)',
        discount: 0.05635
      },
      {
        id: 6,
        name: '旧版基准利率上浮20%(5.88%)',
        discount: 0.0588
      },
      {
        id: 7,
        name: '旧版基准利率上浮25%(6.125%)',
        discount: 0.06125
      },
      {
        id: 8,
        name: '旧版基准利率上浮30%(6.37%)',
        discount: 0.0637
      },
      {
        id: 9,
        name: '旧版基准利率上浮35%(6.615%)',
        discount: 0.06615
      },
      {
        id: 10,
        name: '旧版基准利率上浮40%(6.86%)',
        discount: 0.0686
      }
    ],
    index9: 2,
  },
  // 商贷年限
  yearChange: function (e) {
    console.log(e);
    this.setData({
      yearIndex: e.detail.value,
      // all_years: e.detail.value * 1 + 1
    })
  },
  yearChange2: function (e) {
    this.setData({
      yearIndex2: e.detail.value,
      all_yearsS: e.detail.value * 1 + 1
    })
  },
  yearChange3: function (e) {
    this.setData({
      yearIndex3: e.detail.value,
      // all_years: e.detail.value * 1 + 1
    })
  },
  yearChange4: function (e) {
    this.setData({
      yearIndex4: e.detail.value,
      all_yearsG: e.detail.value * 1 + 1
    })
  },
  ideaChange: function (e) {
    this.setData({
      ideaIndex: e.detail.value
    })
  },
  interest_rate: function (e) {
    // if(e.detail.value>0){
    //   this.setData({
    //     lprNumber: e.detail.value,
    //   })
    // }else if(e.detail.value<=0 || e.detail.value==null){
    //   wx.showToast({
    //     title: 'LPR输入值应大于0',
    //     icon: 'none',
    //     duration: 2000
    //   })
    // }
  },
  // interest_rate2: function (e) {
  //     this.setData({
  //       basePoint: e.detail.value
  //     })
  // },
  blurChange1: function (e) {
    if (!e.detail.value) {
      this.setData({
        lprNumber: 0
      })
    } else if (e.detail.value > 0) {
      this.setData({
        lprNumber: parseFloat(e.detail.value).toFixed(2),
      })
    } else if (e.detail.value <= 0 || e.detail.value == null) {
      wx.showToast({
        title: 'LPR输入值应大于0',
        icon: 'none',
        duration: 2000
      })
    }
  },
  blurChange2: function (e) {
    if (!e.detail.value) {
      this.setData({
        basePoint: 0
      })
    } else {
      this.setData({
        basePoint: e.detail.value,
      })
    }
    // let query = wx.createSelectorQuery();
    // let queryNode = query.select(".input_last");
    // queryNode.fields({
    //   properties: ['value']
    // }, function (ee) {
    //   console.log(ee.value);
    //   ee.value = parseFloat(ee.value).toFixed(2)
    // });
    // query.exec(function (res) {

    // });
  },
  blurChange3: function (e) {
    if (!e.detail.value) {
      this.setData({
        lprNumber2: 0
      })
    } else if (e.detail.value > 0) {
      this.setData({
        lprNumber2: parseFloat(e.detail.value).toFixed(2)
      })
    } else if (e.detail.value <= 0 || e.detail.value == null) {
      wx.showToast({
        title: 'LPR输入值应大于0',
        icon: 'none',
        duration: 2000
      })
    }
  },
  blurChange4: function (e) {
    if (!e.detail.value) {
      this.setData({
        basePoint2: 0
      })
    } else {
      this.setData({
        basePoint2: e.detail.value
      })
    }
  },
  blurChange5: function (e) {
    if (!e.detail.value) {
      this.setData({
        house_money: 0
      })
    } else if (e.detail.value > 0) {
      console.log(e);
      this.setData({
        house_money: parseFloat(e.detail.value).toFixed(2)
      })
    } else if (e.detail.value <= 0 || e.detail.value == null) {
      wx.showToast({
        title: '房屋总价应大于0',
        icon: 'none',
        duration: 2000
      })
    }
  },
  blurChange6: function (e) {
    if (!e.detail.value) {
      this.setData({
        scaleNumber: 0
      })
    } else if (e.detail.value > 0) {
      this.setData({
        scaleNumber: parseFloat(e.detail.value).toFixed(2)
      })
    } else if (e.detail.value <= 0 || e.detail.value == null) {
      wx.showToast({
        title: '货款比例应大于0',
        icon: 'none',
        duration: 2000
      })
    }
  },
  blurChange7: function (e) {
    if (!e.detail.value) {
      this.setData({
        house_money3: 0
      })
    } else if (e.detail.value > 0) {
      console.log(e);
      this.setData({
        house_money3: parseFloat(e.detail.value).toFixed(2)
      })
    } else if (e.detail.value <= 0 || e.detail.value == null) {
      wx.showToast({
        title: '房屋总价应大于0',
        icon: 'none',
        duration: 2000
      })
    }
  },
  blurChange8: function (e) {
    if (!e.detail.value) {
      this.setData({
        scaleNumber3: 0
      })
    } else if (e.detail.value > 0) {
      this.setData({
        scaleNumber3: parseFloat(e.detail.value).toFixed(2)
      })
    } else if (e.detail.value <= 0 || e.detail.value == null) {
      wx.showToast({
        title: '货款比例应大于0',
        icon: 'none',
        duration: 2000
      })
    }
  },
  blurChange9: function (e) {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];
    console.log(currPage.data);
    console.log(e);
    if (!e.detail.value) {
      this.setData({
        num: 0
      })
    } else if (e.detail.value > 0) {
      this.setData({
        num: parseFloat(e.detail.value).toFixed(2)
      })
    } else if (e.detail.value <= 0 || e.detail.value == null) {
      wx.showToast({
        title: '贷款总额应大于0',
        icon: 'none',
        duration: 2000
      })
    }
    const that = this;
    let query = wx.createSelectorQuery();
    let queryNode = query.select(".gongjijin");
    queryNode.fields({
      properties: ['value']
    }, function (e) {
      console.log(e);
      if (e.value == null || e.value == 0) {
        that.setData({
          num_shangdai1: parseFloat(currPage.data.num).toFixed(2)
        })
      }
    });
    query.exec(function (res) {
      console.log(res);
    })

  },
  blurChange10: function (e) {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];
    console.log(currPage.data);
    console.log(e);
    if (!e.detail.value) {
      this.setData({
        num_gongjijin1: 0
      })
    } else if (e.detail.value > 0 && e.detail.value <= currPage.data.num * 1) {
      this.setData({
        num_gongjijin1: parseFloat(e.detail.value).toFixed(2),
        num_shangdai1: parseFloat(currPage.data.num * 1 - currPage.data.num_gongjijin1 * 1).toFixed(2)
      })
    } else if (e.detail.value > currPage.data.num * 1) {
      wx.showToast({
        title: '超过贷款总额',
        icon: 'none',
        duration: 2000
      })
      this.setData({
        num_gongjijin1: 0
      })
    } else if (e.detail.value < 0 || e.detail.value == null) {
      wx.showToast({
        title: '公积金金额应不小于0',
        icon: 'none',
        duration: 2000
      })
    }
  },
  blurChange11: function (e) {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];
    console.log(currPage.data);

    if (!e.detail.value) {
      this.setData({
        num_shangdai1: 0
      })
    } else if (e.detail.value > 0 && e.detail.value <= currPage.data.num * 1) {
      this.setData({
        num_shangdai1: parseFloat(e.detail.value).toFixed(2),
        num_gongjijin1: parseFloat(currPage.data.num * 1 - currPage.data.num_shangdai1 * 1).toFixed(2)
      })
    } else if (e.detail.value > currPage.data.num * 1) {
      wx.showToast({
        title: '超过贷款总额',
        icon: 'none',
        duration: 2000
      })
      this.setData({
        num_shangdai1: 0
      })
    } else if (e.detail.value < 0 || e.detail.value == null) {
      wx.showToast({
        title: '商贷金额应不小于0',
        icon: 'none',
        duration: 2000
      })
    }
  },
  blurChange12: function (e) {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];
    console.log(currPage.data);
    if (!e.detail.value) {
      this.setData({
        house_money2: 0
      })
    } else if (e.detail.value > 0) {
      console.log(e);
      this.setData({
        house_money2: parseFloat(e.detail.value).toFixed(2),
      })
    } else if (currPage.data.num_gongjijin2 == 0 || urrPage.data.num_gongjijin2 == null) {
      this.setData({
        num_shangdai2: currPage.data.house_money2 * currPage.data.scaleNumber2
      })
    } else if (e.detail.value <= 0 || e.detail.value == null) {
      wx.showToast({
        title: '房屋总价应大于0',
        icon: 'none',
        duration: 2000
      })
    }
  },
  blurChange13: function (e) {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];
    console.log(currPage.data);
    if (!e.detail.value) {
      this.setData({
        scaleNumber2: 0
      })
    } else if (e.detail.value > 0) {
      this.setData({
        scaleNumber2: parseFloat(e.detail.value).toFixed(2)
      })
    } else if (currPage.data.num_gongjijin2 == 0 || urrPage.data.num_gongjijin2 == null) {
      this.setData({
        num_shangdai2: currPage.data.house_money2 * currPage.data.scaleNumber2
      })
    } else if (e.detail.value <= 0 || e.detail.value == null) {
      wx.showToast({
        title: '货款比例应大于0',
        icon: 'none',
        duration: 2000
      })
    }
  },
  blurChange14: function (e) {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];
    console.log(currPage.data);
    console.log(e);
    if (!e.detail.value) {
      this.setData({
        num_gongjijin2: 0
      })
    } else if (e.detail.value > 0 && e.detail.value <= currPage.data.house_money2 * currPage.data.scaleNumber2 / 10 * 1) {
      this.setData({
        num_gongjijin2: parseFloat(e.detail.value).toFixed(2),
        num_shangdai2: parseFloat(currPage.data.house_money2 * currPage.data.scaleNumber2 / 10 * 1 - currPage.data.num_gongjijin2 * 1).toFixed(2)
      })
    } else if (e.detail.value > currPage.data.house_money2 * currPage.data.scaleNumber2 / 10 * 1) {
      wx.showToast({
        title: '超过贷款总额',
        icon: 'none',
        duration: 2000
      })
      this.setData({
        num_gongjijin2: 0
      })
    } else if (e.detail.value < 0 || e.detail.value == null) {
      wx.showToast({
        title: '公积金金额应不小于0',
        icon: 'none',
        duration: 2000
      })
    }
  },
  blurChange15: function (e) {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];
    console.log(currPage.data);

    if (!e.detail.value) {
      this.setData({
        num_shangdai2: 0
      })
    } else if (e.detail.value > 0 && e.detail.value <= currPage.data.house_money2 * currPage.data.scaleNumber2 / 10 * 1) {
      this.setData({
        num_shangdai2: parseFloat(e.detail.value).toFixed(2),
        num_gongjijin2: parseFloat(currPage.data.house_money2 * currPage.data.scaleNumber2 / 10 * 1 - currPage.data.num_shangdai2 * 1).toFixed(2)
      })
    } else if (e.detail.value > currPage.data.house_money2 * currPage.data.scaleNumber2 / 10 * 1) {
      wx.showToast({
        title: '超过贷款总额',
        icon: 'none',
        duration: 2000
      })
      this.setData({
        num_shangdai2: 0
      })
    } else if (e.detail.value < 0 || e.detail.value == null) {
      wx.showToast({
        title: '商贷金额应不小于0',
        icon: 'none',
        duration: 2000
      })
    }
  },
  // 生命周期函数--监听页面加载
  onload: function (options) {
  },
  // 获取当前滑块的index
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  // 点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;
    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },
  //计算方式，切换方式
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    if (e.detail.value == 0) {
      this.setData({
        index: e.detail.value,
        house: "none",
        house2: "block"
      })
    } else {
      this.setData({
        index: e.detail.value,
        house: "block",
        house2: "none"
      })
    }
  },
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    if (e.detail.value == 1) {
      this.setData({
        index2: e.detail.value,
        way_one: "block",
        way_two: "none"
      })
    } else {
      this.setData({
        index2: e.detail.value,
        way_one: "none",
        way_two: "block"
      })
    }
  },
  bindPickerChange3: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index3: e.detail.value
    })
  },
  bindPickerChange4: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index4: e.detail.value
    })
  },
  bindPickerChange5: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index5: e.detail.value
    })
  },
  bindPickerChange6: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index6: e.detail.value
    })
  },
  bindPickerChange7: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    if (e.detail.value == 1) {
      this.setData({
        index7: e.detail.value,
        way_three: "block",
        way_four: "none"
      })
    } else {
      this.setData({
        index7: e.detail.value,
        way_three: "none",
        way_four: "block"
      })
    }
  },
  bindPickerChange8: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index8: e.detail.value
    })
  },
  bindPickerChange9: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index9: e.detail.value
    })
  },
  showHelp: function (e) {
    wx.showModal({
      title: 'LPR（贷款市场报价利率）',
      showCancel: false,
      confirmText: '知道了',
      confirmColor: 'blue',
      content: '点击左下方帮助按钮获取详情'
    })
  },
  showHelp2: function (e) {
    wx.showModal({
      title: '基点（浮动值）',
      showCancel: false,
      confirmText: '知道了',
      confirmColor: 'blue',
      content: '自2019年10月8日起，商业贷款利率的计算方式由“贷款基准利率（4.9%）*上浮或下浮比例”改为LPR+基点（1基点=0.01%）'
    })
  },
  all_moneyChange: function (e) {
    this.setData({
      num: e.detail.value
    })
  },
  all_moneyChange6: function (e) {
    this.setData({
      num: e.detail.value
    })
  },
  all_moneyChange2: function (e) {
    this.setData({
      num: e.detail.value
    })
  },
  all_moneyChange10: function (e) {
    this.setData({
      num: e.detail.value
    })
  },
  all_moneyChange3: function (e) {
    this.setData({
      num: e.detail.value
    })
  },
  all_moneyChange7: function (e) {
    this.setData({
      num: e.detail.value
    })
  },
  all_moneyChange4: function (e) {
    this.setData({
      num_gongjijin2: e.detail.value
    })
  },
  all_moneyChange8: function (e) {
    this.setData({
      num_gongjijin1: e.detail.value
    })
  },
  all_moneyChange5: function (e) {
    this.setData({
      num_shangdai2: e.detail.value
    })
  },
  all_moneyChange9: function (e) {
    this.setData({
      num_shangdai1: e.detail.value
    })
  },
  clickbtn_one: function (e) {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];
    console.log(currPage.data.index);

    if (currPage.data.index == 0) {
      const that = this;
      let query = wx.createSelectorQuery();
      let queryNode = query.select(".money");
      queryNode.fields({
        properties: ['value']
      }, function (e) {
        console.log(e);
        if (e.value <= 0) {
          wx.showToast({
            title: '商代金额应大于0万元',
            icon: 'none',
            duration: 2000
          })
        } else {
          wx.navigateTo({
            url: '/pages/commercial/commercial'
          });
          console.log(e);
          that.setData({
            num: e.value,
            years: years,
            variable: 1,
            all_years: currPage.data.yearIndex * 1 + 1

          })
        }
      });
      query.exec(function (res) {
        console.log(res);
      })
    } else if (currPage.data.index == 1) {
      const that = this;
      let query = wx.createSelectorQuery();
      let queryNode = query.select(".money1");
      queryNode.fields({
        properties: ['value']
      }, function (e) {
        console.log(e);
        if (e.value <= 0) {
          wx.showToast({
            title: '商代金额应大于0万元',
            icon: 'none',
            duration: 2000
          })
        } else {
          wx.navigateTo({
            url: '/pages/commercial/commercial'
          });
          console.log(e);
          that.setData({
            num: e.value,
            years: years,
            variable: 1,
            all_years: currPage.data.yearIndex * 1 + 1

          })
        }
      });
      query.exec(function (res) {
        console.log(res);
      })
    }

  },

  clickbtn_two: function (e) {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];
    console.log(currPage.data);

    if (currPage.data.index == 0) {
      const that = this;
      let query = wx.createSelectorQuery();
      let queryNode = query.select(".money5");
      queryNode.fields({
        properties: ['value']
      }, function (e) {
        console.log(e);
        if (e.value <= 0) {
          wx.showToast({
            title: '贷款总额应大于0万元',
            icon: 'none',
            duration: 2000
          })
        } else {
          wx.navigateTo({
            url: '/pages/commercial/commercial'
          });
          console.log(e);
          that.setData({
            num: e.value,
            years2: years2,
            years4: years4,
            variable: 2,
            num_gongjijin: currPage.data.num_gongjijin1,
            num_shangdai: currPage.data.num_shangdai1
          })
        }
      });
      query.exec(function (res) {
        console.log(res);
      })
    } else if (currPage.data.index == 1) {
      const that = this;
      let query = wx.createSelectorQuery();
      let queryNode = query.select(".money6");
      queryNode.fields({
        properties: ['value']
      }, function (e) {
        console.log(e);
        if (e.value <= 0) {
          wx.showToast({
            title: '贷款总额应大于0万元',
            icon: 'none',
            duration: 2000
          })
        } else {
          wx.navigateTo({
            url: '/pages/commercial/commercial'
          });
          console.log(e);
          that.setData({
            num: e.value,
            years2: years2,
            variable: 2,
            years4: years4,
            num_gongjijin: currPage.data.num_gongjijin2 * 1,
            num_shangdai: currPage.data.num_shangdai2 * 1

          })
        }
      });
      query.exec(function (res) {
        console.log(res);
      })
    }
  },

  clickbtn_three: function (e) {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];
    console.log(currPage.data);

    if (currPage.data.index == 0) {
      const that = this;
      let query = wx.createSelectorQuery();
      let queryNode = query.select(".money3");
      queryNode.fields({
        properties: ['value']
      }, function (e) {
        console.log(e);
        if (e.value <= 0) {
          wx.showToast({
            title: '公积金金额应大于0万元',
            icon: 'none',
            duration: 2000
          })
        } else {
          wx.navigateTo({
            url: '/pages/commercial/commercial'
          });
          console.log(e);
          that.setData({
            num: e.value,
            years3: years3,
            variable: 3,
            all_years: currPage.data.yearIndex3 * 1 + 1

          })
        }
      });
      query.exec(function (res) {
        console.log(res);
      })
    } else if (currPage.data.index == 1) {
      const that = this;
      let query = wx.createSelectorQuery();
      let queryNode = query.select(".money4");
      queryNode.fields({
        properties: ['value']
      }, function (e) {
        console.log(e);
        if (e.value <= 0) {
          wx.showToast({
            title: '公积金金额应大于0万元',
            icon: 'none',
            duration: 2000
          })
        } else {
          wx.navigateTo({
            url: '/pages/commercial/commercial'
          });
          console.log(e);
          that.setData({
            num: e.value,
            years3: years3,
            variable: 3,
            all_years: currPage.data.yearIndex3 * 1 + 1

          })
        }
      });
      query.exec(function (res) {
        console.log(res);
      })
    }

  }
})