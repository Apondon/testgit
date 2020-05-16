// 1.引入model文件夹中定义好的Schema
const User = require('../model/user_schema')
const Util = require('../utils/util') //引入工具文件
// 2.构造中间件

/* async/await 
    async 异步  放在function关键字之前，声明该函数为一个异步函数   返回一个promise对象
    async function fn(){}
    await 同步 必须和async搭配使用不能单独出现  等待上一个async函数完成之后再执行后面的代码
    async function fn(){
        await .......
    }

*/ 
// 注册
const register = async ctx => {
    let data = ctx.request.body
    console.log(data)
    // 1.验证数据是否合法    账号，密码，手机号（格式/手机号唯一性）
    // 验证账号是否合法
    if( !Util.regUsername.test(data.username) ){ // 若验证不通过
        ctx.body = {
            code:200,
            flag: false,
            type:'format error',
            msg:'账号格式为4到16位（字母，数字，下划线，减号）'
        }
        return  //中断后续代码的执行
    }
    // 验证密码是否合法
    if( !Util.regPassword.test(data.password) ){ // 若验证不通过
        ctx.body = {
            code:200,
            flag: false,
            type:'format error',
            msg:'密码格式6到12位 （字母和数字的组合）'
        }
        return
    }
    // 验证手机号是否合法
    if( !Util.regMobile.test(data.mobile) ){ // 若验证不通过
        ctx.body = {
            code:200,
            flag: false,
            type:'format error',
            msg:'手机号格式错误'
        }
        return
    }
    // 将本条数据插入数据库
    // >1.判断手机号是否被注册过
    let res = await User.find({mobile:data.mobile})

    // >2.判断账号是否重复
    if(res.length){
        ctx.body = {
            code:200,
            flag: false,
            type:'be registered',
            msg:'该账号号已注册'
        }
        return
    }
    // 先实例化表结构并 生成数据
    let user = new User({
        username: data.username,
        password: data.password,
        mobile: data.mobile,
        createDate: new Date().getTime(),
        lastUpdate: new Date().getTime()
    }) 
    // 将数据插入数据库
    await user.save().then(data => {
        // 2.注册成功
        ctx.body = {
            code:200,
            flag: true,
            type:'success',
            msg:'注册成功'
        }
    }).catch(err => {
        console.log(err)
        ctx.body = {
            code:200,
            flag: false,
            type:'error',
            msg:'注册失败'
        }
    })
    
}
/*
const register = async (ctx) => {}
const register = async function(ctx){}
async function register(ctx){}
*/ 
// 登录
const login = async ctx => {
    let data = ctx.request.body
    // 1.验证登录信息是否合法  能否再库中查到该账号，账号信息和密码是否匹配
    let res = await User.findOne({username:data.username})
    console.log(res) // 若查不到数据返回null
    if(!!res){ //若该数据存在
        if(data.password == res.password){ // 登录成功
            console.log(res.mobile)
            ctx.cookies.set('user',res.mobile)
            ctx.body = {
                code:200,
                flag: true,
                type:'success',
                msg:'登录成功'
            }
        }else{ // 登陆失败
            ctx.body = {
                code:200,
                flag: false,
                type:'error',
                msg:'登录密码错误'
            }
        }
    }else{
        ctx.body = {
            code:200,
            flag: false,
            type:'not exist',
            msg:'未找到账号请先注册'
        }
    }  
}

// 3.暴露中间件
module.exports = {
    register,
    login
}