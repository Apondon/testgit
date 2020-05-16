const Koa = require('koa')
const app = new Koa()
const cfg = require('./config') // 引入配置文件
const mongoose = require('mongoose') //引入mongoose
const KoaBody = require('koa-body') //解析post请求
const router = require('./router/router') // 引入路由(接口)
// 配置跨域 
const KoaCors = require('koa-cors') //引入跨域模块
app.use(KoaCors({
    credentials:true,
    origin:'http://127.0.0.1:8080'
}))  //配置跨域模块

// 配置数据库链接
mongoose.connect(cfg.path)
mongoose.connection.on('error',()=>{
    console.log('数据库链接错误')
})
mongoose.connection.once('open',() => {
    console.log('数据库已连接')
})
app.use(KoaBody()) // 配置koa-body
app.use(router.routes()).use(router.allowedMethods()) // 配置路由
app.listen(cfg.port)
console.log(`server is running at http://127.0.0.1:${cfg.port}`)