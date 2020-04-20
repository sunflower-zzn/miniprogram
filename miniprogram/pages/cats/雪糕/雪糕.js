Page({ 
 data: {
catname:"雪糕",
 catitems:[ 
{category:"毛色",
 content:" 奶牛",},
{category:"性别",
 content:" 母",},
{category:"状况",
 content:" 送养",},
{category:"绝育情况",
 content:" 已绝育",},
{category:"绝育时间",
 content:" 2019-11-10",},
{category:"出生时间",
 content:" 2019-03-01",},
{category:"外貌",
 content:" 黑眼罩的样子像极了黑猫警长",},
{category:"性格",
 content:" 刚开始非常怕人，但是在寄养人的感化下放下了防备，变得非常亲人，以至于连出去打针都不凶人了",},
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

