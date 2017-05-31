<template>
  <form class='container' @focusout='focusout'>
    <text-header :n='number'></text-header>
    <text-title place-holder='请输入文章标题'></text-title>
    <text-body ref='body' @textchanged='number=Math.floor($event)'></text-body>
    <text-footer @addElement='addElement'></text-footer>
  </form>
</template>

<style scoped>
.container{
  padding:5%;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  height:100%;
}
</style>


<script>
import textTitle from './TextTitle.vue'
import textBody from './TextBody.vue'
import textFooter from './TextFooter.vue'
import textHeader from './TextHeader.vue'

export default {
  components:{
    textHeader,
    textTitle,
    textBody,
    textFooter,
  },
  data(){
    return {
      number:0,
      content:`<h1>123</h1>`,
    }
  },
  methods:{
    focusout:function(event){
      if(!event.relatedTarget){
        event.target.focus()
      }
    },
    test:function(event){
      console.log(event)
      this.$refs.body.test(event)
    },
    addElement:function(tagname){
      this.$refs.body.addElement(tagname)
    },
  }
}
</script>
