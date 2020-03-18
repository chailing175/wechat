// pages/upload03/upload03.js
const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },
  find:function(){
    // 功能：查询myphoto集合中fileID
    // 1:查询 myphoto
    db.collection("myphoto")
    .get()
    .then(res=>{
      var rows=res.data;
      this.setData({
        list:rows
      });
     

    })
    .catch(err=>{
      console.log(err)
    })
    // 2:保存多个结果保存
  },
  upload:function(){
    // 功能：选择图片上传成功
    // 图片fileID保存myphoto集合中
    // 1：选择图片
    wx.chooseImage({
      count:1,
      sizeType:["original","compressed"],
      sourceType:["album","camera"],
      success: (res)=> {
        // 上传文件路径
        console.log(res.tempFilePaths[0]);
        var file=res.tempFilePaths[0];
        // 2:将图片上传
        var newFile=new Date().getTime()+".jpg";
        wx.cloud.uploadFile({
          // 新文件名
          cloudPath:newFile,
          //旧文件名
          filePath:file,
          // 上传文件路径
          success:(res=>{
            console.log(2)
            console.log(res.fileID)
            // 3:将fileID保存myphoto
            db.collection("myphoto")
            .add({
              data:{
                fileid:res.fileID
              }
            })
            .then(res=>{
              console.log(res)
            })
            .catch(err=>{
              console.log(err)
            })
          })
        })
      },
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