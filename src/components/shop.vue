<template>
  <div class="shop-container">
    <div class="shop-back">
      <router-link to="/personal"><Icon type="arrow-left-c" size=20></Icon></router-link>
    </div>
    <div class="shop-header" >
      <div class="midpart">
        <img class="head-Img" :src="userInfo.shopInfo.headImg">
        <span class="shopname">{{userInfo.shopInfo.shopName}}</span>
      </div>
      <div class="rightpart">
          <div style="display:flex;">
            <div style="text-align:center;margin-right:1rem;color:orange">
              <p>{{userInfo.shopInfo.follows.length}}</p>
              <p>粉丝数</p>
            </div>
            <div v-on:click="togglefollowed" v-if="userInfo.mode===0">
              <Button type="ghost" size='small' icon="checkmark" v-if="followed" style="color:#ff9900;border-color:#ff9900;">已关注</Button>
              <Button type="info" size='small' v-else>关注</Button>
            </div>
          </div>
        </div>
    </div>
    <div class="location">
      <Icon type="location" size=20></Icon> {{userInfo.shopInfo.location}}
    </div>
    <div class="activity-header">活动</div>
    <div v-for="(item, index) in userInfo.shopInfo.activities">
    <Collects :activity="item" :activities="userInfo.shopInfo.activities" v-on:toActivitiyPage="toActivitiyPage(index)" v-on:remove="removeCollects(index)"></Collects>
    </div>
  </div>
</template>
<style>
/*.footer{
  display:none;
}*/
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
.midpart{
  display: flex;
}
.rightpart{
  margin-bottom: 1rem;
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
    export default {
      name: 'shop',
      components: {
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
          userInfo: {
            userId: '4124r2543',
            userName: '小欢欢',
            headimg: 'http://img0.imgtn.bdimg.com/it/u=3696229962,3913167766&fm=23&gp=0.jpg',
            backgroundimage: 'http://img0.imgtn.bdimg.com/it/u=3696229962,3913167766&fm=23&gp=0.jpg',
            birthday: '1991-08-29',
            sex: '女',
            position: '深圳',
            shopsFollowed: ['21r2r32g43y3', 'r1rf12f'],
            activitiescollected: ['113532354', '984i12kmdcfk0r1', '152TF322T32T2F'],
            mode: 1,
            shopInfo:{
              shopId: 'r1rf12f',
              shopName: 'earth music 旗舰店',
              headImg: 'http://img5.imgtn.bdimg.com/it/u=3691544771,740678494&fm=23&gp=0.jpg',
              backgroundimage: 'http://img0.imgtn.bdimg.com/it/u=3696229962,3913167766&fm=23&gp=0.jpg',
              follows: ['xhh', 'xbb', 'xyy', 'sdd', 'sma'],
              location: '西安市雁塔区太白南路2号',
              activities: [
                {
                  activityId: '984i12kmdcfk0r1',
                  coverImg: 'http://img0.imgtn.bdimg.com/it/u=3696229962,3913167766&fm=23&gp=0.jpg',
                  activityName: '#520闺蜜节#',
                  activityContent: '5.20-5.22全场1折起',
                  postTime: '3分钟前',
                  likes: ['xhh', 'gg', 'qwcqw', 'ss', 'xyy', 'sdd', 'sma'],
                  comments: ['xff回复xdd:hello world', 'xdd:hello world', 'xmm:hello world'],
                  watchs: 542,
                  collections: ['ggg', 'xbb', 'xyy', 'xas', 'qwc', 'F121', 'qwfq']
                },
                {
                  activityId: '984i12kmdcfk0r1',
                  coverImg: 'http://img0.imgtn.bdimg.com/it/u=3696229962,3913167766&fm=23&gp=0.jpg',
                  activityName: '#520闺蜜节#',
                  activityContent: '5.20-5.22全场1折起wqdqwfweg文菲菲问问二无我问问vv问各位v我饿GV二维v的v翁',
                  postTime: '3分钟前',
                  likes: ['xhh', 'gg', 'qwcqw', 'ss', 'xyy', 'sdd', 'sma'],
                  comments: ['xff回复xdd:hello world', 'xdd:hello world', 'xmm:hello world'],
                  watchs: 542,
                  collections: ['ggg', 'xbb', 'xyy', 'xas', 'qwc', 'F121', 'qwfq']
                }
              ]
            }
          }
        }
      },
      computed: {
        followed:function () {
          if(this.userInfo.shopsFollowed.indexOf(this.userInfo.shopInfo.shopId)>-1){
            return true
          }
          return false
        }
      },
      methods: {
        removeCollects: function (index) {
          var activities=[].slice.call(this.userInfo.shopInfo.activities)
          activities.splice(index,1)
          this.userInfo.shopInfo.activities=activities
        },
        toActivitiyPage: function (index) {
          console.log(index)
        },
        togglefollowed: function () {
          this.followed=!this.followed
        }

      }
    }
</script>
