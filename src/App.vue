<template>
  <div id="app">
    <!-- <div class="header">
      <span calss="city">西安 <Icon type="chevron-down"></Icon></span>
       <Button style="background-color: white;" class="search-btn" type="ghost" shape="circle" icon="ios-search">搜索</Button>
      <Icon size=20 type="ios-bell"></Icon>
    </div> -->
    <router-view></router-view>
    <div class="footer">
    <Menu mode="horizontal" active-name="1" style="background-color: #e3e8ee;display:flex;justify-content: space-between;">
        <Menu-item name="1">
          <div  v-on:click="navToHome">
            <Icon type="home"></Icon>
            首页
          </div>
        </Menu-item>
        <Menu-item name="3" v-if="true">
          <div v-on:click="navToPost">
            <Icon type="plus-circled"></Icon>
            发布
          </div>
        </Menu-item>
        <Menu-item name="2">
          <div v-on:click="navToPerson">
            <Icon type="person"></Icon>
            我的
          </div>
        </Menu-item>
    </Menu>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    navToHome: function (event) {
      location.hash = '/home'
    },
    navToPost: function (event) {
      location.hash = '/post'
    },
    navToPerson: function (event) {
      location.hash = '/personal'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin: 4rem 0;*/
}
body{
  margin: 0;
  font-size: 15px;
}
p{
  margin: 0;
}
.footer{
  width: 100%;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #d7dde4;
}
</style>
