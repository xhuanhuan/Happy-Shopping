<template>
  <div>
    <input type='text' :placeholder='placeHolder' class='title'/>
  </div>
</template>
<style scoped>
.title{
  width:100%;
  font-size:30px;
  border:0px;
  border-bottom: 3px dashed;
  outline:none;
}
</style>
<script>
export default {
  props:['placeHolder']
}
</script>
