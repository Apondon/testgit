/**订单表 
 * 字段         描述           类型       
 *  orderNo     订单号          String
 *  orderType   订单状态         String   (已创建，进行中，已挂起，已完成)
 *  detail      订单包含菜品    Array 
 *  createTime 下单时间            Number
 *  way        支付方式          String
 *  price       订单总金额        Number
 *  payTime     支付时间           Number
 *  createPersonName 下单用户名     String
 *  createPersonId 下单用户       Number 
 * */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const order = new Schema({
    orderNo: String,
    orderType: String,
    detail: Array,
    createTime: Number,
    way: String,
    price: Number,
    payTime: Number,
    createPersonName: String,
    createPersonId: Number
})

module.exports =
    mongoose.model('Order', order)