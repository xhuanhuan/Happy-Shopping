<template>
  <div>
  <div class='textfooter'>
    <input @change='imageChanged' type="file" style='display:none;' id='img-upload' multiple accept="image/png, image/jpeg, image/gif, image/jpg"/>
    <label for='img-upload'><Icon :size='size' type="image"></Icon></label>
    <Icon :size='size' type="ios-compose" @click.native="textEdit"></Icon>
    <Icon :size='size' type="more"></Icon>
    <Icon :size='size' type="ios-undo"></Icon>
    <Icon :size='size' type="ios-redo"></Icon>
    <Icon :size='size' type="ios-gear-outline"></Icon>
  </div>
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
  },
  methods:{
    textEdit:function(){
      this.$emit('textEdit')
    },
    imageChanged:function(event){
      console.log(event.target.files)
    }
  }
}
</script>
