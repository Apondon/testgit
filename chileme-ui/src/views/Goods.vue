<template lang="pug">
    div.goods
        el-row
            el-col(:span='8') 
                div.cortsAndOrder
                    el-tabs(v-model="activeName")
                        el-tab-pane(label="点餐",name="first")
                            Carts
                        el-tab-pane(label="订单",name="second")
                            Order   
            el-col(:span='16')
                div.menu
                    //- 常用商品
                    div.usuallyGoods
                        h1.goodsTitle 常用商品
                        div.goodsContent
                            div.uItems(v-for='o in uGoods',:key='o.id')
                                span.uItemsName {{o.goodname}}
                                span.uItemsPrice  {{`￥${o.price}元`}}
                    //- 商品分类
                    div.splitGoods
                        el-tabs(v-model="menuActiveName")
                            el-tab-pane(v-for='i in sGoods',:key='i.id',:label="i.name",:name="i.code")
                                div.sGoodsContent
                                    div.goodsItem
                                        div.goodsPic 
                                        div.goodsDes 
                                            div.goodsDesName {{i.name}}
                                            div.goodsDesPrice ￥10元
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
            iGoods:[
              {id:1,goodname:'',price:10}  
            ]
            
        }
    },
    components:{
        Carts,Order
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
                // justify-content: space-around;
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
        .goodsItem{
            width:200px;
            height: 80px;
            padding:3px;
            box-sizing: border-box;
            background: #fff;
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