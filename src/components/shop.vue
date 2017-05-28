<template>
  <div class="shop-container" v-if="show">
    <div class="shop-back">
      <span v-on:click="hide">
        <Icon type="close" size=20></Icon>
      </span>
    </div>
    <div class="shop-header" >
      <div class="leftpart">
        <img class="head-Img" :src="shopInfo.headImg">
        <span class="shopname">{{shopInfo.shopName}}</span>
      </div>
      <div class="rightpart">
            <div v-on:click="togglefollowed">
              <div style="text-align:center;color:orange">
                <p>{{shopInfo.follows.length}}</p>
                <p>粉丝数</p>
              </div>
              <Button type="ghost" size='small' icon="checkmark"  style="color:#ff9900;border-color:#ff9900;"
                      v-if="userInfo.shopsFollowed.indexOf(shopInfo.shopId)>-1"
                      @click="userInfo.shopsFollowed.splice(userInfo.shopsFollowed.indexOf(shopInfo.shopId),1)">已关注</Button>
              <Button type="info" size='small' icon="plus"
                      v-else @click="userInfo.shopsFollowed.push(shopInfo.shopId)">加关注</Button>
            </div>
        </div>
    </div>
    <div class="location">
      <Icon type="location" size=20></Icon> {{shopInfo.location}}
    </div>
    <div class="activity-header">活动</div>
    <div v-for="(item, index) in shopInfo.activities">
    <Collects :activity="item" :activities="shopInfo.activities" v-on:toActivitiyPage="toActivitiyPage(item)" v-on:remove="removeCollects(index)"></Collects>
    </div>
  </div>
  <div v-else><activity-Component :activityInfo="activity" v-on:hide="show=!show"></activity-Component></div>
</template>
<style scoped>
.shop-back{
  width:100%;
  height:3rem;
  background-color: rgba(0, 168, 159, 0.6);
  padding: 0.5rem 1rem;
  position: fixed;
  top:0;
  left:0;
}
.shop-container{
  font-size: 1rem;
}
.shop-header{
  width:100%;
  height:9rem;
  padding: 0 1rem;
  background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495467447278&di=cb96ffa1d9ce351015f48a9dc7accdab&imgtype=0&src=http%3A%2F%2Fp2.gexing.com%2FG1%2FM00%2F94%2F3E%2FrBACJ1Wf1AHR_z0GAAAY0B5Z488547.jpg);
  background-size: contain;
  display:flex;
  justify-content: space-between;
  align-items:flex-end;
}
.head-Img{
  width:4rem;
  height:4rem;
  margin-right: 1rem;
}
.leftpart{
  display: flex;
}
.rightpart{
  margin-bottom: 0.5rem;
}
.shopname{
  font-size: 1.1rem;
}
.activity-header,.location{
  padding: 1rem;
  background-color: #f5f7f9;
  border-bottom: 1px solid #e3e8ee;
}
.collects_container{
  width: 100%;
  height:10rem;
  padding:0 1rem;
  margin-bottom: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e3e8ee;
}
</style>
<script>
import activity from './activity'
    export default {
      name: 'shop',
      props: ['shopInfo','userInfo'],
      components: {
        'activity-Component': activity,
        'Collects': {
          template: `<div class="collects_container" v-on:click="toActivitiyPage">
          <img :src="activityInfo.coverImg" style="width:6rem;height:6rem;">
          <div style="display:flex;flex-direction:column;justify-content:space-between;width:16rem;height:6rem;">
          <div style="height:5rem;overflow:auto;">
              <h4>{{activityInfo.activityName}}</h4>
              <p>{{activityInfo.activityContent}}</p>
          </div>
          <div style="display:flex;justify-content:flex-end ">
          <Button type="text" icon="eye" size="small">{{activityInfo.watchs}}</Button>
          <Button type="text" icon="thumbsup" size="small">{{activityInfo.likes.length}}</Button>
          <Button type="text" icon="android-favorite-outline" size="small">{{activityInfo.collections.length}}</Button>
          <Button type="text" icon="chatbox-working" size="small">{{activityInfo.comments.length}}</Button>
          <Button type="text" icon="close" size="small" v-on:click.stop="remove" style="float:right;color:orange;"></Button>
          </div>
          </div>
          </div>`,
          props: ['activity', 'activities'],
          computed: {
            activityInfo: function () {
              return this.activity
            }
          },
          methods: {
            remove: function () {
              this.$emit('remove')
            },
            toActivitiyPage: function () {
              this.$emit('toActivitiyPage')
            }
          },
        }
      },
      data () {
        return {
          show: true,
          activity: {}
        }
      },
      methods: {
        hide: function(){
          this.$emit('hide')
        },
        removeCollects: function (index) {
          var activities=[].slice.call(this.shopInfo.activities)
          activities.splice(index,1)
          this.shopInfo.activities=activities
        },
        toActivitiyPage: function (item) {
          item.watchs++
          this.activity=item
          this.show=false
        },
        togglefollowed: function () {
          this.followed=!this.followed
        }

      }
    }
</script>
