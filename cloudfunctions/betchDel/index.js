// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

// 1:删除多条记录
// 1:创建数据库对象
const db=cloud.database();
// 2：添加main函数
exports.main=async(event,context)=>{
  // 删除薪水3000 web1905b记录
  try{
  return await db.collection("web1905b")
  .where({sal:3000})
  .remove();
}catch(e){
  console.log(e)
}
}