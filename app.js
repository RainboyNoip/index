/* 组件 */
Vue.component('row-one',{
    props:['data'],
    template:`<div>
                    <span class="logo"><img :src="'static/logo/'+data.logo" alt=""> </span>
                    <a :href="data.href">{{data.name}}</a>
                </div>
                `
})

Vue.component('row',{
    props:['list'],
    template:`
    <div class="row">
        <template v-for="l in list">
            <row-one :data="l"></row-one>
        </template>
    </div>
    `
})

const chunk = function(arr,size){
  return Array.from({ length: Math.ceil(arr.length / size) }, function(v, i){
      return arr.slice(i*size,i*size+size)
  })
}

var app = new Vue({
    data:{
        mysites:sites
    },
    el:'#app',
    computed:{
        _sites(){
            return chunk(this.mysites,4)
        }
    }
})
