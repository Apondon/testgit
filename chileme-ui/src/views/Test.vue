<template>
    <div>
        <h1>这是一个新的vue组件</h1>
        <div>{{ val1 }}</div>
        <div>{{ val2 }}</div>
        <div>{{ val3 }}</div>
        <div>{{ val4 }}</div>
        <div>{{ val5 }}</div>
        <div>{{ val7.name }}</div>
        <div>{{ val7.age }}</div>
        <div>{{ val7.job }}</div>
        <div>{{ val6[0] }}</div>
        <div>{{ val6[1] }}</div>
        <div>{{ val6[2] }}</div>
        <div v-for="i in val6" :key='i'>{{ i }}</div>
    </div>
</template>
<script>
export default {
    // 绑定数据
    data(){
        return {
            val1 : '字符串',
            val2 : 1,
            val3 : true,
            val4 : undefined,
            val5 : null,
            val6 : ['a','b','c'],
            val7 : {
                name:'张三',
                age:18,
                job:'driver'
            } 
        }
    },
    // 绑定方法
    methods:{

    }
}
</script>
<style lang="scss" scoped>

</style>