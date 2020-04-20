Page({ 
 data: {
catname:"java",
 catitems:[ 
{category:"毛色",
 content:" 白",},
{category:"性别",
 content:" 母",},
{category:"状况",
 content:" 送养",},
{category:"绝育情况",
 content:" 未绝育",},
{category:"出生时间",
 content:" 2019-07-01",},
{category:"外貌",
 content:" 长毛白，因不明原因失去了左眼，但这丝毫不影响她的美丽！",},
{category:"性格",
 content:" 虽然胆小但不抵触人，性格很温柔，甚至有点逆来顺受（划掉）",},
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

