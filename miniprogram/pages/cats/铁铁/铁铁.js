Page({ 
 data: {
catname:"铁铁",
 catitems:[ 
{category:"昵称",
 content:" 软软",},
{category:"毛色",
 content:" 橘白",},
{category:"性别",
 content:" 母",},
{category:"状况",
 content:" 送养",},
{category:"绝育情况",
 content:" 已绝育",},
{category:"绝育时间",
 content:" 2019-11-25",},
{category:"出生时间",
 content:" 2019-03-01",},
{category:"外貌",
 content:" 短毛白，黄眼睛，头顶上的一抹橘一度被学姐认为是擦不掉的脏东西",},
{category:"性格",
 content:" 经历坠楼差点瘫痪的得到农大医生“猫凶”认证的小猫咪铁铁，在学姐的照料下，渐渐恢复健康并变得温柔",},
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

