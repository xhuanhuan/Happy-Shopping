<template>
  <div v-if="!activityShow">
    <div class="setandsistem">
      <span class="set" v-on:click="setShow = true"><Icon type="gear-b"></Icon>设置</span>
      <Icon class="bell" size=20 type="ios-bell"></Icon>
    </div>
    <transition name="setPart">
    <div class="setPart" v-if="setShow">
      <div class="set-header"><Button type="text" icon="chevron-left" v-on:click="setShow = false">返回</Button></div>
      <Collapse style="border-left:none;border-right:none;">
        <Panel name="1">
          个人资料
          <ul slot="content">
            <li><span>头像</span><img class="head-Img" :src="userInfo.headimg" /><Icon size=20 type="camera"></Icon></li>
            <li><span>背景</span><img class="head-Img" :src="userInfo.headimg" /><Icon size=20 type="camera"></Icon></li>
            <li><span>性别</span>
              <Select style="width:180px" :value="userInfo.sex">
                <Option value="男" key="1">男</Option><Option value="女" key="2">女</Option>
              </Select>
            </li>
            <li><span>生辰</span> <Date-picker type="date" :value="userInfo.birthday" placeholder="选择日期" style="width: 180px"></Date-picker></li>
            <li><span>常驻</span>
              <Select style="width:180px" :value="userInfo.position">
                <Option value="北京" key="1">北京</Option><Option value="深圳" key="2">深圳</Option>
              </Select>
            </li>
          </ul>
        </Panel>
        <Panel name="2">我的店铺
          <ul slot="content">
            <li><span>店铺头像</span><img class="head-Img" :src="userInfo.headimg" /><Icon size=20 type="camera"></Icon></li>
            <li><span>店铺背景</span><img class="head-Img" :src="userInfo.headimg" /><Icon size=20 type="camera"></Icon></li>
            <li><span>店铺名称</span><p>erth music旗舰店</p></li>
            <li><span>创建时间</span> <Date-picker type="date" :value="userInfo.birthday" placeholder="选择日期" style="width: 180px"></Date-picker></li>
            <li><router-link to="/shop" style="width:100%;display:flex;justify-content:space-between"><span>去店铺首页</span><Icon type="chevron-right"></Icon></router-link></li>
          </ul>
        </Panel>
      </Collapse>
      <div class="log-out"> <Button long type="warning">退出当前登录</Button></div>
    </div>
    </transition>
    <div class="header">
      <span class="username">{{userInfo.userName}}</span>
      <img class="head-Img" :src="userInfo.headimg">
    </div>
    <div class="user-info">
    <Menu mode="horizontal" :active-name="sellected" style="display:flex;justify-content: space-around;">
        <Menu-item name="2">
          <div v-on:click="myFollows">
            <Icon type="eye"></Icon>
            我的关注
          </div>
        </Menu-item>
        <div style="width:1px;height:100%;border-left:1px solid rgb(200, 224, 228);"></div>
        <Menu-item name="3">
          <div v-on:click="myCollects">
            <Icon type="android-checkmark-circle"></Icon>
            我的收藏
          </div>
        </Menu-item>
      </Menu>
    </div>
    <div class="app-content" v-if="sellected === 1">
      <div class="block" v-for="(item, index) in userInfo.shopsFollowed">
      <Posts :activityId="item" :activityInfo="activitiesInfo"></Posts>
      </div>
    </div>
    <div class="app-content" v-else-if="sellected === 2">
      <div class="block" v-for="(item, index) in userInfo.shopsFollowed">
      <Follows :shopId="item" :shopsInfo="shopsInfo" v-on:remove="removeFollows(index)"></Follows>
      </div>
    </div>
    <div class="app-content" v-else>
      <div class="block" v-for="(item, index) in userInfo.activitiescollected" v-on:click="getCurrentActivity(item)">
      <Collects :activityId="item" :activitiesInfo="activitiesInfo" v-on:remove="removeCollects(index)"></Collects>
      </div>
    </div>
  </div>
  <div v-else><activity-Component :activityInfo="activityInfo" v-on:hide="activityShow=!activityShow"></activity-Component></div>
</template>
<script>
import activity from './activity'
    export default {
      name: 'footer',
      components: {
        'activity-Component': activity,
        'Follows': {
          template: `<div class="follows_container">
          <div :style="container1">
          <img :src="shopInfo.headImg" :style="headimgStyle">
          <span :style="shopnameStyle">{{shopInfo.shopName}}</span>
          </div>
          <Button shape="circle" v-on:click="remove">取消关注</Button>
          </div>`,
          props: ['shopId', 'shopsInfo'],
          computed: {
            shopInfo: function () {
              var shopsInfo=[].slice.call(this.shopsInfo)
              var that = this
              var target = shopsInfo.filter(function (item) {
                return item.shopId === that.shopId
              })
              return target[0]
            }
          },
          methods: {
            remove: function () {
              this.$emit('remove')
            }
          },
          data () {
            return {
              container1: {
                display: 'flex',
                alignItems: 'center'
              },
              headimgStyle: {
                width:'4rem',
                height:'4rem'
              },
              shopnameStyle: {
                fontSize: '1rem',
                marginLeft: '1rem'
              }
            }
          }
        },
        'Collects': {
          template: `<div class="collects_container">
          <img :src="activityInfo.coverImg" style="width:8rem;height:8rem;">
          <div style="width:10rem;height:8rem;overflow:auto">
          <h3 style="color:#5cadff">{{activityInfo.shopName}}</h3>
          <h4>{{activityInfo.activityName}}</h4>
          <p>{{activityInfo.activityContent}}</p>
          </div>
            <Button icon="close" shape="circle" size="small" v-on:click="remove"></Button>
          </div>`,
          props: ['activityId', 'activitiesInfo'],
          computed: {
            activityInfo: function () {
              var activityInfo=[].slice.call(this.activitiesInfo)
              var that = this
              var target = activityInfo.filter(function (item) {
                return item.activityId === that.activityId
              })
              return target[0]
            }
          },
          methods: {
            remove: function () {
              this.$emit('remove')
            }
          },
        }
      },
      methods: {
        myPosts: function () {
          this.sellected = 1
        },
        myFollows: function () {
          this.sellected = 2
        },
        myCollects: function () {
          this.sellected = 3
        },
        removeFollows: function (index) {
          var shopFollowed=[].slice.call(this.userInfo.shopFollowed)
          console.log(shopFollowed)
          shopFollowed.splice(index,1)
          this.userInfo.shopFollowed=shopFollowed
        },
        removeCollects: function (index) {
          var activitiescollected=[].slice.call(this.userInfo.activitiescollected)
          console.log(activitiescollected)
          activitiescollected.splice(index,1)
          this.userInfo.activitiescollected=activitiescollected
        },
        back: function () {
          console.log('back')
        },
        getCurrentActivity: function(activityId){
          this.activityInfo=this.activitiesInfo.filter(function(item){
            return item.activityId===activityId
          })[0]
          this.activityShow=true
        }
      },
      data () {
        return {
          sellected: '3',
          setShow: false,
          activityShow: false,
          activityInfo: {},
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
            mode: 1
          },
          activitiesInfo: [
            {
              shopId: 'r1rf12f',
              shopName: 'earth music 旗舰店',
              activityId: '113532354',
              coverImg: 'http://img5.imgtn.bdimg.com/it/u=3691544771,740678494&fm=23&gp=0.jpg',
              activityName: '#520闺蜜节#',
              activityContent: '5.20-5.22全场1折起',
              postImgs: ['http://img0.imgtn.bdimg.com/it/u=3839631551,1989840719&fm=23&gp=0.jpg',
                        'http://d.5857.com/qingxinmeinv_140804/001.jpg',
                        'http://img0.imgtn.bdimg.com/it/u=3696229962,3913167766&fm=23&gp=0.jpg'],
              postTime: '3小时前',
              likes: ['xdd', 'xbb', 'xyy', 'sdd', 'sma'],
              comments: ['xdd:hello world', 'xss:hello world', 'xmm:hello world'],
              watchs: 141,
              collections: ['mht', 'xbb', 'xyy', 'sdd', 'sma']
            },
            {
              shopId: '124125r3f',
              activityId: '41224tgsc34Ac634',
              shopName: 'majestic legon 旗舰店',
              coverImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495284224924&di=68a61a2ebef04dcf6add96d233fc9fe9&imgtype=0&src=http%3A%2F%2Fh8.86.cc%2Fwalls%2F20160405%2F1440x900_9837c6522e7cb1f.jpg',
              activityName: '#520闺蜜节#',
              activityContent: '5.20-5.22全场1折起',
              postImgs: ['http://img0.imgtn.bdimg.com/it/u=3839631551,1989840719&fm=23&gp=0.jpg',
                        'http://d.5857.com/qingxinmeinv_140804/001.jpg',
                        'http://img0.imgtn.bdimg.com/it/u=3696229962,3913167766&fm=23&gp=0.jpg'],
              postTime: '3小时前',
              likes: ['xhh', 'qwf', 'qwcqw', 'xbb', 'xyy', 'sdd', 'sma'],
              comments: ['xhh:hello world', 'xdd回复xhh:hello world', 'xmm:hello world'],
              watchs: 235,
              collections: ['xhh', 'xbb', 'xyy', 'sdd', 'sma', 'qfq', 'F121']
            },
            {
              shopId: '35r3251t3g431',
              activityId: '152TF322T32T2F',
              shopName: 'nice claup 旗舰店',
              coverImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495284270411&di=e3dcd156cc328c49250c9e77f1fd82fe&imgtype=0&src=http%3A%2F%2Fwww.1tong.com%2Fuploads%2Fwallpaper%2Fplants%2F121-2-1600x900.jpg',
              activityName: '#520闺蜜节#',
              activityContent: '5.20-5.22全场1折起',
              postImgs: ['http://img0.imgtn.bdimg.com/it/u=3839631551,1989840719&fm=23&gp=0.jpg',
                        'http://d.5857.com/qingxinmeinv_140804/001.jpg',
                        'http://img0.imgtn.bdimg.com/it/u=3696229962,3913167766&fm=23&gp=0.jpg'],
              postTime: '3分钟前',
              likes: ['xss', 'qwf', 'qwcqw', 'xbb', 'xyy', 'sdd', 'sma'],
              comments: ['xhh:hello world', 'xdd:hello world', 'xmm回复xdd:hello world'],
              watchs: 235,
              collections: ['xhh', 'xbb', 'xyy', 'xas', 'sma', 'qfq', 'F121', 'qwfq', '2yg1']
            },
            {
              shopId: '21r2r32g43y3',
              activityId: '984i12kmdcfk0r1',
              shopName: 'collect point 旗舰店',
              coverImg: 'http://img0.imgtn.bdimg.com/it/u=3696229962,3913167766&fm=23&gp=0.jpg',
              activityName: '#520闺蜜节#',
              activityContent: '5.20-5.22全场1折起,去重全额V穷，qnf9w初三错去煤气女IQ完虐哦v V的妻女群殴我才去win服务勤奋成为汽车',
              postImgs: ['http://img0.imgtn.bdimg.com/it/u=3839631551,1989840719&fm=23&gp=0.jpg',
                        'http://d.5857.com/qingxinmeinv_140804/001.jpg',
                        'http://img0.imgtn.bdimg.com/it/u=3696229962,3913167766&fm=23&gp=0.jpg'],
              postTime: '3分钟前',
              likes: ['xhh', 'gg', 'qwcqw', 'ss', 'xyy', 'sdd', 'sma'],
              comments: ['xff回复xdd:hello world', 'xdd:hello world', 'xmm:hello world'],
              watchs: 542,
              collections: ['ggg', 'xbb', 'xyy', 'xas', 'qwc', 'F121', 'qwfq']
            }
          ],
          shopsInfo: [
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
.setPart{
  width:100%;
  background-color: white;
  position:fixed;
  top:0;
  bottom: 0;
  left: 0;
  z-index:1001;
  overflow: auto;
}
li{
  padding:1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e3e8ee;
}
.set-header{
  padding: 1rem;
  border-bottom: 1px solid #e3e8ee;
}
.log-out{
  padding: 1rem;
  text-align: center;
}
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
.app-content{
  margin-bottom: 4rem;
}
.block{
  background-color: #f5f7f9;
}
.follows_container{
  width: 100%;
  height:6rem;
  padding:0 1rem;
  margin-bottom: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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


.setPart-enter-active {
  animation:setPart-in .5s linear;
}
.setPart-leave-active {
  animation:setPart-out .5s linear;
}
@keyframes setPart-in {
  0% {
    transform: translateX(-375px);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes setPart-out {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-375px);
  }
}

</style>
