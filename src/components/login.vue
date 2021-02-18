<template>
    <!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>水库系统登录入口</title>
</head>

<body text-align:center>
    <div class="login-box">
        <div class="login-tab">
            <div id="signup-tab" class="tab-selected">登录</div>
            <div id="signin-tab" class="tab-notselected">注册</div>
        </div>
        <div class=" login-content">
            <div class="sign-up">
                <form>
                    <div id="user">
                        <input v-model="username" type="text" placeholder="请输入账号" style="height: 30px; margin-top: 5px;" required />
                    </div>
                    <div id="password">
                        <input v-model="password" type="password" placeholder="请输入密码" style="height: 30px;  margin-top: 5px;" required/>
                    </div>
                    <!-- <a class="login-button"><input type="submit" id="loginbutton" value="登录" /> </a> -->
                    <input type="submit" class="button" id="loginbutton1" value="登录" />
                </form>


            </div>

            <div class="sign-in">
                <form>

                    <div id="user1">
                        <input type="text" v-model="newusername" placeholder="请输入账号" style="height: 30px;  margin-top: 5px;" required />
                    </div>

                    <div id="password1">
                        <input type="password" v-model="newpassword" placeholder="请输入密码" style="height: 30px;  margin-top: 5px;" required/>
                    </div>

                    <input type="submit" class="button" id="loginbutton2" value="注册" />
                </form>
            </div>



        </div>

    </div>

</body>

</html>

</template>

<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>

<script>
import {setCookie,getCookie} from '../../assets/js/cookie.js'

 export default{
        data(){
            return{
                username: '',
                password: '',
                newUsername: '',
                newPassword: ''
            }
        },

             
        mounted(){
  /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
    if(getCookie('username')){
        this.$router.push('/home')
    }
  }
    }
    
    $(document).ready(function() {

        $(".sign-in").hide();

    })
    $("#signup-tab").click(function() {
        $(".sign-up").show();
        $(".sign-in").hide();
        // $("#signup-tab").css('color', '#5a98de');
        // $("#signin-tab").css('color', '#999');
        $("#signup-tab").attr("class", "tab-selected");
        $("#signin-tab").attr("class", "tab-notselected");

    })

    $("#signin-tab").click(function() {
        $(".sign-in").show();
        $(".sign-up").hide();
        // $("#signin-tab").css('color', '#5a98de');
        // $("#signup-tab").css('color', '#999');
        $("#signup-tab").attr("class", "tab-notselected");
        $("#signin-tab").attr("class", "tab-selected");

    })

    // $("#signup-tab").click(function() {
    //     $("#sign-up").show();
    //     $("#sign-in").hide();

    // })

    // $("#signin-tab").click(function() {
    //     $("#sign-in").show();
    //     $("#sign-up").hide();

    // })

</script>
<style>
    .login-box {
        width: 334px;
        height: 387px;
        margin: 0 auto
    }
    
    .login-tab {
        width: 300px;
        height: 50px;
        margin: 0 auto
    }
    
    #signup-tab {
        float: left;
        width: 50%;
        font-size: 16px;
        line-height: 50px;
        text-align: center;
    }
    
    #signin-tab {
        float: right;
        width: 50%;
        font-size: 16px;
        line-height: 50px;
        text-align: center;
    }
    
    .tab-selected {
        color: #5a98de;
        border-bottom: #5a98de 1px solid;
    }
    
    .tab-notselected {
        color: #999;
    }
    
    .login-content {
        margin-top: 20px;
    }
    
    .sign-in {
        margin: 2px auto;
        text-align: center;
    }
    
    .sign-up {
        margin: 2px auto;
        text-align: center;
    }
    
    .login-button {
        width: 115px;
        height: 35px;
        line-height: 35px;
        border: none;
        font-size: 18px;
        font-weight: 700;
        color: #fff;
        cursor: pointer;
    }
    
    input {
        margin: 10px 0;
        width: 200px;
    }
    
    input:focus {
        border-width: 0 0 1px 0;
        outline: 0;
    }
    
    input:required:invalid {
        border-width: 0 0 1px 0;
        background-position: right center;
        background-repeat: no-repeat;
        box-shadow: none;
        /* 兼容FF13以前版本 */
        -moz-box-shadow: none;
    }
    /*有效输入时的样式*/
    
    input:required:valid {
        border-width: 0 0 1px 0;
        background-position: right center;
        background-repeat: no-repeat;
        border-color: #5a98de;
        box-shadow: none;
        /* 兼容FF13以前版本 */
        -moz-box-shadow: none;
    }
    
    .button {
        width: 100px;
        height: 30px;
        background-color: white;
        border-width: 0.5px;
        color: black;
        margin-top: 20px;
    }
    
    .button:hover {
        border-width: 3px;
    }
</style>