<template lang="pug">
    div.order
        el-table(:data='orderTable',border)
            el-table-column(prop="orderNo",label="订单号")
            el-table-column(prop="date",label="日期")
            el-table-column(prop="price",label="金额")
</template>
<script>
export default {
    data(){
        return{
            orderTable:[]
        }
    },
    props:['ordersList'], //接收父组件绑定给子组件的数据
    mounted(){
        console.log(this.ordersList)
        // 将接收到的数据赋值给定义好的存放订单数据的数组
        this.orderTable = this.ordersList 

    }
}
</script>
<style lang="scss" scoped>
.el-table{
    width:90%;
    margin:auto;
}
</style>