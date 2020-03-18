// pages/exam02/exam02.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  upload:function(){
    // 功能：选中一张图片并且上传至云端
    wx.chooseImage({
      count:1,//选中一张图片
      // 图片类型
      sizeType:["original","compressed"],
      // 图片来源
      sourceType:["album","camera"],
      success:(res)=>{
        // 选中图片数组 9张
        var f=res.tempFilePaths[0];
        // 2：上传图片嵌套选中成功回调函数
        wx.cloud.uploadFile({
          // 新文件名称
          cloudPath:new Date().getTime()+".jpg",
          // 选中图片名称
          filePath:f,
          // 上传成功回调函数
          success:(res=>{
            // 云存储中图片路径
            console.log(res.fileID);
          })
        })
      },
    })
    // 1.选中一张图片
   
  },
  handle1:function(){
      // 功能：调运云函数
      wx.cloud.callFunction({
        name:"sum",
        data:{i:1,j:9}
      }).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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