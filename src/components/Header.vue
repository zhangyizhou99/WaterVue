<template>

    
     <div class="shortcut" id = "my-header">
       
        <div class="head_nav_w">
            <div class="head_nav_left">
                <ul>
                    <li>水口洪水预报系统</li>
                    
                </ul>
            </div>
            <div class="head_nav_right">
                <ul>
                    <li><a href="#">防洪态势图</a></li>
                    
                    <li><a href="#">水情查询</a></li>
                  
                    <li><a href="#">洪水预报</a> </li>
                 
                    <li><a href="#">数据采集与服务</a></li>
                   
                    <li><a href="#">基础信息查询</a></li>

                    <li><a href="#">用户管理</a></li>
                      
                
                </ul>
            </div>
        </div>
    </div>
    <!-- 顶部导航结束 -->

</template>
<style>
.shortcut {
        height: 31px;
        background-color: #f1f1f1;
    }
    
    .head_nav_w {
        width: 1200px;
        height: 31px;
        margin: 0 auto;
    }
    
    .head_nav_left {
        float: left;
        line-height: 31px
    }
    
    .head_nav_left ul li {
        list-style: none;
        font-size: 12px;
        color: #666;
        float: left;
    }
    
    .head_nav_left ul li a {
        text-decoration: none;
        color: #666;
    }
    
    .head_nav_right {
        float: right;
        line-height: 31px
    }
    
    .head_nav_right ul li {
        list-style: none;
        font-size: 12px;
        color: #666;
        float: left;
    }
    
    .head_nav_right ul li a {
        text-decoration: none;
        color: #666;
    }
    

    .head_nav_right ul li span {
        font-size: 15px;
        line-height: 27px;
        color: #666;
    }
</style>
<script>
export default {
    name:'myHeader',
    
    

}
</script>