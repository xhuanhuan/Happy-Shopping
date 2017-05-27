<template>
  <div class='textfooter'>
    <Icon :size='size' type="image"></Icon>
    <Icon :size='size' type="ios-compose"></Icon>
    <Icon :size='size' type="more"></Icon>
    <Icon :size='size' type="ios-undo"></Icon>
    <Icon :size='size' type="ios-redo"></Icon>
    <Icon :size='size' type="ios-gear-outline"></Icon>
  </div>
</template>

<style scoped>
.textfooter{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>

<script>
export default {
  props:['placeHolder'],
  data(){
    return {
      size:25
    }
  }
}
</script>
