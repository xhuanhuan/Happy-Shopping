<script>
export default{
  render:function(createElement){
    return createElement(
      this.tag,
      this.$slots.default
    )
  },
  props:{
    tag:{
      type:String,
      required:true
    }
  },
  // directives:{
  //   focus:{
  //     inserted:function(el){
  //       console.log(el)
  //       el.focus()
  //     }
  //   }
  // },
}
</script>
