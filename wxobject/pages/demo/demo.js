// pages/demo/demo.js
// const date = new Date()
// const years = []
// const months = []
// const days = []

// for (let i = 1990; i <= date.getFullYear(); i++) {
//   years.push(i)
// }

// for (let i = 1; i <= 12; i++) {
//   months.push(i)
// }

// for (let i = 1; i <= 31; i++) {
//   days.push(i)
// }

// Page({
//   data: {
//     years: years,
//     year: date.getFullYear(),
//     months: months,
//     month: 2,
//     days: days,
//     day: 2,
//     value: [9999, 1, 1],
//   },
//   bindChange: function (e) {
//     const val = e.detail.value
//     this.setData({
//       year: this.data.years[val[0]],
//       month: this.data.months[val[1]],
//       day: this.data.days[val[2]]
//     })
//   }
// })

// my-picker.js
// Component({
//   /**
//    * 组件的属性列表
//    */
 
//   properties: {
//     pickerShow: {
//       type: Boolean, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
//       value: false, // 属性初始值（可选），如果未指定则会根据类型选择一个
//       observer(newVal, oldVal, changedPath) {
//         // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
//         // 通常 newVal 就是新设置的数据， oldVal 是旧数据
//       }
//     },
//     isShadow: {
//       type: Boolean,
//       value: true,
//       observer(newVal, oldVal, changedPath) { }
//     },
//     range: {
//       type: Array,
//       value: [1]
//     },
//     title: {
//       type: Array,
//       value: [1]
//     },
//     value: {// picker-view 内的 picker-view-column 当前选择的是第几项
//       type: Array,
//       value: [2, 2]
//     }
//   },
//   /**
//    * 组件的方法列表
//    */
//   methods: {
//     pickerHandler() {// 控制弹出层显示隐藏
//       this.setData({ pickerShow: !this.data.pickerShow })
//     },
//     bindChange(e) {// value 改变时触发 change 事件
//       const val = e.detail.value
//       this.setData({ value: val })
//       let arr = []
//       this.data.range.forEach((v, i) => {
//         arr.push(v[this.data.value[i]])
//       })
//       this.triggerEvent('change', arr, {})
//     },
//     pickerFinish() {// 滚动选择器 - 完成
//       let arr = []
//       this.data.range.forEach((v, i) => {
//         arr.push(v[this.data.value[i]])
//       })
//       this.pickerHandler()
//       this.triggerEvent('finish', arr, {})
//     },
//     pickerCancel() {// 滚动选择器 - 取消
//       this.pickerHandler()
//       this.triggerEvent('cancel', arr, {})
//     }
//   }
// })

// Page({

//   data: {
//     val: [
//       ['大天狗','玉藻前','妖刀姬','美猴王'],
//       ['追月神','姑获鸟','犬神','黑童子'],
//     ],
//     finishHandler(e){
//       console.log(e.detail)
//     },
//     array: ['美国', '中国', '巴西', '日本'],
//     objectArray: [
//       {
//         id: 0,
//         name: '美国'
//       },
//       {
//         id: 1,
//         name: '中国'
//       },
//       {
//         id: 2,
//         name: '巴西'
//       },
//       {
//         id: 3,
//         name: '日本'
//       }
//     ],
//     index: 0,
//     multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
//     objectMultiArray: [
//       [
//         {
//           id: 0,
//           name: '无脊柱动物'
//         },
//         {
//           id: 1,
//           name: '脊柱动物'
//         }
//       ], [
//         {
//           id: 0,
//           name: '扁性动物'
//         },
//         {
//           id: 1,
//           name: '线形动物'
//         },
//         {
//           id: 2,
//           name: '环节动物'
//         },
//         {
//           id: 3,
//           name: '软体动物'
//         },
//         {
//           id: 3,
//           name: '节肢动物'
//         }
//       ], [
//         {
//           id: 0,
//           name: '猪肉绦虫'
//         },
//         {
//           id: 1,
//           name: '吸血虫'
//         }
//       ]
//     ],
//     multiIndex: [0, 0, 0],
//     date: '2016-09-01',
//     time: '12:01',
//     region: ['广东省', '广州市', '海珠区'],
//     customItem: '全部'
//   },
//   bindPickerChange: function (e) {
//     console.log('picker发送选择改变，携带值为', e.detail.value)
//     this.setData({
//       index: e.detail.value
//     })
//   },
//   bindMultiPickerChange: function (e) {
//     console.log('picker发送选择改变，携带值为', e.detail.value)
//     this.setData({
//       multiIndex: e.detail.value
//     })
//   },
//   bindMultiPickerColumnChange: function (e) {
//     console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
//     var data = {
//       multiArray: this.data.multiArray,
//       multiIndex: this.data.multiIndex
//     };
//     data.multiIndex[e.detail.column] = e.detail.value;
//     switch (e.detail.column) {
//       case 0:
//         switch (data.multiIndex[0]) {
//           case 0:
//             data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
//             data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
//             break;
//           case 1:
//             data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
//             data.multiArray[2] = ['鲫鱼', '带鱼'];
//             break;
//         }
//         data.multiIndex[1] = 0;
//         data.multiIndex[2] = 0;
//         break;
//       case 1:
//         switch (data.multiIndex[0]) {
//           case 0:
//             switch (data.multiIndex[1]) {
//               case 0:
//                 data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
//                 break;
//               case 1:
//                 data.multiArray[2] = ['蛔虫'];
//                 break;
//               case 2:
//                 data.multiArray[2] = ['蚂蚁', '蚂蟥'];
//                 break;
//               case 3:
//                 data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
//                 break;
//               case 4:
//                 data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
//                 break;
//             }
//             break;
//           case 1:
//             switch (data.multiIndex[1]) {
//               case 0:
//                 data.multiArray[2] = ['鲫鱼', '带鱼'];
//                 break;
//               case 1:
//                 data.multiArray[2] = ['青蛙', '娃娃鱼'];
//                 break;
//               case 2:
//                 data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
//                 break;
//             }
//             break;
//         }
//         data.multiIndex[2] = 0;
//         break;
//     }
//     console.log(data.multiIndex);
//     this.setData(data);
//   },
//   bindDateChange: function (e) {
//     console.log('picker发送选择改变，携带值为', e.detail.value)
//     this.setData({
//       date: e.detail.value
//     })
//   },
//   bindTimeChange: function (e) {
//     console.log('picker发送选择改变，携带值为', e.detail.value)
//     this.setData({
//       time: e.detail.value
//     })
//   },
//   bindRegionChange: function (e) {
//     console.log('picker发送选择改变，携带值为', e.detail.value)
//     this.setData({
//       region: e.detail.value
//     })
//   }
// })



Page({
  data: {
    hideModal: true, //模态框的状态  true-隐藏  false-显示
    animationData: {},//
  },

  // 显示遮罩层
  showModal: function () {
    var that = this;
    that.setData({
      hideModal: false
    })
    var animation = wx.createAnimation({
      duration: 600,//动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
      timingFunction: 'ease',//动画的效果 默认值是linear
    })
    this.animation = animation
    setTimeout(function () {
      that.fadeIn();//调用显示动画
    }, 200)
  },

  // 隐藏遮罩层
  hideModal: function () {
    var that = this;
    var animation = wx.createAnimation({
      duration: 800,//动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
      timingFunction: 'ease',//动画的效果 默认值是linear
    })
    this.animation = animation
    that.fadeDown();//调用隐藏动画   
    setTimeout(function () {
      that.setData({
        hideModal: true
      })
    }, 720)//先执行下滑动画，再隐藏模块

  },

  //动画集
  fadeIn: function () {
    this.animation.translateY(0).step()
    this.setData({
      animationData: this.animation.export()//动画实例的export方法导出动画数据传递给组件的animation属性
    })
  },
  fadeDown: function () {
    this.animation.translateY(300).step()
    this.setData({
      animationData: this.animation.export(),
    })
  },
})