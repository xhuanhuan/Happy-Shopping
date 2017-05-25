<template>
  <div id="app">
    <router-view></router-view>
    <div class="footer">
    <Menu mode="horizontal" :active-name="active" style="background-color: #e3e8ee;display:flex;justify-content: space-between;">
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
    hascount: function (){
      if(window.localStorage.username.length>0){
        return true
      }
      return false
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
  font-size: 1rem;
}
p{
  margin: 0;
}
.footer{
  display: block;
  width: 100%;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #d7dde4;
}
</style>
