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
    }
}
</script>
<style lang="scss" scoped>
.el-table{
    width:90%;
    margin:auto;
}
</style>