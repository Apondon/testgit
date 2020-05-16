<template lang='pug'>
  div.home
    el-row
          el-col(:span='1')
              div.gridlt
                div.menuBtn(@click="jumpTo('/goods')")
                   span.iconfont &#xe662;
                   i 收银
                div.menuBtn
                   span.iconfont &#xe53d;
                   i 会员  
                div.menuBtn(@click="jumpTo('/stockManagement')")
                   span.iconfont &#xe65d;
                   i 库存
                div.menuBtn
                   span.iconfont &#xe635;
                   i 换班
                div.menuBtn
                   span.iconfont &#xe63f;
                   i 报表
                div.menuBtn
                   span.iconfont &#xe65e;
                   i 辅助
                div.menuBtn
                   span.iconfont &#xe602;
                   i 退出                
          el-col(:span='23')
              div.gridrt
                  router-view
</template>

<script>


export default {
  data(){
    return{
      ltBtn:[
        {id:1,icon:'&#xe662;',name:'收银',link:''},
        {id:2,icon:'&#xe53d;',name:'会员',link:''},
        {id:3,icon:'&#xe65d;',name:'库存',link:''},
        {id:4,icon:'&#xe635;',name:'换班',link:''},
        {id:5,icon:'&#xe63f;',name:'报表',link:''},
        {id:6,icon:'&#xe65e;',name:'辅助',link:''},
        {id:7,icon:'&#xe602;',name:'退出',link:''},
      ]
    }
  },
  methods:{
    jumpTo(path){
      this.$router.push(path)
    }
  }
  
}
</script>
<style lang="scss" scoped>
@mixin flx($dec:column){
  display: flex;
  flex-direction:$dec;
}
.home{
  height: 100%;
}
.el-row{
  height: 100%;
}
.el-col{
  height: 100%;
}
.gridlt,.gridrt{
  height: 100%;
  overflow-y: auto;
}
.gridlt{
  @include flx;
  .menuBtn{
    @include flx;
    flex:1;
    &:hover{
      background: rgb(246, 36, 36);
    }
  }
  background: rgb(0, 162, 255);
  color:#fff;
}
</style>
