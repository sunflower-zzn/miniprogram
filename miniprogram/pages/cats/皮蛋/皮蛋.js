Page({ 
 data: {
catname:"皮蛋",
 catitems:[ 
{category:"昵称",
 content:" 松花蛋",},
{category:"毛色",
 content:" 玳瑁",},
{category:"性别",
 content:" 母",},
{category:"状况",
 content:" 越狱",},
{category:"绝育情况",
 content:" 未绝育",},
{category:"出生时间",
 content:" 2019-06-01",},
{category:"外貌",
 content:" 玳瑁色有狸花纹，耳朵红红的，嘴边糊了一块，丑萌丑萌的",},
{category:"性格",
 content:" 非常皮，需要大猫教育才知道收敛，有时候会嗲叫着撒娇",},
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

