<template>
  <div
    class='bodycontainer'
    @input="messageChanged"
    @keypress.enter.prevent = 'addElement'
    @keydown.delete = 'removeElement'
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
  height:100%;
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
          value:"",
          tag:'p',
          index:index++,
        },
        // {
        //   value:index,
        //   tag:'p',
        //   index:index++,
        // },
        // {
        //   value:index,
        //   tag:'p',
        //   index:index++,
        // },
        // {
        //   value:index,
        //   tag:'p',
        //   index:index++,
        // },
      ],
    }
  },
  components:{
    textContent,
  },
  props:['placeHolder'],
  methods:{
    messageChanged:function(event){
      let str = "";
      [].forEach.call(event.target.parentNode.children,function(el){
        str+=el.textContent.trim()
      })
      let len = 0
      let reg = /[^\x00-\xff]/;
      for(let i=0;i<str.length;i++){
        if(reg.test(str[i])){
          len += 1
        }else{
          len+=0.5
        }
      }
      this.$emit('textchanged',len)
    },
    test:function(){
      console.log("trigger")
      return 111
    },
    addElement:function(event){
      if(event instanceof Event){
        this.contents.splice(Number(event.target.dataset.index)+1,0,
          {
            value:"",
            tag:'p',
            index:index++,
          }
        );
      }else if(typeof(event) === "string"){
        console.log('trigered')
        console.log(window.getSelection().focusNode.dataset)
        let selNode = window.getSelection().focusNode.dataset
            ? window.getSelection().focusNode
            :window.getSelection().focusNode.parentNode
        ;console.log(selNode)
        if(selNode.dataset.index ){
          var newNode = {
            value:"",
            tag:event,
            index:index++,
          }
          if(selNode.textContent===""){
            this.contents.splice(Number(selNode.dataset.index),1,newNode);
          }else{
            this.contents.splice(Number(selNode.dataset.index)+1,0,newNode)
          }
        }
      }
    },
    removeElement:function(event){
      if(event.target.textContent === '' && this.contents.length > 1){
        event.preventDefault();
        //设置鼠标聚焦到最后一个文本后方
        //两个api，window.getSelection()和document.createRange()
        let sel = window.getSelection()
        let tempRange = document.createRange()
        let node = event.target.previousSibling.firstChild
        tempRange.setStart(node, node.length)
        sel.removeAllRanges();
        sel.addRange(tempRange);

        //移除dom
        this.contents.splice(Number(event.target.dataset.index),1)
      }
    },
  }
}
</script>
