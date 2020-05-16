const Goods = require('../model/goods_schema')


// 添加商品
const addGoods = async ctx => {
    const data = ctx.request.body
    const goods = new Goods({
        goodsId: new Date().getTime(),
        goodname: data.goodname,
        price: data.price,
        num: data.num,
        desc: data.desc,
        recommend: data.recommend,
        isDrink: data.isDrink,
        isCombo: data.isCombo,
        type: data.type,
        isRecommend: data.isRecommend,
        sailNum: data.sailNum,
        isOff: data.isOff,
        percent: data.percent,
        material: data.material,
        tast: data.tast
    })
    await goods.save().then(suc => {
        ctx.body = {
            code:200,
            flag:true,
            type:'success',
            msg:'添加成功'
        }
    }).catch(err => {
        console.log(err)
        ctx.body = {
            code:200,
            flag:false,
            type:'error',
            msg:'添加失败'
        }
    })

} 
// 查询商品列表
const getGoodsList = async ctx => {
    await Goods.find().then(data=>{
        ctx.body = {
            code:200,
            flag:true,
            type:'success',
            msg:'查询成功',
            data:data
        }
    }).catch(err => {
        console.log(err)
        ctx.body = {
            code:200,
            flag:false,
            type:'error',
            msg:'查询失败',
            data:[]
        }
    })
} 
// 查询商品详情
const getGoodsItem = async ctx => {
    ctx.body = 'goodsItem'
} 

module.exports = {
    addGoods,
    getGoodsList,
    getGoodsItem
}