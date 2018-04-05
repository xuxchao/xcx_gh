// pages/star/star.js
var star = require('../../template/star/star.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**
     * 初始化小星星
     * num:几个小星星
     * colorc:选中的小星星的颜色
     * color:未选中的小星星的颜色
     * size:字体大小
     */
    star.starInit(this, 5, "#ffcd1e", "#eeeeee", "70");
    /**
     * 用于展示几分的小星星
     */
    star.defaultInit(this, 5, 4, "#ffcd1e", "#eeeeee", "70");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})