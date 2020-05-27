const Carts = require('../model/carts_schema')
const Goods = require('../model/goods_schema')
// 查询购物车数据
const queryCartsData = async ctx => {
    // get请求
    let req = ctx.request.query
    console.log(req)
    await Carts.find().then(data => { //等待数据库查询完成执行对应操作
        // 查询成功对应的操作
        console.log(data)
        ctx.body = {
            code:200,
            success:true,
            msg:'查询成功',
            list:data
        }
    }).catch(err => {
        // 查询失败对应的操作
        console.log(err)
        ctx.body = {
            code:200,
            success:false,
            msg:'查询失败'
        }
    })
}
// 向购物车中增加商品
const addGoods = async function(ctx){
    let req = ctx.request.body
    console.log(req)
    let goodsItem = null // 默认没有该商品数据
    await Goods.findOne({goodsId:req.goodsId}) //去商品数据集合中查询商品数据  
    .then(res => { //查询成功后对查询结果res进行操作  res = {} / null  成功查询数据 --->{}   未成功查询数据 ----> null
        // console.log(res) //未查询到结果返回null                  
        // 判断是否查询到了数据
        if(!!res){ // !!res 将res转换为res对应的boolean类型的值                  !!{} == true    !!null == false
            // 数据库中查询到了对应数据
            goodsItem = res
        }else{ // !!null == false
            // 数据库中未查询到对应数据
            ctx.body={
                success:false,
                msg:'该商品在数据库中不存在'
            }
        }
    }).catch(err => { // 查询失败后对查询失败的结果 res进行操作
        // 有可能是数据库挂掉了 导致查询查询操作执行失败
        // console.log(err)   // err是失败的信息
        // 告诉请求方，本次数据库操作出现异常
        ctx.body={
            success:false,
            msg:'数据库操作异常'
        }
    })
    // 1.创建一条数据
    let addOneGood = new Carts({
        goodsId : goodsItem.goodsId, // 当前商品在数据库中的唯一标识
        goodname: goodsItem.goodname, // 商品名
        price : goodsItem.price, // 商品价格
        num : 1
    })
    // 2.将数据插入数据库
    await addOneGood.save() //将生成的数据存入数据库
    .then(res => { //存入成功
        ctx.body ={
            success:true,
            msg:'添加成功'
        }
    })
    .catch(err => { // 存入失败
        ctx.body = {
            success:false,
            msg:'添加失败'
        }
    })
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