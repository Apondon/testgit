<template lang="pug">
    div.carts
        el-table(:data='cartsList',border)
            el-table-column(prop="goodname",label="商品")
            el-table-column(prop="num",label="数量")
            el-table-column(prop="price",label="金额")
            el-table-column(prop="methods",label="操作")
                template(slot-scope="scope")
                    el-button(type="text",size="small",@click="deleteHandle(scope.row)") 删除
        el-divider  
        el-button(type='danger',@click="deleteAllGoods") 清空
        el-button(type='success') 结算 
</template>
<script>
export default {
    data(){
        return{  
        }
    },
    props:['cartsList'],
    methods:{
        deleteHandle(row){
            console.log(row)
            console.log('----子组件---')
            this.$emit('dianji',row)
        },
        deleteAllGoods(){
            this.Axios({
                method:'GET',
                url:'/api/carts/deleteAll'
            }).then(res => {
                console.log(res)
                this.$emit('shanchu')
            }).catch(err => {
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