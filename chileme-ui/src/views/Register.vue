<template lang="pug">
    div.register
        div.registerBox
            div.icon.el-icon-food 
            el-form(:model="form",:rules="rules",ref="Form",label-width="100px")
                el-form-item(label="用户名" prop="username")
                    el-input(v-model="form.username")
                el-form-item(label="密码" prop="password")
                    el-input(type='password' v-model="form.password")  
                el-form-item(label="确认密码" prop="cfm")
                    el-input(type='password' v-model="form.cfm")
                el-form-item(label="手机号" prop="moblie")
                    el-input(v-model="form.moblie")           
                el-form-item
                    el-button(type="primary" @click="registerHandle('Form')") 立即注册
                    el-button(@click="resetHandle('Form')") 重置
            el-link(@click='jumpLogin') 点击登录   
</template>
<script>
export default {
    data(){
        return{
            form:{
                username:'',
                password:'',
                cfm:'',
                moblie:''
            },
            // 表单验证规则
            rules: {
                username:[
                    { required: true, message: '请输入用户名称', trigger: 'blur' },
                    // { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    // { min: 6, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
                ],
                cfm:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
                moblie:[
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                ],
                
            }
        }
    },
    methods:{
        // 注册
        registerHandle(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if(this.form.password !== this.form.cfm){ //两次密码输入不一致
                        // this.$message.error('两次密码输入不一致')
                        this.$message({
                            showClose: true,
                            message: '两次密码输入不一致',
                            type: 'error'
                        });
                        return false
                    }
                    this.Axios({ 
                        method: 'post',
                        url: '/api/user/register',
                        data: {
                            username: this.form.username,
                            password:this.form.password,
                            mobile:this.form.moblie
                        }
                    }).then(data =>{
                        console.log(data)
                        // 若成功
                        if(data.data.flag) { //注册成功
                            this.$router.push('/login')
                        }else{ //注册失败
                            // this.$message.error(data.data.msg)
                            this.$message({
                                showClose: true,
                                message: data.data.msg,
                                type: 'error'
                            });
                        }
                    }).catch(err => {
                        // this.$message.error(`注册失败请稍后再试`)
                        this.$message({
                            showClose: true,
                            message: `注册失败请稍后再试`,
                            type: 'error'
                        });
                    })
                } else {
                    console.log('注册失败!!')
                    return false
                }
            })
        },
        // 重置
        resetHandle(formName){
            this.$refs[formName].resetFields()
        },
        // 立即登录
        jumpLogin(){
            this.$router.push('/login')
        }
    }
}
</script>
<style lang="scss" scoped>
.register{
    height: 100%;
    background: rgb(245, 245, 245);
    display:flex;
    justify-content: center;
    align-items: center;
    .registerBox{
        width:800px;
        height: 650px;
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
</style>