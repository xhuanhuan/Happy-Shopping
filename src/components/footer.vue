<template>
  <div>
    <Menu mode="horizontal" active-name="1">
        <Menu-item name="1">
            <Icon type="home"></Icon>
            首页
        </Menu-item>
        <Menu-item name="2">
            <Icon type="plus-circled"></Icon>
            发布
        </Menu-item>
        <Menu-item name="3">
            <Icon type="ios-person"></Icon>
            我的
        </Menu-item>
    </Menu>
  </div>
</template>
<script>
    export default {
      name: 'footer'
    }
</script>

<style>
.ivu-menu-horizontal{
  background-color: #e3e8ee;
  display:flex;
  justify-content: space-between;
}
</style>
