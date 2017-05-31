<template>
  <div>
  <div >
    <div class='textfooter' v-show='showToolbar' @click.stop='addElement'>
      <b class='edit noselect same-height' data-tagname='b'>B</b>
      <i class='edit noselect same-height' data-tagname='i'>I</i>
      <s class='edit noselect same-height' data-tagname='s'>S</s>
      <h1 class='noselect same-height' data-tagname='h1'>H1</h1>
      <h2 class='noselect same-height' data-tagname='h2'>H2</h2>
      <h3 class='noselect same-height' data-tagname='h3'>H3</h3>
      <h4 class='noselect same-height' data-tagname='h4'>H4</h4>
      <span class='edit noselect same-height' data-tagname='a'>a</span>
    </div>
    <div class='textfooter' @click='active'>
      <input @change='imageChanged' type="file" style='display:none;' id='img-upload' multiple accept="image/png, image/jpeg, image/gif, image/jpg"/>
      <label for='img-upload' ><Icon :size='size' type="image" data-name='image' :color="activeicon==='image'?'#00BFFF':'black'"></Icon></label>
      <Icon
        :size='size'
        type="ios-compose"
        :color="(activeicon==='edit'||showToolbar)?'#00BFFF':'black'"
        data-name='edit'
        @click.native='textEdit'
        ></Icon>
      <Icon
        :size='size'
        type="more"
        data-name='more'
        :color="activeicon==='more'?'#00BFFF':'black'"
        ></Icon>
      <Icon
        :size='size'
        type="ios-undo"
        data-name='pre'
        :color="activeicon==='pre'?'#00BFFF':'black'"
        ></Icon>
      <Icon
        :size='size'
        type="ios-redo"
        data-name='nxt'
        :color="activeicon==='nxt'?'#00BFFF':'black'"
        ></Icon>
      <Icon
        :size='size'
        type="android-settings"
        data-name='set'
        :color="activeicon==='set'?'#00BFFF':'black'"
        ></Icon>
    </div>
  </div>
  </div>
</template>

<style scoped>
.textfooter{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.edit{
  font-size:21px;
}
.noselect{
  user-select:none;
  flex-grow:1;
  text-align:center;
}
.same-height{
  line-height:36px;
}
</style>

<script>
export default {
  props:['placeHolder'],
  data(){
    return {
      size:25,
      showToolbar:false,
      activeicon:'',
    }
  },
  methods:{
    textEdit:function(){
      this.showToolbar = !this.showToolbar
      this.$emit('textEdit')
    },
    imageChanged:function(event){
      console.log(event.target.files)
    },
    active:function(event){
      this.activeicon = event.target.dataset.name || this.activeicon
      let that = this
      setTimeout(function(){
        that.activeicon = ""
      },300)
    },
    addElement:function(event){
      let tagname = event.target.dataset.tagname
      console.log(tagname)
      if(tagname){
         this.$emit('addElement',tagname)
      }
    }
  }
}
</script>
