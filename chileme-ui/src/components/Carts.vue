<template lang="pug">
    div.carts
        el-table(:data='cartsTable',border)
            el-table-column(prop="goodsname",label="商品")
            el-table-column(prop="num",label="数量")
            el-table-column(prop="price",label="金额")
            el-table-column(prop="methods",label="操作")
                //- 1.删除 2.修改数量+ -
        el-divider
        p {{`数量 ${cartsTable.length} 金额 ${total}`}}  
        el-button(type='danger') 清空
        el-button(type='success') 结算 
</template>
<script>
export default {
    data(){
        return{
            cartsTable:[],
        }
    },
    computed:{
        total(){
            let n =0;
            for(const item of this.cartsTable){
                n+= item.num*item.price
            }
            return
        }
    }
}
</script>
<style lang="scss" scoped>
.el-table{
    width:90%;
    margin:auto;
}
</style>