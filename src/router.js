import VueRouter from 'vue-router'

// 导入tabbar控制的组件
import home from './components/tabbar/HomeContainer.vue'
import member from './components/tabbar/MemberContainer.vue'
import shoppingCart from './components/tabbar/ShoppingCart.vue'
import search from './components/tabbar/SearchContainer.vue'
import newsList from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'
import photoList from './components/photo/photoList.vue'
import photoInfo from './components/photo/photoInfo.vue'
import goodsList from './components/goods/GoodsList.vue'
import goodsInfo from './components/goods/GoodsInfo.vue'

var router = new VueRouter({
	// 匹配规则
	routes:[
		{path:'',redirect:'/home'},
		{path:'/home',component:home},
		{path:'/home/newsList',component:newsList},
		{path:'/home/newsInfo/:id',component:newsInfo},
		{path:'/member',component:member},
		{path:'/shoppingCart',component:shoppingCart,name:"shoppingCar"},
		{path:'/search',component:search},
		{path:'/home/photoList',component:photoList},
		{path:'/home/photoInfo/:id',component:photoInfo},
		{path:'/home/goodsList',component:goodsList},
		{path:'/home/goodsInfo/:goodsId',component:goodsInfo,name:"goodsInfo"}
	],
	// 覆盖默认的高亮类
	linkActiveClass:'mui-active' 
})

export default router