const Order = require('../model/order_schema')
const Goods = require('../model/goods_schema')

// 新增订单
const addOrder = async ctx => {
    // 获取商品id
    let req = ctx.request.body
    console.log(req)
    // 定义一个变量来收集查询出来的商品数据
    let collectGoods = []
    // 根据商品id去库中查询商品信息
    await Goods.find({goodsId:{$in:req.ids}})
    .then(res => { //查询成功
        console.log(res)
        collectGoods = res
    }).catch(err => { //查询失败
        console.log(err)
        ctx.body = {
            success : false,
            msg:'查询商品数据失败'
        }
    })
    ctx.body='新增成功'
}
// 查看订单
const findOrder = async ctx => {
    ctx.body='查看成功'
}
// 删除订单
const dropOrder = async ctx => {
    ctx.body='删除成功'
}

module.exports ={
    addOrder,findOrder,dropOrder
}