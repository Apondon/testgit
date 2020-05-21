const Carts = require('../model/carts_schema')

// 查询购物车数据
const queryCartsData = async ctx => {
    ctx.body = '查询购物车数据成功'
}
// 向购物车中增加商品
const addGoods = async function(ctx){
    ctx.body = '新增商品成功'
}
// 从购物车中删除商品
const deleGoods = async ctx => {
    ctx.body = '删除商品成功'
}

module.exports = {
    queryCartsData,
    addGoods,
    deleGoods
}