const Order = require('../model/order_schema')
const Goods = require('../model/goods_schema')
const User = require('../model/user_schema')
const Carts = require('../model/carts_schema')

// 新增订单
const addOrder = async ctx => {
    // 获取商品id
    let req = ctx.request.body
    // 获取用户的cookie信息
    let uId = ctx.cookies.get('user') 
    console.log(uId)
    let user = await User.findOne({mobile:uId})
    console.log(user)
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
    // 定义一个计算总价的变量
    let countPrice = 0
    // 遍历要结算的商品的id  [id,id,id]
    for(let i=0;i<req.ids.length;i++){
        // 遍历数据库中查询出来的商品数据 [{id,price},{},{}]
        for(let j=0;j<collectGoods.length;j++){
            // 判断结算商品的id和商品数据id是否匹配
            if(req.ids[i] == collectGoods[j].goodsId){
                // 将匹配的商品价格打印出来
                // console.log(collectGoods[j].price)
                // 商品单价累加
                countPrice += Number(collectGoods[j].price)
            }
        }
    }
    
    /*
    *  orderNo     订单号          String    'ODR'+new Date().getTime()
    *  orderType   订单状态         String   "已完成"
    *  detail      订单包含菜品    Array      req.ids
    *  createTime 下单时间            Number  new Date().getTime()
    *  way        支付方式          String    "cash"
    *  price       订单总金额        Number   countPrice
    *  payTime     支付时间           Number   new Date().getTime()
    *  createPersonName 下单用户名     String  user.username
    *  createPersonId 下单用户       Number    Number(user.mobile)
    */ 
    //    创建一条数据
    let orderItem = new Order({
          orderNo     :   'ODR'+new Date().getTime(),
          orderType   :  "已完成",
          detail      :    req.ids,
          createTime  :  new Date().getTime(),
          way         :   "cash",
          price       :  countPrice,
          payTime     :   new Date().getTime(),
          createPersonName :  user.username,
          createPersonId :   Number(user.mobile),
    })
    // 设置一个标识，用来判断将数据保存到数据库中的操作是否成功 默认false不成功
    let judge = false
    // 将创建好的数据保存到数据库中
    await orderItem.save().then(res => { //将数据保存到数据库成功
        // console.log(res)
        judge = true
    }).catch(err => { //将数据保存到数据库失败
        console.log(err)
        ctx.body = {
            success:false,
            msg:'订单创建失败'
        }
    })
    if(judge){ //若judge为true 说明数据成功保存到数据库中
         // 将结算过商品从购物车中移出
        await Carts.deleteMany().then(res => {
            ctx.body={
                success:true,
                msg:'结算成功'
            }
        }).catch(err=> {
            console.log(err)
            ctx.body={
                success:false,
                msg:'操作失败'
            }
        })
    }
}
// 查看订单
const findOrder = async ctx => {
    await Order.find().then(res => {
        ctx.body={
            success:true,
            list:res
        }
    }).catch(err => {
        console.log(err)
        ctx.body={
            success:false,
            msg:'查询失败'
        }
    })
}
// 删除订单
const dropOrder = async ctx => {
    // 获取要删除的订单的订单号
    let req = ctx.request.body
    await Order.deleteOne({orderNo:req.orderNo}).then(res=>{
        ctx.body={
            success:true,
            msg:'删除成功'
        }
    }).catch(err=>{
        ctx.body={
            success:false,
            msg:'删除失败'
        }
    })
}

module.exports ={
    addOrder,findOrder,dropOrder
}