/**   用户表
 * 字段	           描述          类型
 * username    用户名      String
 * password     密码         String
 * mobile        手机号       String
 * createDate  创建时间    Number (时间戳)
 * lastUpdate  上次更新时间   Number     
 */

// 1.引入mongoose
// 2.引入mongoose的Schema对象
// 3.对Schema对象实例化创建表结构
// 4.将定义好的Schema暴露给其他模块
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema({
    username: String,
    password: String,
    mobile: String,
    createDate: Number,
    lastUpdate: Number
})

module.exports = 
    mongoose.model('User',user)