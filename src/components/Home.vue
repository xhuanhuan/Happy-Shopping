<template>
  <div class="container">
    <div class="header">
      <span calss="city">西安 <Icon type="chevron-down"></Icon></span>
       <Button style="background-color: white;" class="search-btn" type="ghost" shape="circle" icon="ios-search">搜索</Button>
      <Icon size=20 type="ios-bell"></Icon>
    </div>
    <div class="block" v-for="item in activityInfo">
      <div class="userInfo-container">
        <div class="userInfo">
        <div class="head-img-container">
        <img :src="item.coverImg" class="header-img">
        </div>
        <div class="head-uerInfo">
          <p>{{item.shopName}}</p>
          <p>{{item.postTime}}</p>
        </div>
      </div>
        <Button type="ghost" size='small' icon="checkmark" style="float:right;color:#ff9900;border-color:#ff9900;" v-if="test(userInfo.shopFollowed, item.shopId)">已关注</Button>
        <Button type="ghost" size='small' style="float:right;" v-else>关注</Button>
      </div>
       <div class="cover">
         <img :src="item.coverImg" class="cover-img">
         <div class="activity-Info">
        <p>{{item.activityName}}</p>
        <p>{{item.activityContent}}</p>
      </div>
      </div>
      <div class="control">
        <span class="eye"><Icon size=16 type="eye"></Icon>{{item.watchs}}</span>
        <div>
          <Button type="ghost" shape="circle" class="collection" icon="android-favorite" style="color:#39f;border-color:#39f;"  v-if="test(item.collections, userInfo.userName)">{{item.collections.length}}</Button>
          <Button type="ghost" shape="circle" class="collection" icon="android-favorite-outline"  v-else>{{item.collections.length}}</Button>
          <Button type="ghost" shape="circle" class="like" icon="thumbsup" style="color:#39f;border-color:#39f;" v-if="test(item.likes, userInfo.userName)">{{item.likes.length}}</Button>
          <Button type="ghost" shape="circle" class="like" icon="thumbsup" v-else>{{item.likes.length}}</Button>
          <Button type="ghost" shape="circle" class="comment" icon="chatbox-working" style="color:#39f;border-color:#39f" v-if="testcomments(item.comments, userInfo.userName)">{{item.comments.length}}</Button>
          <Button type="ghost" shape="circle" class="comment" icon="chatbox-working" v-else>{{item.comments.length}}</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    test: function (arr, str) {
      var _arr = [].slice.call(arr)
      if (_arr.indexOf(str) > -1) {
        return true
      }
      return false
    },
    testcomments: function (arr, str) {
      var _arr = [].slice.call(arr)
      return _arr.some(function (item, index) {
        var str1
        if (item.indexOf('回复') > -1) {
          str1 = item.split('回复')[0]
        } else {
          str1 = item.split(':')[0]
        }
        return str1 === str
      })
    }
  },
  data () {
    return {
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
      ],
      activityInfo: [
        {
          shopId: 'r1rf12f',
          shopName: 'earth music 旗舰店',
          activityId: '113532354',
          coverImg: 'http://img5.imgtn.bdimg.com/it/u=3691544771,740678494&fm=23&gp=0.jpg',
          activityName: '#520闺蜜节#',
          activityContent: '5.20-5.22全场1折起',
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
          postTime: '3分钟前',
          likes: ['xss', 'qwf', 'qwcqw', 'xbb', 'xyy', 'sdd', 'sma'],
          comments: ['xhh:hello world', 'xdd:hello world', 'xmm回复xdd:hello world'],
          watchs: 235,
          collections: ['xhh', 'xbb', 'xyy', 'xas', 'sma', 'qfq', 'F121', 'qwfq', '2yg1']
        },
        {
          shopId: '21r2r32g43y3',
          activityId: '984i12kmdcfk0r1',
          shopName: 'collect music 旗舰店',
          coverImg: 'http://img0.imgtn.bdimg.com/it/u=3696229962,3913167766&fm=23&gp=0.jpg',
          activityName: '#520闺蜜节#',
          activityContent: '5.20-5.22全场1折起',
          postTime: '3分钟前',
          likes: ['xhh', 'gg', 'qwcqw', 'ss', 'xyy', 'sdd', 'sma'],
          comments: ['xff回复xdd:hello world', 'xdd:hello world', 'xmm:hello world'],
          watchs: 542,
          collections: ['ggg', 'xbb', 'xyy', 'xas', 'qwc', 'F121', 'qwfq']
        }
      ],
      userInfo: {
        userId: '4124r2543',
        userName: 'xhh',
        headImg: 'http://img0.imgtn.bdimg.com/it/u=3696229962,3913167766&fm=23&gp=0.jpg',
        shopFollowed: ['21r2r32g43y3', 'r1rf12f'],
        activitycollected: ['984i12kmdcfk0r1', '152TF322T32T2F']
      }
    }
  }
}
</script>

<style scoped>
.container{
  width:100%;
  margin-top: 4rem;
  background-color: #f5f7f9;
}
.header{
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
  padding-top: 1rem;
  background-color: rgb(169,200,221);
  color: white;
  position: fixed;
  top:0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
}
.search-btn{
  width: 70%;
}
.block{
  box-sizing: border-box;
  width:100%;
  height:370px;
  background-color: white;
  margin:20px 0;
  padding:5px;
  border-bottom: 1px solid #e3e8ee;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  }
  .userInfo-container{
    height:40px;
    width:100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  .userInfo{
    height:100%;
    width:80%;
    display:flex;
    justify-content: flex-start;
    align-items: center;
  }
  .head-img-container{
    width:35px;
    height:35px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 5px;
  }
  .head-uerInfo{
    height:100%;
  }
  .header-img{
    width: 100%;
    height: 100%;
  }
.cover{
  background-color: #f5f7f9;
  width:100%;
  height:75%;
  margin:0 auto;
}
.cover-img{
  width:100%;
  height:80%;
}
.control{
  width:100%;
  padding: 0 5px;
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.activity-Info{
  width:100%;
  padding: 0 5px;
}
.eye{
  color: #9ea7b4;
}
.like,.comment,.collection{
  margin-left: 5px;
  color: #9ea7b4;
  padding-top:0;
  padding-bottom: 0;
}
Icon{
  margin:0 2px;
}
</style>
