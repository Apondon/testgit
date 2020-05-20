<template lang="html">
    <div>
        <h1>生命周期</h1>
        <p>{{`val: ${val} countVal: ${countVal}`}}</p>
        <a href='javascript:;' @click="clickHandle">点击</a>
    </div>
</template>
<script>
export default {
    data(){
        return {
            val:0,
        }
    },
    methods:{
        clickHandle(){
            this.val = this.val + 1
        }
    },
    watch:{
        val(newVal,oldVal){
            console.log(newVal)
            console.log(oldVal)
        }

    },
    computed:{
        countVal(){
            return this.val+1
        }
    },
    beforeCreate(){
        console.log('before create')
    },
    created(){
        console.log('created')
    },
    beforeMount(){
        console.log('before mount')
    },
    mounted(){
        console.log('mounted')
    },
    beforeUpdate(){
        console.log('before update')
    },
    updated(){
        console.log('updated')
    },
    beforeDestroy(){
        console.log('before destroy')
    },
    destroyed(){
        console.log('destroy')
    }
}
</script>