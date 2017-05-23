<template>
  <div>
    <div class="setandsistem">
      <span class="set">设置</span>
      <Icon class="bell" size=20 type="ios-bell"></Icon>
    </div>
    <div class="header">
      <span class="username">{{userInfo.userName}}</span>
      <img class="head-Img" :src="userInfo.headimg">
    </div>

    <div class="user-info">
    <Menu mode="horizontal" active-name="1" style="display:flex;justify-content: space-between;">
        <Menu-item name="1">
          <div  v-on:click="myPosts">
            <Icon type="compose"></Icon>
            我的发布
          </div>
        </Menu-item>
        <div style="width:1px;height:100%;border-left:1px solid rgb(200, 224, 228);"></div>
        <Menu-item name="3" v-if="true">
          <div v-on:click="myFollows">
            <Icon type="tshirt"></Icon>
            我的关注
          </div>
        </Menu-item>
        <div style="width:1px;height:100%;border-left:1px solid rgb(200, 224, 228);"></div>
        <Menu-item name="2">
          <div v-on:click="myCollects">
            <Icon type="android-checkmark-circle"></Icon>
            我的收藏
          </div>
        </Menu-item>
    </Menu>
  </div>

  <div class="content">
    <div class="block" v-for="item in userInfo.shopFollowed">
    <Follows :msg="item"></Follows>
    </div>
  </div>

  </div>
</template>
<script>
    export default {
      name: 'footer',
      components: {
        'Posts': {
          template: `aaa`
        },
        'Follows': {
          template: `<div class="follows_container"><img :src="user.headImg" style="width:4rem;height:4rem;"></div>`,
          props: ['msg'],
          data () {
            var arr
            if (this.sellected === 2) {
              arr = this.userInfo.shopFollowed
            } else {
              arr = this.userInfo.activitycollected
            }
            var o = this.shopInfo.filter(function (item) {
              var r = 1
              for (var i = 0; i < arr.length; i++) {
                if (arr[i] === item.shopId) {
                  r--
                  break
                }
              }
              if (r === 0) {
                return true
              }
              return false
            })
            console.log(o)
            return {
              user: o
            }
          }
        },
        'Collects': {
          template: `bbb`
        }
      },
      methods: {
        myPosts: function () {
          console.log(1)
        },
        myFollows: function () {
          console.log(2)
        },
        myCollects: function () {
          console.log(3)
        }
      },
      data () {
        return {
          sellected: 2,
          userInfo: {
            userId: '4124r2543',
            userName: '小欢欢',
            headimg: 'http://img0.imgtn.bdimg.com/it/u=3696229962,3913167766&fm=23&gp=0.jpg',
            shopFollowed: ['21r2r32g43y3', 'r1rf12f'],
            activitycollected: ['984i12kmdcfk0r1', '152TF322T32T2F'],
            mode: 1
          },
          shopInfo: [
            {
              shopId: 'r1rf12f',
              shopName: 'earth music 旗舰店',
              headImg: 'http://img5.imgtn.bdimg.com/it/u=3691544771,740678494&fm=23&gp=0.jpg',
              follows: ['xhh', 'xbb', 'xyy', 'sdd', 'sma']
            },
            {
              shopId: '124125r3f',
              shopName: 'majestic legon 旗舰店',
              headImg: 'http://img5.imgtn.bdimg.com/it/u=3691544771,740678494&fm=23&gp=0.jpg',
              follows: ['xhh', 'xbb', 'xyy', 'saae', 'sma', 'qwd']
            },
            {
              shopId: '35r3251t3g431',
              shopName: 'nice claup 旗舰店',
              headImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495284270411&di=e3dcd156cc328c49250c9e77f1fd82fe&imgtype=0&src=http%3A%2F%2Fwww.1tong.com%2Fuploads%2Fwallpaper%2Fplants%2F121-2-1600x900.jpg',
              follows: ['xhh', 'xbb', 'xyy', 'saae', 'sma', 'qwd']
            },
            {
              shopId: '21r2r32g43y3',
              shopName: 'collect point 旗舰店',
              headImg: 'http://img0.imgtn.bdimg.com/it/u=3696229962,3913167766&fm=23&gp=0.jpg',
              follows: ['xhh', 'xbb', 'qwfq', 'qfqqc', 'xyy', 'sdd', 'sma']
            }
          ]
        }
      }
    }
</script>

<style scoped>
.header{
  width:100%;
  height:10rem;
  background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495467447278&di=cb96ffa1d9ce351015f48a9dc7accdab&imgtype=0&src=http%3A%2F%2Fp2.gexing.com%2FG1%2FM00%2F94%2F3E%2FrBACJ1Wf1AHR_z0GAAAY0B5Z488547.jpg);
  background-size: contain;
  margin-top: 3rem;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.setandsistem{
  width:100%;
  height:3rem;
  background-color: rgba(0, 168, 159, 0.8);
  padding: 0.5rem 1rem;
  position: fixed;
  top:0;
  left:0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head-Img{
  width:4rem;
  height:4rem;
  border-radius: 50%;
}
.username{
  font-size: 1rem;
  color: rgb(244,169,122);
}
.user-info{
  width:100%;
  border-bottom: 1px solid rgb(200, 224, 228);
}
.my{
  padding: 1rem;
}
.follows_container{
  width: 100%;
  height:6rem;
  padding:1rem;
  border: 1px solid black;
}
.post-head-Img{
  width: 4rem;
  height:4rem;
}
</style>
