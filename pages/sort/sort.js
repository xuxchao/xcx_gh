// pages/sort/sort.js
const sort = require('../../utils/sort.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noName: [1, 8, 2, 99, 10, 33, 55, 22],
    name: [{ price: 10 }, { price: 5 }, { price: 2 }, { price: 300 }, { price: 200 }, { price: 22 }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      noName1:sort.numSort(1,this.data.noName),
      noName2: sort.numSort(2, this.data.noName),
      name1: sort.numSort(1, this.data.name,"price"),
      name2: sort.numSort(2, this.data.name,"price")
    })
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