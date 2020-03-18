// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
// 功能：创建云函数完成二个功能整型数相加
exports.main=async(event,context)=>{
  // 1：获取用户传入二个数值
  // i j 规定参数名称
  var rs=event.i+event.j;
  // 完成相加运算并且返回 
  return {"sum":rs}
}

// 云函数入口函数
// exports.main = async (event, context) => {
//   const wxContext = cloud.getWXContext()

//   return {
//     event,
//     openid: wxContext.OPENID,
//     appid: wxContext.APPID,
//     unionid: wxContext.UNIONID,
//   }
// }