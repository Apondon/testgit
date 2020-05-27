<template lang="pug">
    div.goods
        el-row
            el-col(:span='8') 
                div.cortsAndOrder
                    el-tabs
                        el-tab-pane(label="点餐",name="first")
                            Carts(:cartsList="cartsList")
                        el-tab-pane(label="订单",name="second")
                            Order(:ordersList="ordersList")   
            el-col(:span='16')
                div.menu
                    //- 常用商品
                    div.usuallyGoods
                        h1.goodsTitle 常用商品
                        div.goodsContent
                            div.uItems(v-for='o in uGoods',:key='o.id',@click='addToCarts(o)')
                                span.uItemsName {{o.goodname}}
                                span.uItemsPrice  {{`￥${o.price}元`}}
                    //- 商品分类
                    div.splitGoods
                        el-tabs
                            el-tab-pane(label="热菜" )
                                div
                                    div.sGoodsContent
                                        div.goodsItem(v-for='item in hotFoods',:key='item.id',@click='addToCarts(item)')
                                            div.goodsPic 
                                            div.goodsDes 
                                                div.goodsDesName {{item.goodname}}
                                                el-rate(v-model="item.rate",disabled)
                                                div.goodsDesPrice {{`价格: ${item.price}`}}
                            el-tab-pane(label="凉菜" )
                                div
                                    div.sGoodsContent
                                        div.goodsItem(v-for='item in coldFoods',:key='item.id',@click='addToCarts(item)')
                                            div.goodsPic 
                                            div.goodsDes 
                                                div.goodsDesName {{item.goodname}}
                                                div.goodsDesPrice {{`价格: ${item.price}`}}
                            el-tab-pane(label="主食" )
                                div
                                    div.sGoodsContent
                                        div.goodsItem(v-for='item in stampFood',:key='item.id',@click='addToCarts(item)')
                                            div.goodsPic 
                                            div.goodsDes 
                                                div.goodsDesName {{item.goodname}}
                                                div.goodsDesPrice {{`价格: ${item.price}`}}
                            el-tab-pane(label="饮料" )
                                div
                                    div.sGoodsContent
                                        div.goodsItem(v-for='item in drinks',:key='item.id',@click='addToCarts(item)')
                                            div.goodsPic 
                                            div.goodsDes 
                                                div.goodsDesName {{item.goodname}}
                                                div.goodsDesPrice {{`价格: ${item.price}`}}
</template>
<script>
import Carts from '@/components/Carts.vue'
import Order from '@/components/Order.vue'
export default {
    data(){
        return{
            activeName:'', // 购物车和订单的切换
            menuActiveName:'', //商品分类的切换
            // 常用商品
            uGoods:[
                {id:1,goodname:'第一道菜',price:'10'},
                {id:2,goodname:'第二道菜',price:'11'},
                {id:3,goodname:'第三道菜',price:'12'},
                {id:4,goodname:'第四道菜',price:'13'},
                {id:5,goodname:'第五道菜',price:'14'},
                {id:6,goodname:'第六道菜',price:'15'},
                {id:7,goodname:'第七道菜',price:'16'},
                {id:8,goodname:'第八道菜',price:'21'},
                {id:9,goodname:'第九道菜',price:'25'},
                {id:10,goodname:'第十道菜',price:'35'},
            ],
            // 商品分类
            sGoods:[
                {id:1,name:'汉堡',code:'berger'},
                {id:2,name:'主食',code:'staple'},
                {id:3,name:'饮料',code:'drink'}
            ],
            // 分类页签中的商品数据
            hotFoods:[
              {id:'ht001',goodname:'hot1',price:11,rate:3},  
              {id:'ht002',goodname:'hot2',price:11.2,rate:3},
              {id:'ht003',goodname:'hot3',price:16,rate:3}
            ],
            coldFoods:[
                {id:'cd001',goodname:'cold1',price:7,rate:3},
                {id:'cd002',goodname:'cold2',price:8,rate:3},
                {id:'cd003',goodname:'cold3',price:9,rate:3}
            ],
            stampFood:[
                {id:'st001',goodname:'rice',price:3,rate:3},
                {id:'st002',goodname:'noodles',price:6,rate:3},
            ],
            drinks:[
                {id:'dk001',goodname:'beer',price:5,rate:3},
                {id:'dk002',goodname:'soft',price:3.5,rate:3},
                {id:'dk003',goodname:'juice',price:10,rate:3},
            ],
            cartsList:[], //购物车数据
            ordersList:[
                {orderNo:'ODR00001',date:'2020-05-20 15:18',price:100,id:'odr01'},
                {orderNo:'ODR00002',date:'2020-05-21 15:18',price:200,id:'odr02'},
                {orderNo:'ODR00003',date:'2020-05-22 15:18',price:300,id:'odr03'},
            ] // 订单数据
            
        }
    },
    components:{
        Carts,Order
    },
    mounted(){
        // 组件渲染完成之后自动触发
        this.getFoodsData() // 获取菜品数据
        this.getCartsData() // 获取购物车数据
        this.getOrderData() // 获取订单数据
    },
    methods:{
        addToCarts(item){
            this.Axios({
                method:'POST',
                url:'/api/carts/addGoods',
                data:{
                    goodsId:1587949603505
                }
            })
            .then(res => {  // 对请求成功的结果进行处理   res成功的结果
                console.log(res)
            })
            .catch(function(err){ // 对请求失败的结果进行处理   err失败的结果
                console.log(err)
            })
        },
        // 获取菜品数据
        getFoodsData(){
            this.Axios({
                method:'GET', //请求方式
                url:'', // 请求地址
                data:{}, // 请求携带的参数，若该请求不需要携带参数，则可以忽略该属性            
            }).then(res => { //请求成功的回调函数  res请求返回的结果
                console.log(res)
            }).catch(err => { // 请求失败的回调函数   err请求失败的返回结果
                console.log(err)
            })
        },
        // 向购物车中添加商品
        addGoods(){
            this.Axios({
                method:'GET', //请求方式
                url:'', // 请求地址
                data:{}, // 请求携带的参数，若该请求不需要携带参数，则可以忽略该属性            
            }).then(res => { //请求成功的回调函数  res请求返回的结果
                console.log(res)
            }).catch(err => { // 请求失败的回调函数   err请求失败的返回结果
                console.log(err)
            })
        },
        // 查询购物车中商品数据
        getCartsData(){
            this.Axios({
                method:'GET', //请求方式
                url:'', // 请求地址
                data:{}, // 请求携带的参数，若该请求不需要携带参数，则可以忽略该属性            
            }).then(res => { //请求成功的回调函数  res请求返回的结果
                console.log(res)
            }).catch(err => { // 请求失败的回调函数   err请求失败的返回结果
                console.log(err)
            })
        },
        // 删除购物车中的商品数据
        deleGoods(){
            this.Axios({
                method:'GET', //请求方式
                url:'', // 请求地址
                data:{}, // 请求携带的参数，若该请求不需要携带参数，则可以忽略该属性            
            }).then(res => { //请求成功的回调函数  res请求返回的结果
                console.log(res)
            }).catch(err => { // 请求失败的回调函数   err请求失败的返回结果
                console.log(err)
            })
        },
        // 创建订单
        addOrder(){
            this.Axios({
                method:'GET', //请求方式
                url:'', // 请求地址
                data:{}, // 请求携带的参数，若该请求不需要携带参数，则可以忽略该属性            
            }).then(res => { //请求成功的回调函数  res请求返回的结果
                console.log(res)
            }).catch(err => { // 请求失败的回调函数   err请求失败的返回结果
                console.log(err)
            })
        },
        // 查询订单
        getOrderData(){
            this.Axios({
                method:'GET', //请求方式
                url:'', // 请求地址
                data:{}, // 请求携带的参数，若该请求不需要携带参数，则可以忽略该属性            
            }).then(res => { //请求成功的回调函数  res请求返回的结果
                console.log(res)
            }).catch(err => { // 请求失败的回调函数   err请求失败的返回结果
                console.log(err)
            })
        },
        // 删除订单
        deleOrder(){
            this.Axios({
                method:'', //请求方式
                url:'', // 请求地址
                data:{}, // 请求携带的参数，若该请求不需要携带参数，则可以忽略该属性            
            }).then(res => { //请求成功的回调函数  res请求返回的结果
                console.log(res)
            }).catch(err => { // 请求失败的回调函数   err请求失败的返回结果
                console.log(err)
            })
        }
    }
}
</script>
<style lang="scss" scoped>
$h:100%;
@mixin flx($des:column){
    display:flex;
    flex-direction:$des ; //row 横向排列 column 纵向排列
}
.goods{
    height: $h;
    .el-row,.el-col{
        height: $h;
    }
    .cortsAndOrder{
        height: $h;
        background: snow;
        border-right: 1px solid #000;
    }
    .menu{
        @include flx;
        height: $h;
        background: lightgray;
        .usuallyGoods{
            .goodsTitle{
                height: 40px;
                line-height: 40px;
                text-align: left;
                background: white;
                text-indent: 10px;
                font-weight: 600;
                color:rgb(54, 54, 54);
            }
            .goodsContent{
                height: 140px;
                display:flex;
                padding:15px 40px;
                align-items: center;
                flex-wrap: wrap;
                margin-bottom: 15px;

                .uItems{
                    padding:8px 14px;
                    background: #fff;
                    border:1px solid rgb(54, 54, 54);
                    margin:20px 12px;
                    border-radius: 2px;
                    // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                    .uItemsPrice{
                        color:dodgerblue;
                        margin-left: 4px;
                    }
                }
            }
        }
        .splitGoods{
            flex:1;
            .el-tabs{
                @include flx;
                height: $h;
                .el-tabs__content{
                    flex:1;
                }
            }
            
        }
        .sGoodsContent{
            @include flx(row);
        }
        .goodsItem{
            width:200px;
            height: 160px;
            padding:3px;
            box-sizing: border-box;
            background: #fff;
            margin:10px 20px;
            @include flx(row);
            .goodsPic{
                width:74px;
                background: red;
            }
            .goodsDes{
                flex:1;
                .goodsDesName{
                    height: 30px;
                    line-height: 30px;
                    text-align: left;
                    text-indent: 5px;
                    color: red;
                }
                .goodsDesPrice{
                    // height: 40px;
                    line-height: 40px;
                    text-align: left;
                    text-indent: 5px;
                    color:gray;
                }
            }
        }
    }
}
    
</style>