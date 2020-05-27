const mongoose = require('mongoose')
const schema = mongoose.Schema

const Carts = new schema({
    goodsId : Number, // 当前商品在数据库中的唯一标识
    goodname: String, // 商品名
    price : Number, // 商品价格
    num : Number, // 商品数量
})

module.exports = mongoose.model('Carts' , Carts)