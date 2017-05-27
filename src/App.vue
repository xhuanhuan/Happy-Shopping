<template>
  <div id="app">
    <transition name='fade'>
      <router-view></router-view>
    </transition>
    <div class="footer">
    <Menu  v-show="showMenu" mode="horizontal" :active-name="active" style="background-color: #e3e8ee;display:flex;justify-content: space-between;">
      <router-link to="/home">
        <Menu-item name="1">
          <Icon type="home"></Icon>
          首页
        </Menu-item>
      </router-link>
      <router-link to="/post">
        <Menu-item name="2" v-if="true">
          <Icon type="compose"></Icon>
          发布
        </Menu-item>
      </router-link>
      <router-link to="/personal" v-if="hascount">
        <Menu-item name="3">
            <Icon type="person"></Icon>
            我的
        </Menu-item>
      </router-link>
      <router-link to="/login" v-else>
        <Menu-item name="3">
            <Icon type="person"></Icon>
            我的
        </Menu-item>
      </router-link>
    </Menu>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    active: function () {
      var active
      switch(window.location.hash){
        case '#/home':active='1';break;
        case '#/post':active='2';break;
        case '#/personal':active='3';break;
      }
      return active
    },
    showMenu:function(){
      var showMenu = false;
      switch(window.location.hash){
        case '#/home':
        case '#/post':
        case '#/personal':showMenu=true;break;
      }
      return showMenu
    },
    hascount: function (){
      if(window.localStorage.username.length>0){
        return true
      }
      return false
    }
  },
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
  height:100%;
  /*margin: 4rem 0;*/
}
html{
  height:100%;
}
body{
  margin: 0;
  font-size: 1rem;
  height:100%;
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
