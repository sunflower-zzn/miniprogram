Page({ 
 data: {
catname:"柴柴",
 catitems:[ 
{category:"毛色",
 content:" 三花",},
{category:"性别",
 content:" 母",},
{category:"状况",
 content:" 健康",},
{category:"绝育情况",
 content:" 未绝育",},
{category:"出生时间",
 content:" 2019-08-27",},
{category:"外貌",
 content:" 三花，阴阳脸，白口罩，有狸花纹",},
{category:"性格",
 content:" 柴柴从小就是6个兄弟姐妹里最乖的宝宝，性格特别好，从不抓人咬人，非常非常粘人，喜欢跟人说话，可以让人抱，被抱的时候会一直咕噜，喜欢被摸下巴，喜欢跳到腿上被按摩，即使见到生人也会去蹭蹭，熟悉一两天就可以抱着睡觉",},
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

