<template>
  <div class='bodycontainer'>
    <div
      @input="messageChanged"
      @keypress.enter.prevent = 'addElement'
      >
      <text-content
        class='content-text'
        v-for='(content,index) in contents'
        :tag='content.tag'
        :key='content.index'
        contenteditable="true"
        v-focus
        :data-index = 'index'
        >{{content.value}}</text-content>
    </div>
  </div>
</template>


<style scoped>
.bodycontainer{
  flex-grow: 1;
  padding-top:5px;
  width:100%;
  overflow: scroll;
}
.content{
  min-height:200px;
  height:100%;
  font-size:19px;
  /*width:100%;*/
  outline:0;
}
.content-text{
  outline:0;
  padding:0;
}
</style>

<script>
import textContent from './textContent'
let index=0;


export default {
  data(){
    return {
      contents:[
        {
          value:index,
          tag:'p',
          index:index++,
        },
        {
          value:index,
          tag:'p',
          index:index++,
        },
        {
          value:index,
          tag:'p',
          index:index++,
        },
        {
          value:index,
          tag:'p',
          index:index++,
        },
      ],
    }
  },
  components:{
    textContent,
  },
  props:['placeHolder'],
  methods:{
    messageChanged:function(event){
      console.log(event)
      let str = "";
      [].forEach.call(event.target.children,function(el){
        str+=el.textContent.trim()
      })
      console.log(str);
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
    },
    test:function(){
      this.contents.push({
        value:'hehe',
        tag:'p',
        index:index++,
      })
      this.$emit('keydown')
    },
    addElement:function(event){
      console.log(event.target.dataset.index+1);
      this.contents.map(function(content){
        console.log(content.index)
      })
      console.log('before')
      this.contents.splice(Number(event.target.dataset.index)+1,0,
        {
          value:index,
          tag:Math.random()>0.5?'p':'h1',
          index:index++,
        }
      );
      this.contents.map(function(content){
        console.log(content.index)
      })
      console.log('after')
    },
  }
}
</script>
