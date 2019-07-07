// 导入Vue
import Vue from 'vue'

// 导入vuex，进行状态管理
import Vuex from 'vuex'
Vue.use(Vuex)

// 导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.min.css'

// 导入mui
import './lib/mui/css/mui.min.css'
// 导入mui拓展图标样式
import './lib/mui/css/icons-extra.css'

// 导入mint-ui需要的样式（由于目前还没有成功配置babel-plugin-component,所以需要手动导入mint-ui样式）
import 'mint-ui/lib/style.css'

// 按需导入mint-ui组件
// import { Header,Button} from 'mint-ui'
// import { Swipe,SwipeItem,Lazyload } from 'mint-ui'
// // 在Vue上注册全局组件
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name,Button)
// // 用于实现懒加载
// Vue.use(Lazyload)
// 注意，如果使用mint-ui中的懒加载技术，需要导入整个mint-ui
import MintUi from 'mint-ui'
Vue.use(MintUi)

// 导入图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 导入vue-resource 用于进行异步数据请求
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 设置全局的请求根路径
Vue.http.options.root = 'http://localhost:2007'

// 导入路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router.js'

// 导入App根组件
import App from './App.vue'

// 导入日期格式化插件
import moment from 'moment'

// 定义全局日期过滤器
Vue.filter("date_filter",function(dateStr,pattern = 'YYYY-MM-DD'){
	// var date = new Date(dateStr)
	// var y = date.getFullYear()
	// var m = date.getMonth()+1
	// var d = date.getDate()
	// return `${y}-${m}-${d}`
	//直接调用得到的是当前日期
	//moment()
	return moment(dateStr).format(pattern)
})

// 每次进入时，将localStorage中的car数据同步到项目中
var car = JSON.parse(localStorage.getItem('car') || '[]')
// 创建一个sotre进行数据管理
var store = new Vuex.Store({
  state:{
    car:car
  },
  mutations:{
  	// 添加商品到购物车
    addToCar(state,goodsInfo){
    	var flag = true
    	// 如果购物车中已经存在该商品，则直接修改该商品的数量，否则添加一条新的记录
    	state.car.forEach((item,i) => {
  			if (goodsInfo.id == item.id) {
  				item.count = goodsInfo.count
  				flag = false
  				return
  			}
  		})
  		if(flag) state.car.push(goodsInfo)

  		// 将购物车中的数据存储到本地的store中
  		localStorage.setItem('car',JSON.stringify(state.car))
    },
    // 更新购物车中的数据
    updateCar(state,goodsList){
      state.car = goodsList
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    // 移除商品
    removeGoods(state,goodsId){
      state.car.forEach((item,i) => {
        if (item.id == goodsId) {
          state.car.splice(i,1)
          localStorage.setItem('car',JSON.stringify(state.car))
          return
        }
      })
    }
  },
  getters:{
  	carNum:state => {
  		var carNum = 0
  		state.car.forEach((item,i) => {
  			carNum += parseInt(item.count)
  		})
  		return carNum
  	}
  }
})

// 创建vm实例
var vm = new Vue({
	el:'#app',
	data:{},
	methods:{},
	render:c => c(App),
	// 挂载路由
	router,
	// 挂载store
	store
})