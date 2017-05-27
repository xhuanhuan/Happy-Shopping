<template>
  <div>
    <h1>test1.vue</h1>
    <test :items='items'></test>
  </div>
</template>
<script>
  import test from '@/components/test2.vue'
  export default {
    data(){
      return {
        test:'test1.vue',
        items:[1,2,3,4,5]
      }
    },
    components:{
      test
    }
  }
</script>
