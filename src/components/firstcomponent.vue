<template>
  <div id="firstcomponent">

    
    <div  class = "header-title"> 
      <div class = "inline-box">当前流域：</div>
      <input type="text" v-bind:value='mgs1' class = "input-box" >
      <div class = "inline-box">查询时刻：</div>
      <input type="text" v-bind:value='mgs2' class = "input-box" >
      <div class = "inline-box">时间段：</div>
      <input type="text" v-bind:value='mgs3' class = "input-box" >
      <div id="submit" > 确s认</div>

    </div>
    <div class = "left-box"></div>
    <div class = "middle-box"></div>
    <div class = "right-box"></div>
  </div>
    
  
</template>
 
<script type="text/javascript">
export default {
   
  
}
</script>
 
<style>
#firstcomponent{
  
  display: block;
  width: 1200px;
  margin: 20px auto;
  border: 1px solid #666;

}
#submit{

  display: inline-block;
  height: 20px;
  font-size: 14px;
 margin-top: 15px;
 background-color:aqua;
}
.header-title{
  display: block;
  height: 50px;
}
.inline-box{
  display: inline-block;
  height: 20px;
  font-size: 14px;
 margin-top: 15px;
  
}
.input-box{
  display: inline-block;
  height: 11px;
  font-size: 14px;
  margin-top:10px;
  background-color: rgb(211, 235, 247);
  width: 60px;
  padding-bottom: 5px;
  
  
}
.left-box{
  display: inline-block;
  width: 200px;
  height: 700px;
  border:1px solid #000;
}
.middle-box{
  display: inline-block;
  width: 700px;
  height: 700px;
  border:1px solid #000;
}
.right-box{
  display: inline-block;
  width: 280px;
  height: 700px;
  border:1px solid #000;
}
</style>

<script>
export default {
  data() {
    return {
      mgs1:"1111",
      mgs2:"2222",
      mgs3:"3333",

    }
  },
}
</script>