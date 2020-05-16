/** 商品表
 * 字段          描述              类型 
 * goodsId       商品id           Number
 * goodname      商品名           String
 * price         商品单价         Number  
 * num           商品库存数量     Number
 * desc          商品描述         String
 * recommend     推荐指数         Number    min 0 max 5
 * isDrink       是否是饮料类     Boolean
 * isCombo       是否是套餐       Boolean
 * type          商品类型          String        (拿手菜:hot  ，下酒菜 : cool，美味汤羹 :soup，主食: staple，方便菜肴:quick )
 * isRecommend   是否是推荐菜     Boolean 
 * sailNum       商品销售数量     Number
 * isOff         是否打折         Boolean
 * percent        折扣幅度        Number 
 * material       主要材料        Array        
 * tast           口味            String    (清淡，偏辣，偏甜)			                       */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const goods = new Schema({
    goodsId: Number,
    goodname: String,
    price: Number,
    num: Number,
    desc: String,
    recommend: Number,
    isDrink: Boolean,
    isCombo: Boolean,
    type: String,
    isRecommend: Boolean,
    sailNum: Number,
    isOff: Boolean,
    percent: Number,
    material: Array,
    tast: String
})
module.exports =
    mongoose.model('Goods', goods)