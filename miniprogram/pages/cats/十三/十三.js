Page({ 
 data: {
catname:"十三",
 catitems:[ 
{category:"毛色",
 content:" 三花",},
{category:"性别",
 content:" 母",},
{category:"状况",
 content:" 送养",},
{category:"绝育情况",
 content:" 已绝育",},
{category:"绝育时间",
 content:" 2019-12-11",},
{category:"出生时间",
 content:" 2019-03-01",},
{category:"外貌",
 content:" 三花",},
{category:"性格",
 content:" 十三是一只性格超级亲人的宝藏小三花，对撸猫新手非常友好，上手即撸，还可以像狗子随叫随到，就连洗澡的时候都不会乱动",},
{category:"编写日期",
 content:" 2020-04-21",},
], 
nums:[
{ num: 1 },
{ num: 2 },
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

