Page({ 
 data: {
catname:"二五仔",
 catitems:[ 
{category:"毛色",
 content:" 狸花",},
{category:"性别",
 content:" 母",},
{category:"状况",
 content:" 健康",},
{category:"绝育情况",
 content:" 已绝育",},
{category:"绝育时间",
 content:" 2020-03-16",},
{category:"出生时间",
 content:" 2019-07-01",},
{category:"外貌",
 content:" 狸花加白，似乎有美短的血统",},
{category:"性格",
 content:" 活泼，黏人，每天会疯跑一会然后找地方睡大觉，话痨、很爱叫，智商不高傻傻的",},
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

