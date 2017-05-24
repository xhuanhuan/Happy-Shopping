<template>
  <div class="shop-container">
    <div class="shop-header" >
      <div class="midpart">
        <img class="head-Img" :src="userInfo.shopInfo.headImg">
        <span class="shopname">{{userInfo.shopInfo.shopName}}</span>
      </div>
      <div class="rightpart">
          <div style="display:flex;">
            <div style="text-align:center;margin-right:1rem;">
              <p>{{userInfo.shopInfo.follows.length}}</p>
              <p>粉丝数</p>
            </div>
            <Button type="ghost" size='small' icon="checkmark" style="color:#ff9900;border-color:#ff9900;">已关注</Button>
          </div>
        </div>
    </div>
    <div class="location">
      <Icon type="location" size=20></Icon> {{userInfo.shopInfo.location}}</Button>
    </div>
    <Menu mode="horizontal" :active-name="sellected" style="display:flex;justify-content: space-around;">
        <Menu-item name="2">
          <div v-on:click="latest">
          <Icon type="ios-lightbulb"></Icon>
            最新
          </div>
        </Menu-item>
        <div style="width:1px;height:100%;border-left:1px solid rgb(200, 224, 228);"></div>
        <Menu-item name="3">
          <div v-on:click="all">
            <Icon type="android-checkmark-circle"></Icon>
            全部
          </div>
        </Menu-item>
        <div style="width:1px;height:100%;border-left:1px solid rgb(200, 224, 228);"></div>
        <Menu-item name="3">
          <Icon type="navicon"></Icon>筛选
        </Menu-item>
    </Menu>
  </div>
</template>
<style>
.shop-container{
  font-size: 1rem;
}
.shop-header{
  width:100%;
  height:8rem;
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
.location{
  padding: 1rem;
  background-color: #f5f7f9;
  border-bottom: 1px solid #e3e8ee;
}
</style>
<script>
    export default {
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
                  activityContent: '5.20-5.22全场1折起',
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
      methods: {
      }
    }
</script>
