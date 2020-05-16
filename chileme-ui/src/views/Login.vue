<template lang="pug">
    div.login
        div.loginBox
            div.icon.el-icon-food 
            el-form(:model="form",ref="Form",label-width="100px")
                el-form-item(label="用户名" prop="username")
                    el-input(v-model="form.username")
                el-form-item(label="密码" prop="password")
                    el-input(type='password' v-model="form.password")       
                el-form-item
                    el-button(type="primary" @click="loginHandle") 登录
                    el-button(@click="resetHandle('Form')") 重置
            el-link(@click='jumpRegister') 点击注册        
</template>
<script>
export default {
    data(){
        return{
            form:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        loginHandle(){
            if(!this.form.username){
                this.$notify({
                    title: '提示',
                    message: '请输入正确的用户名',
                    duration: 0
                });
                return false
            }
            if(!this.form.password||this.form.password.length<6||this.form.password.length>20){
                this.$notify({
                    title: '提示',
                    message: '请输入正确的密码',
                    duration: 0
                });
                return false
            }
            this.Axios({ 
                method: 'post',
                url: '/api/user/login',
                data: {
                    username: this.form.username,
                    password: this.form.password,
                },
                withCredentials:true, // 发送携带证书的请求
            }).then(data =>{
                console.log(data)
                if(data.data.flag){ //登陆成功
                    this.$router.push('/')
                }else{ // 登陆失败
                    this.$notify({
                        title: '提示',
                        message: data.data.msg,
                        duration: 0
                    });
                }
            }).catch(err => {
                 this.$notify({
                    title: '提示',
                    message: '登录失败请稍后再试',
                    duration: 0
                });
                console.log(err)
            })
           
        },
        resetHandle(formName){
            this.$refs[formName].resetFields()
        },
        jumpRegister(){
            this.$router.push('/register')
        }
    }
}
</script>
<style lang="scss" scoped>
.login{
    height: 100%;
    background: rgb(245, 245, 245);
    display:flex;
    justify-content: center;
    align-items: center;
    
    .loginBox{
        width:800px;
        height: 450px;
        .icon{
            width: 150px;
            height: 150px;
            line-height: 150px;
            font-size: 120px;
            background: yellow;
            color: #fff;
            border-radius: 50%;
        }
        .el-form{
            width:450px;
            margin:30px auto 10px;
        }
    }
}
.el-notification__title{
    text-align: left;
}
</style>