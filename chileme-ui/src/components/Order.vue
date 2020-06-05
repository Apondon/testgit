<template lang="pug">
    div.order
        el-table(:data='ordersList',border)
            el-table-column(prop="orderNo",label="订单号")
            el-table-column(prop="createTime",label="日期")
            el-table-column(prop="price",label="金额")
            el-table-column(prop="methods",label="操作")
                template(slot-scope="scope")
                    el-button(type="text",size="small",@click="deleteHandle(scope.row)") 删除
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props:['ordersList'], //接收父组件绑定给子组件的数据
    methods:{
        deleteHandle(row){
            this.Axios({
                method:'POST', //请求方式
                url:'/api/order/dropOrder', // 请求地址
                data:{
                    orderNo:row.orderNo
                }, // 请求携带的参数，若该请求不需要携带参数，则可以忽略该属性            
            }).then(res => { //请求成功的回调函数  res请求返回的结果
                console.log(res)
                // 更新订单数据
                this.$emit('dingdan')
            }).catch(err => { // 请求失败的回调函数   err请求失败的返回结果
                console.log(err)
            })
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