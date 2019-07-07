<template>
	<div id="main">
		<!-- 头部固定区域 -->
		<mt-header fixed title="洋洋商城">
			<span @click="goBack" slot="left" v-show="flag">
			    <mt-button icon="back">返回</mt-button>
			</span>
		</mt-header>
		<!-- 路由router-view 区域，根据点击的tabbar进行切换 -->
		<transition>
			<router-view></router-view>
		</transition>
		<!-- 底部，tabbar 区域，改变路由地址 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/shoppingCart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span id="badge" class="mui-badge">{{$store.getters.carNum}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				flag:false
			}
		},
		created(){
			if (this.$route.path != '/home') {
				this.flag = true
			}
		},
		props:["carNum"],
		methods:{
			goBack(){
				this.$router.go(-1)
			}
		},
		watch:{
			'$route.path':function(newVal){
				if (newVal == '/home') {
					this.flag = false
				}else {
					this.flag = true
				}
			}
		}
	}
</script>
<style type="text/css" scoped>
	.mint-header{
		z-index: 100;
	}
	.mui-bar{
		z-index: 100;
	}
	#main{
		padding-top: 40px;
		padding-bottom: 50px;
		overflow-x: hidden;
	}
	/*实现组件切换时的动画效果*/
	.v-enter{
		/*opacity: 0;*/
		transform: translateX(100%);
	}
	.v-leave-to{
		/*opacity: 0;*/
		transform: translateX(-100%);
		position: absolute;
	}
	.v-enter-active,
	.v-leave-action{
		transition:all 0.5s ease;
	}

	/*使用了mui中的js文件后，由于命名冲突，导致tabar切换失效，所以需要改类名解决该问题*/
	.mui-bar-tab .mui-tab-item1{
		display: table-cell;
	    overflow: hidden;
	    width: 1%;
	    height: 50px;
	    text-align: center;
	    vertical-align: middle;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #929292;
	}
	.mui-bar-tab .mui-tab-item1.mui-active{
		color:#0062cc;
	}
	.mui-bar-tab .mui-tab-item1 .mui-icon {
	    top: 3px;
	    width: 24px;
	    height: 24px;
	    padding-top: 0;
	    padding-bottom: 0;
	}
	.mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
	    font-size: 11px;
	    display: block;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
</style>