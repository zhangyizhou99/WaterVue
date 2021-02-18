<template>
  <div id="app">
    <!-- <my-header></my-header> -->
    
     <div class="shortcut" id = "my-header">
       
        <div class="head_nav_w">
            <div class="head_nav_left">
                <ul>
                    <li>水口洪水预报系统</li>
                    
                </ul>
            </div>
            <div class="head_nav_right">
                <ul>
                    <li><router-link to = "/first" >防洪态势图</router-link></li>
                    
                    <li><router-link to = "/second" >水情查询</router-link></li>
                    
                  
                    <li><router-link to = "/third" >洪水预报</router-link> </li>
                 
                    <li><router-link to = "/first" >数据采集与服务</router-link></li>
                   
                    <li><router-link to = "/first" >基础信息查询</router-link></li>

                    <li><router-link to = "/first" >用户管理</router-link></li>
                      
                
                </ul>
            </div>
        </div>
        
    </div>
  <router-view class = "view"></router-view>
    
  </div>
</template>

<script>
//import { component } from 'vue/types/umd'
import myHeader from "./components/Header"

export default {
  name: 'App',
  components:{
    myHeader
  

  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.shortcut {
        height: 50px;
        background-color: rgb(211, 235, 247);
    }
    
    .head_nav_w {
        width: auto;
        height: 50px;
        margin: 0 auto;
    }
    
    .head_nav_left {
        float: left;
        line-height: 0px;
        height: 30px;
    }
    
    .head_nav_left ul li {
        list-style: none;
        font-size: 16px;
        color: #666;
        float: left;
        line-height: 20px;
    }
    
    .head_nav_left ul li a {
        text-decoration: none;
        color: rgb(102, 102, 102);
    }
    
    .head_nav_right {
        float: right;
        line-height: 0px;
        height:auto;
        display: block;
    }
    
    .head_nav_right ul li {
        padding:1px 10px; /* 设置内边距 */
        display:block;
        list-style: none;
        font-size: 14px;
        line-height: 20px;
        color: #666;
        float: left;
        height: auto;
        border-right:1px solid #999; /* 在左侧加上分隔线 */
 
    }
    
    .head_nav_right ul li a {
        text-decoration: none;
        color: #666;
    }
    

    .head_nav_right ul li span {
        font-size: 15px;
        line-height: 0px;
        color: #666;
    }
</style>
