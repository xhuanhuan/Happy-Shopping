<template>
  <div>
    <div class='left'>
      <router-link to='/home'>
         <Icon :size='size' type="ios-arrow-back"></Icon>
      </router-link>
      <span class='text' >&nbsp;&nbsp;{{n}}字</span>
    </div>
    <span class='text right' >发布</span>
    <div style='clear both'></div>
  </div>
</template>

<style scoped>
.text{
  font-size:17px;
}
.right{
  float:right;
}
.left{
  float:left;
}
</style>

<script>
export default {
  props:['n'],
  data(){
    return {
      size:17
    }
  }

}
</script>
