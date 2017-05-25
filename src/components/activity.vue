<template>
  <div>
    <div class="activity-header">
      <Icon type="close" size=20></Icon>
      <span class="shopName">{{shopName}}</span>
    </div>
    <div class="acti-body">
      <h3>{{activityName}}</h3>
      <p>{{activityContent}}</p>

      <span class="post-time">{{postTime}}</span>
      <div class="img-container" v-for="url in postImgs">
        <img class="img" :src="url">
      </div>
    </div>
    <div class="comments-header">全部评论</div>
    <div class="comments">
      <div class="comments-line" v-for="(comment,index) in comments" v-on:click="answear(index)">
        <span class="person">{{ comment.split(':')[0].split('回复')[0]}}</span>
        <span v-if="comment.indexOf('回复')>-1">回复</span>
        <span class="person" v-if="comment.indexOf('回复')>-1">{{comment.split(':')[0].split('回复')[1]}}</span>
        <span>：{{comment.split(':')[1]}}</span>
      </div>
    </div>
    <div class="activity-footer">
      <div>
        <Input v-model="currentComment" :placeholder="placeholder">
          <span slot="append" v-on:click="enterComment"><Icon type="chatbubble-working"></Icon></span>
        </Input>
      </div>
      <span v-if="likes.indexOf(userName)>-1" style="color:orange"><Icon type="thumbsup"></Icon>{{likes.length}}</span>
      <span v-else><Icon type="thumbsup"></Icon>{{likes.length}}</span>
      <span><Icon type="chatbubble-working"></Icon>{{comments.length}}</span>
      <span v-if="likes.indexOf(userName)>-1" style="color:orange"><Icon type="heart"></Icon>{{collections.length}}</span>
      <span v-else><Icon type="heart"></Icon>{{collections.length}}</span>
    </div>
  </div>
</template>
<style>
.activity-header{
  width:100%;
  height:3rem;
  background-color: #e3e8ee;
  border-bottom: 1px solid #d7dde4;
  padding: 0.5rem 1rem;
  position: fixed;
  top:0;
  left:0;
  display:flex;
  align-items: center;
}
.shopName{
  font-size: 1.2rem;
  margin-left: 1.5rem;
}
.acti-body{
  margin-top: 3rem;
  padding:1rem;
  font-size: 1rem;
  background-color:#f5f7f9;
}
.post-time{
  font-size: 12px;
  color:orange;
}
.img-container{
  width:100%;
  padding:0.5rem 0.5rem 1.5rem 0.5rem;
  margin: 0.5rem auto;
  background-color:white;
  border: 1px solid #e3e8ee;
}
.img{
  width:100%;
}
.comments-header{
  font-size: 1.2rem;
  background-color: #e3e8ee;
  border-top: 1px solid #d7dde4;
  text-align: center;
  padding:0.5rem;
}
.comments{
  font-size: 1rem;
  padding:1rem;
  margin-bottom: 4rem;
  background-color:#f5f7f9;
}
.comments-line{
  padding:0.5rem;
  border-bottom: 1px solid #e3e8ee;
}
.person{
  color: #3399ff;
}
.activity-footer{
  width: 100%;
  height:4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left:0;
  background-color: #e3e8ee;
  border-top: 1px solid #d7dde4;
  z-index: 1002;
}
</style>
<script>
export default {
  name: 'activity',
  // props: ['index'],
  methods: {
    answear: function (index) {
      var target=this.comments[index].split(':')[0].split('回复')[0]
      this.placeholder=this.userName+'回复'+target+':'
    },
    enterComment: function () {
      if(this.currentComment.length===0){
        console.log('输入不能为空')
      }else{
        if(this.placeholder.indexOf('回复')>-1){
          this.currentComment=this.placeholder+this.currentComment
        }else{
            this.currentComment=this.userName+':'+this.currentComment
        }
        this.comments.push(this.currentComment)
        this.currentComment=''
      }
    }
  },
  data () {
    return {
      placeholder:'评论',
      currentComment: '',
      userName:'xhh',

      activityId: '984i12kmdcfk0r1',
      shopName: 'majestic legon 旗舰店',
      coverImg: 'http://img0.imgtn.bdimg.com/it/u=3696229962,3913167766&fm=23&gp=0.jpg',
      activityName: '#520闺蜜节#',
      activityContent: '5.20-5.22全场1折起,点开查看更多图片，更有惊喜等着你哟~',
      postImgs: ['http://img0.imgtn.bdimg.com/it/u=3839631551,1989840719&fm=23&gp=0.jpg',
                'http://d.5857.com/qingxinmeinv_140804/001.jpg',
                'http://img0.imgtn.bdimg.com/it/u=3696229962,3913167766&fm=23&gp=0.jpg'],
      postTime: '3分钟前',
      likes: ['xhh', 'gg', 'qwcqw', 'ss', 'xyy', 'sdd', 'sma'],
      comments: ['xff回复xdd:hello world', 'xdd:hello world', 'xmm:hello world'],
      watchs: 542,
      collections: ['ggg', 'xbb', 'xyy', 'xas', 'qwc', 'F121', 'qwfq']
    }
  }
}
</script>
