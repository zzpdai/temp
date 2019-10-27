// pages/buy/buy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menulist: [{
        id: 1,
        name: "岩盐芝士系列"
      },
      {
        id: 2,
        name: "醇香心选系列"
      },
      {
        id: 3,
        name: "清新柠檬系列"
      },
      {
        id: 4,
        name: "多口感系列"
      },
      {
        id: 5,
        name: "茶拿铁系列"
      },
      {
        id: 6,
        name: "雪乐冰系列"
      },
      {
        id: 7,
        name: "养乐多系列"
      },
      {
        id: 8,
        name: "招牌奶茶系列"
      },
      {
        id: 9,
        name: "诱人奶盖系列"
      },
      {
        id: 10,
        name: " 泡沫醇茶系列"
      }
    ],
    activeType: 0,


  },
  changeType(e) {
    console.log(e.currentTarget.dataset.type)
    this.setData({
      activeType: e.currentTarget.dataset.type
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})