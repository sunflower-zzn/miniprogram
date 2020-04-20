Page({ 
 data: {
catname:"雪儿",
 catitems:[ 
{category:"毛色",
 content:" 白猫",},
{category:"性别",
 content:" 母",},
{category:"状况",
 content:" 调养",},
{category:"绝育情况",
 content:" 未绝育",},
{category:"出生时间",
 content:" 2019-11-01",},
{category:"外貌",
 content:" 短毛白，异瞳",},
{category:"性格",
 content:" 调皮，对什么都好奇，能吃，如果人靠近会害怕躲开，但真的摸肚子很容易推倒会呼噜呼噜。和猫能够友好相处，喜欢跟着大猫。",},
{category:"编写日期",
 content:" 2020-04-21",},
], 
nums:[
{ num: 1 },
]},
  onPullDownRefresh:function(){
    wx.stopPullDownRefresh()
  },

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      path: '/pages/index/index?pageId='+this.data.catname,//这里在首页的地址后面添加我们需要传值的标识位pageId以及值123(pageId 这个名字你们可以自己随便乱取 如同一个变量名)
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },

})

