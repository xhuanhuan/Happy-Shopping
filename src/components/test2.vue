<template>
  <ul>
    <h1>{{test}}</h1>
    <li v-for='item in items'>
      {{item}}
    </li>
  </ul>
</template>
<script>
  export default {
    props:['items'],
    data(){
      return {
        test:'test2.vue'
      }
    }
  }
</script>
