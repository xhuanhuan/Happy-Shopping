<template>
  <div>
    <div class="setandsistem">
      <span class="set">设置</span>
      <Icon class="bell" size=20 type="ios-bell"></Icon>
    </div>
    <div class="add-content" v-on:click="addContent">
      <Button data-index="1" style="color:white;" class="btn addTitle" type="dashed">标题</Button>
      <Button data-index="2" style="color:white;" class="btn addContent" type="dashed">文本</Button>
      <Button data-index="3" style="color:white;" class="btn addImg" type="dashed"><Icon type="ios-camera-outline" size="24"></Icon></Button>
      <Button data-index="4" style="color:white;" class="btn preview" type="dashed" >预览</Button>
      <Button data-index="5" style="color:white;" class="btn post" type="dashed" >提交</Button>
    </div>
    <div id="text-content">
      <div v-for="item in mycomponents">
      <addtitle place-holder = '11' v-if="item==='addtitle'"></addtitle>
      <addtext v-else-if="item==='addtext'"></addtext>
      <addimg v-else></addimg>
    </div>
    </div>
    <el-amap-search-box class="search-box"
                        :search-option="searchOption"
                        :on-search-result="onSearchResult"
                        :events="search"></el-amap-search-box>
    <div class="amap-wrapper">
       <el-amap :plugin="plugin" :center="mapCenter">
         <el-amap-info-window v-if="toPlace.length>0" position="toPlace[0]" content="到这里去"></el-amap-info-window>
         <el-amap-marker animation="AMAP_ANIMATION_DROP" v-for="(mark,index) in markers"
                         icon="'../assets/end.png'"
                         :position="mark.location" :title="mark.name"
                         :events="toThisPlace"></el-amap-marker>
       </el-amap>
     </div>
  </div>
</template>
<script>
    export default {
      name: 'post',
      components: {
        'addtitle': {
          props:['placeHolder'],
          data(){
            return {
              value:''
            }
          },
          template: `<div class="contentContainer"><Icon class='content' type='android-delete' /><label class="note">标题</label><Input v-model="value"  style="width:90%" placeholder="title" ></Input></div>`,
        },
        'addtext': {
          data(){
            return {
              value:''
            }
          },
          template: `<div class="contentContainer"><Icon class='content' type='android-delete' /><label class="note">文本域</label><Input class="add_input" style="width:90%" v-model="value" type="textarea" :autosize="{minRows: 3,maxRows: 5}" placeholder="请输入活动内容"></Input></div>`
        },
        'addimg': {
          data(){
            return {
              value:''
            }
          },
          template: `<div class="contentContainer"><Icon class='content' type='android-delete' /><Upload multiple action="//jsonplaceholder.typicode.com/posts/">
          <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button> </Upload></div>`
        }
      },
      methods: {
        addContent: function (e) {
          var target = e.target
          if (target.type !== 'button') {
            target = target.parentNode
          }
          if (target.type !== 'button') {
            target = target.parentNode
          }
          switch (target.dataset.index) {
            case '1' :
              this.mycomponents.push('addtitle')
              break
            case '2' :
              this.mycomponents.push('addtext')
              break
            case '3' :
              this.mycomponents.push('addimg')
              break
            case '4' :
              console.log(4)
              break
          }
        },
        onSearchResult: function(pois){
          console.log(pois)
          let latSum = 0;
          let lngSum = 0;
          this.markers=[]
          if (pois.length > 0) {
            pois.forEach(poi => {
              let {lng, lat} = poi;
              console.log(lng,lat)
              lngSum += lng;
              latSum += lat;
              this.markers.push({location:[lng, lat],name:poi.name});
            });
            let center = {
              lng: lngSum / pois.length,
              lat: latSum / pois.length
            };
            this.mapCenter = [center.lng, center.lat];
          }
        },
        toThisPlace: function(index){
          console.log(index)
        }
      } ,
      data () {
         let self = this
        return {
          mycomponents: [],
          toPlace:[],
          search:{
            init(o) {
               let Msearch=o.placeSearch
               Msearch.search('赛格国际商场',function(status, result){
                 let pois=result.poiList.pois
                //  console.log(pois)
                 let latSum = 0;
                 let lngSum = 0;
                 self.markers=[]
                 if (pois.length > 0) {
                   pois.forEach(poi => {
                      let {lng, lat} = poi.location;
                    //  console.log(lng,lat)
                     lngSum += lng;
                     latSum += lat;
                     self.markers.push({location:[lng, lat],name:poi.name});
                   });
                   let center = {
                     lng: lngSum / pois.length,
                     lat: latSum / pois.length
                   };
                   self.mapCenter = [center.lng, center.lat];
                 }
               })
             }
          },
          toThisPlace:{
            dblclick(e){
              console.log(e.lnglat)
            }
          },
          lng: 0,
          lat: 0,
          loaded: false,
          markers: [],
          mapCenter: [122.5273285, 31.21515044],
          polyline:{
            path:[[121.5273285, 32.21515044],[122.5273285, 32.21515044],[123.5273285, 32.21515044]]
          },
          searchOption: {
            city: '西安市',
            citylimit: false
          },
          plugin: [
            {
            pName: 'ToolBar',
            autoPosition: true,
            events: {
              init(instance) {
                console.log(instance);
              }
            }
          },
          {
            pName: 'Scale',
            events: {
              init(instance) {
                console.log(instance);
              }
            }
          }
        ]
        }
      }
    }
</script>

<style scoped>
.amap-wrapper{
  width:100%;
  height:300px;
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
.preview{
  background-color: #464c5b;
}
.post{
  background-color: #464c5b;
}
.note{
  margin-right: 1rem;
}
.contentContainer{
  /*background-color: silver;*/
  padding:0.2rem;
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  position:relative;
}
.content{
  position:absolute;
  top:50%;
  right:0px;
}
.btn{
  width: 4rem;
  height: 4rem;
}
.add-content{
  width: 100%;
  height: 5rem;
  margin-top: 3rem;
  background-color: #657180;
  border: 1px solid #e3e8ee;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#text-content{
  width: 100%;
  /*min-height: 800px;*/
  background-color: #f5f7f9;
  padding: 1rem 2rem;
  margin-bottom: 4rem;
}
</style>
