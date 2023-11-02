<!-- <template>
  <div id="app" class style="font-family: 'Nunito', sans-serif;"> 
    <back-header />
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
-->
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&family=Open+Sans&display=swap');


.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active{
  transition: opacity 2.5s;
}

.fade-enter-to {
  opacity: 1;
}

.thumbnail-pic img{
      width: 150px;
    }


  .style{
    font-family: 'Opens Sans';
  }

  .bg{
    background: linear-gradient(180deg,  #ceb7b7);
    border-radius: 5px 5px 5px 5px;
    width: 80%;
    height: 100%;
    margin-left: 200px;
    margin-top: 50px;
    padding: 40px;
}


 .bg1{
    background: linear-gradient(180deg,  #ceb7b7);
    border-radius: 5px 5px 5px 5px;
    width: 80%;
    height: 100%;
    margin-left: 200px;
    margin-top: 50px;
    padding: 40px;
}


.bg2{
    background: linear-gradient(180deg,  #ceb7b7);
    border-radius: 5px 5px 5px 5px;
    width: 80%;
    height: 100%;
    margin-left: 200px;
    margin-top: 50px;
    padding: 40px;
}


.bg3{
    background: linear-gradient(180deg,  #ceb7b7);
    border-radius: 5px 5px 5px 5px;
    width: 80%;
    height: 100%;
    margin-left: 200px;
    margin-top: 50px;
    padding: 40px;
}

.bg4{
    background: linear-gradient(180deg, #ceb7b7);
    border-radius: 5px 5px 5px 5px;
    margin-right: 85px;
    width: 70%;
    height: 70%;
}


.box{
  width: 100%;
  margin: 0 auto;
  padding: 15px;
  border: 1px;

  background: rgb(245, 245, 245);
  border-radius: 5px 5px 5px 5px; 
  margin-bottom: 15px; 
}

.box-1{
  width: 100%;
  margin: 0 auto;
  padding: 15px;
  border: 1px;
  background: white;
  border-radius: 5px 5px 5px 5px; 
  margin-bottom: 15px; 
  color: white; 
}


.box1{
  width: 100%;
  margin: 0 auto;
  padding: 15px;
  border: 1px;
  background: white;
  border-radius: 5px 5px 5px 5px;
  margin-bottom: 15px; 
}



.box2{
  width: 100%;
  margin: 0 auto;
  padding: 15px;
  border: 1px;
  background: white;
  border-radius: 5px 5px 5px 5px; 
  margin-bottom: 15px; 
}


.box3{
  width: 100%;
  margin: 0 auto;
  padding: 15px;
  border: 1px;
  background: white;
  border-radius: 5px 5px 5px 5px; 
  margin-bottom: 15px; 
}

t{
   border-radius: 20px 20px 20px 20px;
    margin: 30px;
}


</style> 
<template>
  <div id="app">
    <div class="wrapper d-flex align-items-stretch">
      <back-navbar />
      <div id="content" class="p-4 p-md-5 pt-5">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>