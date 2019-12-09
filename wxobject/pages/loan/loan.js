var app = getApp()
const commercialYears = []       // 商业贷款模块的商贷年限
const commercialYearsTwo = []    // 组合贷款模块的商贷年限
const reserveFundYears = []      // 公积金贷款模块的公积金年限
const reserveFundYearsTwo = []   // 组合贷款模块的公积金年限
for(let i = 1; i <= 30; i++) {   // 遍历商业贷款模块的商贷年限
  let commercialName= i + '年';
  let commercialYear={commercialName: commercialName, value: i}
  commercialYears.push(commercialYear)
}
for(let i = 1; i <= 30; i++) {   // 遍历组合贷款模块的商贷年限
  let commercialNameTwo = i + '年';
  let commercialYearTwo = {commercialNameTwo: commercialNameTwo, value: i}
  commercialYearsTwo.push(commercialYearTwo)
}
for(let i = 1; i <= 30; i++) {   // 遍历公积金贷款模块的公积金年限
  let reserveFundName = i + '年';
  let reserveFundYear = {reserveFundName: reserveFundName, value: i}
  reserveFundYears.push(reserveFundYear)
}
for(let i = 1; i <= 30; i++) {   // 遍历组合贷款模块的公积金年限
  let reserveFundNameTwo = i + '年';
  let reserveFundYearTwo = {reserveFundNameTwo: reserveFundNameTwo, value: i}
  reserveFundYearsTwo.push(reserveFundYearTwo)
}
Page({
  data: { 
    //顶部定义的常量start
    commercialYears: commercialYears,         
    commercialYearsTwo: commercialYearsTwo,    
    reserveFundYears: reserveFundYears,       
    reserveFundYearsTwo: reserveFundYearsTwo, 
    //顶部定义的常量end
    currentData: 0,                       // 默认为商业贷款模块
    formulaModeIndex: 0,                  // 三种贷款模块中计算方式的下标
    variable: null,                       // 判断是哪种贷款方式点击的页面添加的变量
    num: null,                            // 计算结果页面的贷款总额
    allYears: 30,                         // 计算页面中的贷款年限
    houseOne: "none",                     // 计算方式按房屋总价出现的标签
    houseTwo: "block",                    // 计算方式按贷款总额出现的标签
    numReserveFund: null,                 // 计算结果页面接收的公积金金额
    numCommercial: null,                  // 计算结果页面接收的商贷金额
    rateNumOne: null,                     // 计算结果页面等额本息的利息总额
    rateNumTwo: null,                     // 计算结果页面等额本金的利息总额
    interestRateTypeNewIndex: 1,          // 商业贷款模块中利率方式的下标
    commercialYearsIndex: 29,             // 商业贷款模块商贷年限默认选中30年
    lprNumberOne: 4.85,                   // 商业贷款模块中利率方式按最新LPR中LPR的值
    basePointOne: 0,                      // 商业贷款模块中利率方式按最新LPR中基点的值
    wayOne: "block",                      // 商业贷款模块中利率方式按最新LPR出现的标签
    wayTwo: "none",                       // 商业贷款模块中利率方式按旧基准利率出现的标签
    houseMoney: null,                     // 商业贷款模块中按房屋总价计算方式中的房屋总价
    scaleNumberOne: 6.5,                  // 商业贷款模块中按房屋总价计算方式中的货款比例
    interestRateTypeOldIndex: 2,          // 商业贷款模块中利率方式按旧版基准利率方式的下标
    allYearsG: 30,                        // 组合贷款模块中的公积金年限
    allYearsS: 30,                        // 组合贷款模块中的商贷年限
    commercialYearsIndexTwo: 29,          // 组合贷款模块商贷年限默认选中30年
    interestRateTypeNewTwoIndex: 1,       // 组合贷款模块中商贷的利率方式的下标
    reserveFundInterestRateIndex: 0,      // 组合贷款模块中公积金利率方式的下标
    reserveFundYearsIndexTwo: 29,         // 组合贷款模块公积金年限默认选中30年
    houseMoneyTwo: null,                  // 组合贷款模块中按房屋总价计算方式中的房屋总价
    numCommercialOne: null,               // 组合贷款模块中按贷款总额计算方式中的商贷金额
    numCommercialTwo: null,               // 组合贷款模块中按房屋总价计算方式中的商贷金额
    numReserveFundOne: null,              // 组合贷款模块中按贷款总额计算方式中的公积金金额
    numReserveFundTwo: null,              // 组合贷款模块中按房屋总价计算方式中的公积金金额
    wayThree: "block",                    // 组合贷款模块中利率方式按最新LPR出现的标签
    wayFour: "none",                      // 组合贷款模块中利率方式按旧基准利率出现的标签
    lprNumberTwo: 4.85,                   // 组合贷款模块中利率方式按旧基准利率中LPR的值
    basePointTwo: 0,                      // 组合贷款模块中利率方式按旧基准利率中基点的值
    scaleNumberTwo: 6.5,                  // 组合贷款模块中按房屋总价计算方式中的货款比例
    interestRateTypeOldTwoIndex: 2,       // 组合贷款模块中商贷的利率方式按旧的基准利率方式的下标
    reserveFundInterestRateTwoIndex: 0,   // 公积金贷款模块中公积金利率方式的下标
    reserveFundYearsIndex: 29,            // 公积金贷款模块公积金年限默认选中30年
    houseMoneyThree: null,                // 公积金贷款模块中按房屋总价计算方式中的房屋总价
    scaleNumberThree: 6.5,                // 公积金贷款模块中按房屋总价计算方式中的货款比例
    formulaModeArray: ['按贷款总额', '按房屋总价'],    // 三个模块的计算方式的选择
    formulaModeObjectArray: [
      {
        id: 0,
        name: '按贷款总额'
      },
      {
        id: 1,
        name: '按房屋总价'
      }
    ],
    interestRateTypeNewArray: ['按旧版基准利率', '按最新LPR'],    // 商业贷款模块中利率方式按最新LPR方式的选择
    interestRateTypeNewObjectArray: [
      {
        id: 0,
        name: '按旧版基准利率'
      },
      {
        id: 1,
        name: '按最新LPR'
      }
    ],
    interestRateTypeOldArray: ['旧版基准利率9折(4.41%)', '旧版基准利率95折(4.655%)', '旧版基准利率(4.9%)', '旧版基准利率上浮5%(5.145%)', '旧版基准利率上浮10%(5.39%)', '旧版基准利率上浮15%(5.635%)', '旧版基准利率上浮20%(5.88%)', '旧版基准利率上浮25%(6.125%)', '旧版基准利率上浮30%(6.37%)', '旧版基准利率上浮35%(6.615%)', '旧版基准利率上浮40%(6.86%)'],    // 商业贷款模块中利率方式按旧版基准利率方式的选择
    interestRateTypeOldObjectArray: [
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
    interestRateTypeNewTwoArray: ['按旧版基准利率', '按最新LPR'],    // 组合贷款模块中商贷的利率方式按最新LPR方式的选择
    interestRateTypeNewTwoObjectArray: [
      {
        id: 0,
        name: '按旧版基准利率'
      },
      {
        id: 1,
        name: '按最新LPR'
      }
    ],
    reserveFundInterestRateArray: ['最新基准利率(3.25%)', '最新基准利率上浮10%(3.575%)'],    // 组合贷款模块中公积金利率方式选择
    reserveFundInterestRateObjectArray: [
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
    interestRateTypeOldTwoArray: ['旧版基准利率9折(4.41%)', '旧版基准利率95折(4.655%)', '旧版基准利率(4.9%)', '旧版基准利率上浮5%(5.145%)', '旧版基准利率上浮10%(5.39%)', '旧版基准利率上浮15%(5.635%)', '旧版基准利率上浮20%(5.88%)', '旧版基准利率上浮25%(6.125%)', '旧版基准利率上浮30%(6.37%)', '旧版基准利率上浮35%(6.615%)', '旧版基准利率上浮40%(6.86%)'],    // 组合贷款模块中商贷的利率方式按旧的基准利率方式的选择
    interestRateTypeOldTwoObjectArray: [
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
    reserveFundInterestRateTwoArray: ['最新基准利率(3.25%)', '最新基准利率上浮10%(3.575%)'],    // 公积金贷款模块中公积金利率方式的选择
    reserveFundInterestRateTwoObjectArray: [
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
    ]
  },
    // 三个贷款模块公共的方法start
    bindchangeLoanType: function(e) {    // 获取点击的贷款类型
      const that = this;
      that.setData({
        currentData: e.detail.current
      })
    },
    checkCurrent: function(e) {    // 点击切换贷款类型，并获取切换的贷款类型
      const that = this;
      if(that.data.currentData === e.target.dataset.current) {
        return false;
      } else {
        that.setData({
          currentData: e.target.dataset.current
        })
      }
    },
    formulaMode: function(e) {    // 三个贷款模块中的计算方式
      if(e.detail.value == 0) {
        this.setData({
          formulaModeIndex: e.detail.value,
          houseOne: "none",
          houseTwo: "block"
        })
      } else {
        this.setData({
          formulaModeIndex: e.detail.value,
          houseOne: "block",
          houseTwo: "none"
        })
      }
    },
    bindchangeLoanType: function (e) {    // 获取点击的贷款类型
      const that = this;
      that.setData({
        currentData: e.detail.current
      })
    },
    checkCurrent: function (e) {    // 点击切换贷款类型，并获取切换的贷款类型
      const that = this;
      if (that.data.currentData === e.target.dataset.current) {
        return false;
      } else {
        that.setData({
          currentData: e.target.dataset.current
        })
      }
    },
    formulaMode: function (e) {    // 三个贷款模块中的计算方式
      if (e.detail.value == 0) {
        this.setData({
          formulaModeIndex: e.detail.value,
          houseOne: "none",
          houseTwo: "block"
        })
      } else {
        this.setData({
          formulaModeIndex: e.detail.value,
          houseOne: "block",
          houseTwo: "none"
        })
      }
    },
    // 三个模块公共的方法end
    // 商业贷款模块start
    commercialYearsChange: function(e) {    // 商业贷款模块中商贷年限的改变事件
      this.setData({
        commercialYearsIndex: e.detail.value
      })
    },
    blurChangeLpr: function(e) {         // 商业贷款模块中LPR输入值失去焦点事件
      if(!e.detail.value) {
        this.setData({
          lprNumberOne: 0
        })
      } else if(e.detail.value > 0) {
        this.setData({
          lprNumberOne: parseFloat(e.detail.value).toFixed(2),
        })
      } else if(e.detail.value <= 0) {
        wx.showToast({
          title: 'LPR输入值应大于0',
          icon: 'none',
          duration: 2000
        })
      }
    },
    blurChangeBase: function(e) {    // 商业贷款模块中基点输入值失去去焦点事件
      if(!e.detail.value) {
        this.setData({
          basePointOne: 0
        })
      } else {
        this.setData({
          basePointOne: parseFloat(e.detail.value).toFixed(2)
        })
      }
    },
    blurChangeHouse: function(e) {    // 商业贷款模块中的房屋总价失去焦点事件
      if(!e.detail.value) {
        this.setData({
          houseMoney: 0
        })
      } else if(e.detail.value > 0) {

        this.setData({
          houseMoney: parseFloat(e.detail.value).toFixed(2)
        })
      } else if(e.detail.value <= 0) {
        wx.showToast({
          title: '房屋总价应大于0',
          icon: 'none',
          duration: 2000
        })
      }
    },
    blurChangeScale: function(e) {    // 商业贷款模块中的货款比例失去焦点事件
      if(!e.detail.value) {
        this.setData({
          scaleNumberOne: 0
        })
      } else if(e.detail.value > 0) {
        this.setData({
          scaleNumberOne: parseFloat(e.detail.value).toFixed(2)
        })
      } else if(e.detail.value <= 0) {
        wx.showToast({
          title: '货款比例应大于0',
          icon: 'none',
          duration: 2000
        })
      }
    },
    interestRateTypeNew: function(e) {    // 商业贷款中商贷的LPR利率方式
      if(e.detail.value == 1) {
        this.setData({
          interestRateTypeNewIndex: e.detail.value,
          wayOne: "block",
          wayTwo: "none"
        })
      } else {
        this.setData({
          interestRateTypeNewIndex: e.detail.value,
          wayOne: "none",
          wayTwo: "block"
        })
      }
    },
    interestRateTypeOld: function(e) {    // 商业贷款中商贷的旧利率方式
      this.setData({
        interestRateTypeOldIndex: e.detail.value
      })
    },
    allMoneyChangeCommercialTwo: function(e) {    // 商业贷款模块中按贷款总额计算方式中的贷款金额输入事件
      this.setData({
        num: e.detail.value
      })
    },
    clickCalculateOne: function(e) {    // 商业贷款模块中开始计算按钮点击事件
      var pages = getCurrentPages();
      var currPage = pages[pages.length - 1];
      if(currPage.data.formulaModeIndex == 0) {
        const that = this;
        let query = wx.createSelectorQuery();
        let queryNode = query.select(".moneyCommercial");    // 按贷款总额计算方式获取商贷金额的值的标签
        queryNode.fields({
          properties: ['value']    // 获取商贷金额的值
        }, function(e) {
          if(e.value <= 0) {
            wx.showToast({
              title: '商贷金额应大于0万元',
              icon: 'none',
              duration: 2000
            })
          } else {
            wx.navigateTo({
              url: '/pages/loan/result/result'
            });
            that.setData({
              num: e.value,
              commercialYears: commercialYears,
              variable: 1,
              allYears: currPage.data.commercialYearsIndex * 1 + 1
            })
          }
        });
        query.exec(function(res) {
        })
      } else if(currPage.data.formulaModeIndex == 1) {
        const that = this;
        let query = wx.createSelectorQuery();
        let queryNode = query.select(".moneyCommercialTwo");    // 按房屋总价计算方式获取商贷金额的值的标签
        queryNode.fields({
          properties: ['value']
        }, function(e) {
          if(e.value <= 0) {
            wx.showToast({
              title: '商贷金额应大于0万元',
              icon: 'none',
              duration: 2000
            })
          } else {
            wx.navigateTo({
              url: '/pages/loan/result/result'
            });

            that.setData({
              num: e.value,
              commercialYears: commercialYears,
              variable: 1,
              allYears: currPage.data.commercialYearsIndex * 1 + 1
            })
          }
        });
        query.exec(function(res) {
        })
      }
    },
    // 商业贷款模块end
    // 组合贷款模块start
    commercialYearsChangeTwo: function(e) {    // 组合贷款模块中商贷年限的改变事件
      this.setData({
        commercialYearsIndexTwo: e.detail.value,
        allYearsS: e.detail.value * 1 + 1
      })
    },
    reserveFundYearsChangeTwo: function(e) {    // 组合贷款模块中公积金年限的改变事件
      this.setData({
        reserveFundYearsIndexTwo: e.detail.value,
        allYearsG: e.detail.value * 1 + 1
      })
    },
    blurChangeLprTwo: function(e) {    // 组合贷款模块中LPR输入值失去焦点事件
      if(!e.detail.value) {
        this.setData({
          lprNumberTwo: 0
        })
      } else if(e.detail.value > 0) {
        this.setData({
          lprNumberTwo: parseFloat(e.detail.value).toFixed(2)
        })
      } else if(e.detail.value <= 0) {
        wx.showToast({
          title: 'LPR输入值应大于0',
          icon: 'none',
          duration: 2000
        })
      }
    },
    blurChangeBaseTwo: function(e) {    // 组合贷款模块中基点输入值失去焦点事件
      if(!e.detail.value) {
        this.setData({
          basePointTwo: 0
        })
      } else {
        this.setData({
          basePointTwo: parseFloat(e.detail.value).toFixed(2)
        })
      }
    },
    blurChangeLoanAllMoney: function(e) {    // 组合贷款模块中按贷款总额计算方式中的贷款总额失去焦点事件
      var pages = getCurrentPages();
      var currPage = pages[pages.length - 1];
      if(!e.detail.value) {
        this.setData({
          num: 0
        })
      } else if(e.detail.value > 0) {
        this.setData({
          num: parseFloat(e.detail.value).toFixed(2)
        })
      } else if(e.detail.value <= 0) {
        wx.showToast({
          title: '贷款总额应大于0',
          icon: 'none',
          duration: 2000
        })
      }
      const that = this;
      let query = wx.createSelectorQuery();
      let queryNode = query.select(".ReserveFundThree");    // 组合贷款模块中按贷款总计算方式时的公积金金额
      queryNode.fields({
        properties: ['value']
      }, function(e) {
        if(e.value == null || e.value == 0) {
          that.setData({
            numCommercialOne: parseFloat(currPage.data.num).toFixed(2)
          })
        }
      });
      query.exec(function(res) {
      })
    },
    blurChangeReserveFundMoney: function(e) {    // 组合贷款模块中按贷款总额计算方式中的公积金金额失去焦点事件
      var pages = getCurrentPages();
      var currPage = pages[pages.length - 1];

      if(!e.detail.value) {
        this.setData({
          numReserveFundOne: 0
        })
      } else if(e.detail.value > 0 && e.detail.value <= currPage.data.num * 1) {
        this.setData({
          numReserveFundOne: parseFloat(e.detail.value).toFixed(2),
          numCommercialOne: parseFloat(currPage.data.num * 1 - currPage.data.numReserveFundOne * 1).toFixed(2)
        })
      } else if(e.detail.value > currPage.data.num * 1) {
        wx.showToast({
          title: '超过贷款总额',
          icon: 'none',
          duration: 2000
        })
        this.setData({
          numReserveFundOne: 0
        })
      } else if(e.detail.value > 60) {    // 当公积金贷款金额大于60万时
        wx.showToast({
          title: '目前济南公积金贷款金额上限60万',
          icon: 'none',
          duration: 2000
        })
        this.setData({
          numReserveFundOne: 60
        })
      } else if(e.detail.value < 0) {
        wx.showToast({
          title: '公积金金额应不小于0',
          icon: 'none',
          duration: 2000
        })
      }
    },
    blurChangeCommercialMoney: function(e) {    // 组合贷款模块中按贷款总额计算方式中的商贷金额失去焦点事件
      var pages = getCurrentPages();
      var currPage = pages[pages.length - 1];
      if(!e.detail.value) {
        this.setData({
          numCommercialOne: 0
        })
      } else if(e.detail.value > 0 && e.detail.value <= currPage.data.num * 1) {
        this.setData({
          numCommercialOne: parseFloat(e.detail.value).toFixed(2),
          numReserveFundOne: parseFloat(currPage.data.num * 1 - currPage.data.numCommercialOne * 1).toFixed(2)
        })
      } else if(e.detail.value > currPage.data.num * 1) {
        wx.showToast({
          title: '超过贷款总额',
          icon: 'none',
          duration: 2000
        })
        this.setData({
          numCommercialOne: 0
        })
      } else if(e.detail.value < 0) {
        wx.showToast({
          title: '商贷金额应不小于0',
          icon: 'none',
          duration: 2000
        })
      }
    },
    blurChangeHouseThree: function(e) {    // 组合贷款模块中房屋总价失去焦点事件
      var pages = getCurrentPages();
      var currPage = pages[pages.length - 1];
      if(!e.detail.value) {
        this.setData({
          houseMoneyTwo: 0
        })
      } else if(e.detail.value > 0) {
        this.setData({
          houseMoneyTwo: parseFloat(e.detail.value).toFixed(2),
        })
      } else if(currPage.data.numReserveFundTwo == 0 || currPage.data.numReserveFundTwo == null) {
        this.setData({
          numCommercialTwo: currPage.data.houseMoneyTwo * currPage.data.scaleNumberTwo
        })
      } else if(e.detail.value <= 0) {
        wx.showToast({
          title: '房屋总价应大于0',
          icon: 'none',
          duration: 2000
        })
      }
    },
    blurChangeScaleThree: function(e) {    // 组合贷款模块中货款比例失去焦点事件
      var pages = getCurrentPages();
      var currPage = pages[pages.length - 1];
      if(!e.detail.value) {
        this.setData({
          scaleNumberTwo: 0
        })
      } else if(e.detail.value > 0) {
        this.setData({
          scaleNumberTwo: parseFloat(e.detail.value).toFixed(2)
        })
      } else if(currPage.data.numReserveFundTwo == 0 || currPage.data.numReserveFundTwo == null) {
        this.setData({
          numCommercialTwo: currPage.data.houseMoneyTwo * currPage.data.scaleNumberTwo
        })
      } else if(e.detail.value <= 0) {
        wx.showToast({
          title: '货款比例应大于0',
          icon: 'none',
          duration: 2000
        })
      }
    },
    blurChangeReserveFundMoneyTwo: function(e) {    // 组合贷款模块中按房屋总价计算方式中的公积金金额失去焦点事件
      var pages = getCurrentPages();
      var currPage = pages[pages.length - 1];
      if(!e.detail.value) {
        this.setData({
          numReserveFundTwo: 0
        })
      } else if(e.detail.value > 0 && e.detail.value <= currPage.data.houseMoneyTwo * currPage.data.scaleNumberTwo / 10 * 1) {
        this.setData({
          numReserveFundTwo: parseFloat(e.detail.value).toFixed(2),
          numCommercialTwo: parseFloat(currPage.data.houseMoneyTwo * currPage.data.scaleNumberTwo / 10 * 1 - currPage.data.numReserveFundTwo * 1).toFixed(2)
        })
      } else if(e.detail.value > currPage.data.houseMoneyTwo * currPage.data.scaleNumberTwo / 10 * 1) {
        wx.showToast({
          title: '超过贷款总额',
          icon: 'none',
          duration: 2000
        })
        this.setData({
          numReserveFundTwo: 0
        })
      } else if(e.detail.value > 60) {    // 当公积金贷款金额大于60万时
        wx.showToast({
          title: '目前济南公积金贷款金额上限60万',
          icon: 'none',
          duration: 2000
        })
        this.setData({
          numReserveFundTwo: 60
        })
      } else if(e.detail.value < 0) {
        wx.showToast({
          title: '公积金金额应不小于0',
          icon: 'none',
          duration: 2000
        })
      }
    },
    blurChangeCommercialMoneyTwo: function(e) {    // 组合贷款模块中按房屋总价计算方式中的商贷金额失去焦点事件
      var pages = getCurrentPages();
      var currPage = pages[pages.length - 1];
      if(!e.detail.value) {
        this.setData({
          numCommercialTwo: 0
        })
      } else if(e.detail.value > 0 && e.detail.value <= currPage.data.houseMoneyTwo * currPage.data.scaleNumberTwo / 10 * 1) {
        this.setData({
          numCommercialTwo: parseFloat(e.detail.value).toFixed(2),
          numReserveFundTwo: parseFloat(currPage.data.houseMoneyTwo * currPage.data.scaleNumberTwo / 10 * 1 - currPage.data.numCommercialTwo * 1).toFixed(2)
        })
      } else if(e.detail.value > currPage.data.houseMoneyTwo * currPage.data.scaleNumberTwo / 10 * 1) {
        wx.showToast({
          title: '超过贷款总额',
          icon: 'none',
          duration: 2000
        })
        this.setData({
          numCommercialTwo: 0
        })
      } else if(e.detail.value < 0) {
        wx.showToast({
          title: '商贷金额应不小于0',
          icon: 'none',
          duration: 2000
        })
      }
    },
    interestRateTypeNewTwo: function(e) {    // 组合贷款中商贷的LPR利率方式
      if(e.detail.value == 1) {
        this.setData({
          interestRateTypeNewTwoIndex: e.detail.value,
          wayThree: "block",
          wayFour: "none"
        })
      } else {
        this.setData({
          interestRateTypeNewTwoIndex: e.detail.value,
          wayThree: "none",
          wayFour: "block"
        })
      }
    },
    interestRateTypeOldTwo: function(e) {    // 组合贷款中商贷的旧利率方式
      this.setData({
        interestRateTypeOldTwoIndex: e.detail.value
      })
    },
    reserveFundInterestRate: function(e) {    // 组合贷款中的公积金利率
      this.setData({
        reserveFundInterestRateIndex: e.detail.value
      })
    },
    allMoneyChangeCommercialThree: function(e) {    // 组合贷款模块中按贷款总额计算方式中的贷款总额输入事件
      this.setData({
        num: e.detail.value
      })
    },
    allMoneyChangeReserveFund: function(e) {    // 组合贷款模块中按房屋总价计算方式中的公积金金额输入事件
      this.setData({
        numReserveFundTwo: e.detail.value
      })
    },
    allMoneyChangeReserveFundTwo: function(e) {    // 组合贷款模块中按贷款总额计算方式中的公积金金额输入事件
      this.setData({
        numReserveFundOne: e.detail.value
      })
    },
    allMoneyChangeCommercial: function(e) {    // 组合贷款模块中按房屋总价计算方式中的商贷金额输入事件
      this.setData({
        numCommercialTwo: e.detail.value
      })
    },
    allMoneyChangeCommercialFour: function(e) {    // 组合贷款模块中按贷款总额计算方式中的商贷金额输入事件
      this.setData({
        numCommercialOne: e.detail.value
      })
    },
    clickCalculateTwo: function(e) {    // 组合贷款模块中开始计算按钮点击事件
      var pages = getCurrentPages();
      var currPage = pages[pages.length - 1];
      if(currPage.data.formulaModeIndex == 0) {
        const that = this;
        let query = wx.createSelectorQuery();
        let queryNode = query.select(".moneyCommercialThree");    // 按贷款总额计算方式获取商贷金额的值的标签
        queryNode.fields({
          properties: ['value']
        }, function(e) {
          if(e.value <= 0) {
            wx.showToast({
              title: '贷款总额应大于0万元',
              icon: 'none',
              duration: 2000
            })
          } else {
            wx.navigateTo({
              url: '/pages/loan/result/result'
            });
            that.setData({
              num: e.value,
              commercialYearsTwo: commercialYearsTwo,
              reserveFundYearsTwo: reserveFundYearsTwo,
              variable: 2,
              numReserveFund: currPage.data.numReserveFundOne,
              numCommercial: currPage.data.numCommercialOne
            })
          }
        });
        query.exec(function(res) {
        })
      } else if(currPage.data.formulaModeIndex == 1) {
        const that = this;
        let query = wx.createSelectorQuery();
        let queryNode = query.select(".moneyCommercialFour");    // 按房屋总价计算方式获取商贷金额的值的标签
        queryNode.fields({
          properties: ['value']
        }, function(e) {
          if(e.value <= 0) {
            wx.showToast({
              title: '贷款总额应大于0万元',
              icon: 'none',
              duration: 2000
            })
          } else {
            wx.navigateTo({
              url: '/pages/loan/result/result'
            });
            that.setData({
              num: e.value,
              commercialYearsTwo: commercialYearsTwo,
              variable: 2,
              reserveFundYearsTwo: reserveFundYearsTwo,
              numReserveFund: currPage.data.numReserveFundTwo * 1,
              numCommercial: currPage.data.numCommercialTwo * 1
            })
          }
        });
        query.exec(function(res) {
        })
      }
    },
    // 组合贷款模块end
    // 公积金贷款模块start
    reserveFundYearsChange: function(e) {    // 公积金贷款模块中公积金年限的改变事件
      this.setData({
        reserveFundYearsIndex: e.detail.value
      })
    },
    blurChangeHouseTwo: function(e) {    // 公积金贷款模块中的房屋总价失去焦点事件
      if(!e.detail.value) {
        this.setData({
          houseMoneyThree: 0
        })
      } else if(e.detail.value > 0) {
        this.setData({
          houseMoneyThree: parseFloat(e.detail.value).toFixed(2)
        })
      } else if(e.detail.value <= 0) {
        wx.showToast({
          title: '房屋总价应大于0',
          icon: 'none',
          duration: 2000
        })
      }
    },
    blurChangeScaleTwo: function(e) {    // 公积金模块中的货款比例失去焦点事件
      if(!e.detail.value) {
        this.setData({
          scaleNumberThree: 0
        })
      } else if(e.detail.value > 0) {
        this.setData({
          scaleNumberThree: parseFloat(e.detail.value).toFixed(2)
        })
      } else if(e.detail.value <= 0) {
        wx.showToast({
          title: '货款比例应大于0',
          icon: 'none',
          duration: 2000
        })
      }
    },
    reserveFundInterestRateTwo: function(e) {    // 公积金贷款中的公积金利率
      this.setData({
        reserveFundInterestRateTwoIndex: e.detail.value
      })
    },
    showHelpLpr: function(e) {    // LPR后的问号字符点击事件
      wx.showModal({
        title: 'LPR（贷款市场报价利率）',
        showCancel: false,
        confirmText: '知道了',
        confirmColor: 'blue',
        content: '点击左下方帮助按钮获取详情'
      })
    },
    showHelpBase: function(e) {    // 基点后的问号字符点击事件
      wx.showModal({
        title: '基点（浮动值）',
        showCancel: false,
        confirmText: '知道了',
        confirmColor: 'blue',
        content: '自2019年10月8日起，商业贷款利率的计算方式由“贷款基准利率（4.9%）*上浮或下浮比例”改为LPR+基点（1基点=0.01%）'
      })
    },
    allMoneyChangeReserveFundThree: function(e) {    // 公积金贷款模块中按贷款总额计算方式中的公积金金额输入事件
      this.setData({
        num: e.detail.value
      })
    },
    clickCalculateThree: function(e) {    // 公积金贷款模块中开始计算按钮点击事件
      var pages = getCurrentPages();
      var currPage = pages[pages.length - 1];
      if(currPage.data.formulaModeIndex == 0) {
        const that = this;
        let query = wx.createSelectorQuery();
        let queryNode = query.select(".moneyReserveFundOne");    // 按贷款总额计算方式获取公积金金额的值的标签
        queryNode.fields({
          properties: ['value']
        }, function(e) {
          if(e.value <= 0) {
            wx.showToast({
              title: '公积金金额应大于0万元',
              icon: 'none',
              duration: 2000
            })
          } else {
            wx.navigateTo({
              url: '/pages/loan/result/result'
            });
            that.setData({
              num: e.value,
              reserveFundYears: reserveFundYears,
              variable: 3,
              allYears: currPage.data.reserveFundYearsIndex * 1 + 1
            })
          }
        });
        query.exec(function(res) {
        })
      } else if(currPage.data.formulaModeIndex == 1) {
        const that = this;
        let query = wx.createSelectorQuery();
        let queryNode = query.select(".moneyReserveFundTwo");    // 按房屋总价计算方式获取公积金金额的值的标签
        queryNode.fields({
          properties: ['value']
        }, function(e) {
          if(e.value <= 0) {
            wx.showToast({
              title: '公积金金额应大于0万元',
              icon: 'none',
              duration: 2000
            })
          } else {
            wx.navigateTo({
              url: '/pages/loan/result/result'
            });
            that.setData({
              num: e.value,
              reserveFundYears: reserveFundYears,
              variable: 3,
              allYears: currPage.data.reserveFundYearsIndex * 1 + 1
            })
          }
        });
        query.exec(function(res) {
        })
      }
    }
    // 公积金贷款模块end
})