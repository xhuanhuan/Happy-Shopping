<template>
  <div>
  <el-amap-search-box class="search-box"
                      :search-option="searchOption"
                      :on-search-result="onSearchResult"
                      :events="search"></el-amap-search-box>
  <div class="amap-wrapper">
     <el-amap :plugin="plugin" :center="mapCenter">
       <!-- <el-amap-info-window v-if="toPlace.length>0" :position="toPlace" content="到这里去"></el-amap-info-window> -->
       <div v-for="(mark,index) in markers">
          <el-amap-marker animation="AMAP_ANIMATION_DROP"
                          :position="mark.location"
                          :title="mark.name"
                          :icon="mark.icon"
                          :events="toThisPlace">
          </el-amap-marker>
       </div>
          <el-amap-polyline :path="plan" strokeColor="red"></el-amap-polyline>
     </el-amap>
   </div>
   <div class="toolbar">
       <span v-if="loaded">
         location: lng = {{ lng }} lat = {{ lat }}
       </span>
       <span v-else>正在定位</span>

       <Select v-model="transSelected" style="width:200px;float:right;">
         <Option v-for="item in transList" :value="item.value" :key="item">{{ item.label }}</Option>
       </Select>
       <Select v-model="planSelected" @on-change="changePlan"  style="width:200px;float:right;">
         <Option v-for="item in plansList" :value="item.value" :key="item">{{ item.label }}</Option>
       </Select>
    </div>
    <!-- <div id="container"></div> -->
    <div id="panel"></div>
 </div>
</template>

<script>
import AMap from 'vue-amap'
export default{
  // computed:{
  //   plana: function(){
  //     let compare='disdance'
  //     let index=0
  //     switch(this.planSelected){
  //       case '1':compare='disdance';break;
  //       case '2':compare='time';break;
  //       case '3':compare='walking_distance';break;
  //       case '4':compare='cost';break;
  //       default: break;
  //     }
  //     let c=this.plans[0]
  //     // self.plans.forEach(function(o,i){
  //     //   if(o[compare]<c){
  //     //     index=i
  //     //   }
  //     // })
  //     // let plan=self.plans[index].path.map(function(item){
  //     //   return [item.lng,item.lat]
  //     // })
  //      console.log(this.plans)
  //     return this.plans[0].path.map(function(item){
  //       return [item.lng,item.lat]
  //     })
  //   }
  // },
  data(){
     let self = this
    return{
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
        // console.log(e)
        var location=e.target.G.position
        self.markers=self.markers.map(function(item){
          let location1=item.location
          if(location.lng===location1[0]&&location.lat===location1[1]){
            item.icon='https://raw.githubusercontent.com/xhuanhuan/Happy-Shopping/master/src/assets/end.png'
            self.toPlace=item.location
          }else{
            item.icon=''
          }
          return item
        })
        var trans= self.Transfer
        trans.setCity('西安')
        trans.search(self.mylocation,self.toPlace,function(status,result){
          console.log(result.plans)
          var distance=result.plans[0].distance
          var index=0
          result.plans.forEach(function(o,i){
            if(o.distance<distance){
              index=i
            }
          })
          self.plan=result.plans[index].path.map(function(item){
            return [item.lng,item.lat]
          })
          self.plans=result.plans
          console.log(self.plans)
        })
      }
    },
    transSelected:'',
    transList:[
      {
          value: '1',
          label: '步行'
      },
      {
          value: '2',
          label: '驾车'
      },
      {
          value: '3',
          label: '公交'
      },
    ],
    planSelected:'1',
    plansList:[
      {
          value: '1',
          label: '路径最短'
      },
      {
          value: '2',
          label: '时间最短'
      },
      {
          value: '3',
          label: '步行最少'
      },
      {
        value: '4',
        label: '最少换乘'
      }
    ],
    Transfer:{},
    lng: 0,
    lat: 0,
    loaded: false,
    mylocation:[],
    markers: [],
    mapCenter: [122.5273285, 31.21515044],
    plans: [],
    plan:[],
    colors: ['#2d8cf0','#19be6b','#ff9900','#ed3f14','#1c2438','#80848f','#dddee1'],
    searchOption: {
      city: '西安市',
      citylimit: false
    },
    plugin: [
      {
      pName: 'ToolBar',
      // autoPosition: true,
      events: {
        init(instance) {
          // console.log(instance)
        }
      }
    },
    {
      pName: 'Scale',
      events: {
        init(instance) {
          // console.log(instance)
        }
      }
    },
    {
      pName: 'Geolocation',
      events: {
        init(o) {
          o.getCurrentPosition((status, result)=>{
              // console.log(result)
            if (result && result.position) {
              self.lng = result.position.lng
              self.lat = result.position.lat
              self.mapCenter = [self.lng, self.lat]
              self.mylocation=self.mapCenter
                console.log(  self.mylocation)
              self.loaded = true
              self.$nextTick()
            }
          })
        }
      }
    },
    {
      pName: 'Transfer',
      events: {
        init(o) {
          self.Transfer=o
        }
      }
    }
    // {
    //   pName: 'Driving',
    //   events: {
    //     init(Driving) {
    //       console.log(Driving)
    //       self.Driving=Driving
    //     }
    //   }
    // },
    // {
    //   pName: 'Walking',
    //   events: {
    //     init(Walking) {
    //       // console.log(Walking)
    //       self.Walking=Walking
    //     }
    //   }
    // }
  ]
}
  },
  methods:{
    onSearchResult: function(pois){
      // console.log(pois)
      let latSum = 0;
      let lngSum = 0;
      this.markers=[]
      if (pois.length > 0) {
        pois.forEach(poi => {
          let {lng, lat} = poi;
          lngSum += lng;
          latSum += lat;
          this.markers.push({location:[lng, lat],name:poi.name});
        });
        let center = {
          lng: lngSum / pois.length,
          lat: latSum / pois.length
        };
        this.mapCenter=[center.lng, center.lat]
      }
      self.lng=0
      self.lat=0
    },
    changePlan: function(){
      let compare='disdance'
      let index=0
      switch(this.planSelected){
        case '1':compare='disdance';break;
        case '2':compare='time';break;
        case '3':compare='walking_distance';break;
        case '4':compare='cost';break;
        default: break;
      }
     let c=this.plans[0][compare]
     this.plans.forEach(function(o,i){
       if(o[compare]<c){
         index=i
       }
     })
     this.plan=this.plans[index].path.map(function(item){
       return [item.lng,item.lat]
     })
    }
  }
}
</script>
<style scoped>
.amap-wrapper{
  width:100%;
  height:300px;
}
.amap-demo {
  height: 300px;
}
#panel {
    position: absolute;
    background-color: white;
    max-height: 80%;
    overflow-y: auto;
    top: 10px;
    right: 10px;
    width: 250px;
    border: solid 1px silver;
}
</style>
