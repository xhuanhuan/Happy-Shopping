<template>
  <div class="container">
    <div v-for="item in obj">
    <div class="block" >
      <div class="userInfo-container">
        <div class="userInfo">
        <div class="head-img-container">
        <img :src="item.src" class="header-img">
        </div>
        <div class="head-uerInfo">
          <p>{{item.userName}}</p>
          <p>3小时前</p>
        </div>
      </div>
        <button style="float:right;">关注</button>
      </div>
       <div class="cover">
         <img :src="item.src" class="cover-img">
         <div class="activity-Info">
        <p>闺蜜节</p>
        <p>{{item.time}}</p>
      </div>
      </div>
      <div class="control">
        <span class="eye">eye</span>
        <span class="comment">comment</span>
        <span class="like">like</span>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Love',
  data () {
    return {
      obj: [
        {
          userName: 'earth music 旗舰店',
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495204786587&di=1f27131d9a5a825b46ac19721b4a4a03&imgtype=0&src=http%3A%2F%2Fstc.zjol.com.cn%2Fg1%2FM001009CggSDldpPt6AD7lmAAK0-Ge4NqA874.jpg%3Fwidth%3D600%26height%3D450',
          activity: '#520闺蜜节#',
          time: '5.20-5.22全场1折起'
        },
        {
          userName: 'earth music 旗舰店',
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495204786587&di=1f27131d9a5a825b46ac19721b4a4a03&imgtype=0&src=http%3A%2F%2Fstc.zjol.com.cn%2Fg1%2FM001009CggSDldpPt6AD7lmAAK0-Ge4NqA874.jpg%3Fwidth%3D600%26height%3D450',
          activity: '520闺蜜节',
          time: '5.20-5.22全场1折起'
        },
        {
          userName: 'earth music 旗舰店',
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495204786587&di=1f27131d9a5a825b46ac19721b4a4a03&imgtype=0&src=http%3A%2F%2Fstc.zjol.com.cn%2Fg1%2FM001009CggSDldpPt6AD7lmAAK0-Ge4NqA874.jpg%3Fwidth%3D600%26height%3D450',
          activity: '520闺蜜节',
          time: '5.20-5.22全场1折起'
        },
        {
          userName: 'earth music 旗舰店',
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495204786587&di=1f27131d9a5a825b46ac19721b4a4a03&imgtype=0&src=http%3A%2F%2Fstc.zjol.com.cn%2Fg1%2FM001009CggSDldpPt6AD7lmAAK0-Ge4NqA874.jpg%3Fwidth%3D600%26height%3D450',
          activity: '520闺蜜节',
          time: '5.20-5.22全场1折起'
        }
      ]
    }
  }
}
</script>

<style scoped>
.container{
  width:100%;
  /*background-color: rgba(0,0,0,0.05);*/
}
.block{
  box-sizing: border-box;
  width:100%;
  height:370px;
  background-color: white;
  margin:10px 0;
  padding:5px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
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
    height:35px;;
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
  background-color: rgba(0,0,0,0.05);
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
}
.activity-Info{
  width:100%;
  padding: 0 5px;
}
.eye{
  float:left;
}
.like,.comment{
  float:right;
  margin-left: 5px;
}
</style>
