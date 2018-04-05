// pages/validation/validation.js
const val = require('../../utils/validation.js');
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
  
  },
  /**
   * 提交电话
   */
  submitPhone: function (e) {
    if (val.isPhone(e.detail.value.phone)) {
      wx.showToast({
        title: '电话格式不正确',
        image: '/img/face.png',
        duration: 1000
      })
    }
  },
  /**
   * 提交邮箱
   */
  submitEmail:function(e){
    if (val.isEmail(e.detail.value.email)){
      wx.showToast({
        title: '邮箱格式不正确',
        image: '/img/face.png',
        duration: 1000
      })
    }
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