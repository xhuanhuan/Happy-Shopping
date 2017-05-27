<template>
  <div class='bodycontainer'>
    <div class='content' contenteditable="true" @input="messageChanged"></div>
  </div>
</template>


<style scoped>
.bodycontainer{
  flex-grow: 1;
  padding-top:5px;
}
.content{
  min-height:200px;
  height:100%;
  font-size:19px;
  /*width:100%;*/
  outline:0;
  padding:0;
}
</style>

<script>
export default {
  props:['placeHolder'],
  data(){
    return {
      message:'123'
    }
  },
  methods:{
    messageChanged:function(event){
      let str = event.target.textContent
      let len = 0
      let reg = /[^\x00-\xff]/;
      for(let i=0;i<str.length;i++){
        if(reg.test(str[i])){
          len += 1
        }else{
          len+=0.5
        }
      }
      console.log(len)
      this.$emit('textchanged',len)
    }
  }
}
</script>
