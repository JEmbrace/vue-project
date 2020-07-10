<template>
    <div class="login">
        <img class="logo" src="../../assets/images/logo.png" />
        <el-form ref="loginForm" :model="loginForm">
            <el-form-item>
                <el-input placeholder="请输入密码" v-model="loginForm.name">
                    <template slot="prepend"><i class="el-icon-key"></i></template>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-input placeholder="请输入用户名" v-model="loginForm.password">
                    <template slot="prepend"><i class="el-icon-user"></i></template>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="submit-btn" @click="submit" type="primary" plain round>登录</el-button>
            </el-form-item>
        </el-form>
      
    </div>
</template>
<script>
export default {
    name: 'Login',
    data(){
        return {
            loginForm: {
                name: '',
                password: ''
            }
        }
    },
    methods: {
        submit: function () {
            this.$router.push('/index')
        }
    }
}
</script>
<style lang="scss">
    .login{
        .el-input-group{
            width: 40%;
            margin: 0px 20px;
        }
        .submit-btn{
            width: 40%;
        }
    }
</style>
<style lang="scss" scoped>
    .login{
        height: 100%;
        text-align: center;
        background: url(../../assets/images/logo-bg.png) no-repeat center;
        background-size: 550px;
        background-position: left bottom;
        .logo{
            padding: 70px 0px;
        }
    }
</style>