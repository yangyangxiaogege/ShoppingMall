<template>
	<div class="goods-info">
		<!-- 商品轮播图 -->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<carousels :carouselsImg="carouselsImg" :isfull="true"></carousels>
				</div>
			</div>
		</div>
		<!-- 商品购买区域 -->
		<div class="mui-card">
			<div class="mui-card-header">小米（MI）小米Note 164G双网通版</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class="price">
						<span class="market">市场价:￥9998</span>
						<span class="sale">销售价:￥998</span>
					</div>
					<div class="count">
						<span>购买数量:</span>
						<div id="numbox" class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
							<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
							<input id="test" class="mui-input-numbox" type="number" value="1" />
							<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
						</div>
					</div>
					<div class="operation">
						<mt-button type="danger" size="small" @click="goToShoppingCar">立即购买</mt-button>
						<mt-button type="primary" size="small"  @click="addToShoppingCart">加入购物车</mt-button>
					</div>
				</div>
			</div>
		</div>
		<!-- 做动画的小球 -->
		<transition
            @before-enter="beforeEnter" 
            @enter="enter"
            @after-enter="afterEnter"
        >
			<div ref="ball" class="ball" v-show="ballFlag">
				<span></span>
			</div>
        </transition>
		<!-- 商品参数 -->
		<div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>商品货号:111111</p>
					<p>库存情况:100件</p>
					<p>上架时间:xxxx-xx-xx</p>
				</div>
			</div>
			<div class="mui-card-footer">
				<mt-button type="danger" size="large" plain>图文介绍</mt-button>
				<mt-button type="primary" size="large" plain>商品评论</mt-button>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	// 轮播图子组件
	import carousels from '../subcomponent/Carousels.vue'
	// mui
	import mui from '../../lib/mui/js/mui.min.js'

	export default {
		data(){
			return{
				carouselsImg:[],
				ballFlag:false
			}
		},
		created(){
			this.getCarousel()
		},
		mounted(){
			// 初始化numbox
			mui('.mui-numbox').numbox()
		},
		methods:{
			getCarousel(){
				this.$http.get("findByImgRange?imgRange=home-carousels").then(result => {
					  // 成功了
					  // console.log(result.body)
			          this.carouselsImg = result.body
				},err => {
			          // 失败了
			          Toast("加载轮播图失败。。。")
				})
			},
			addToShoppingCart(){
				this.ballFlag = !this.ballFlag
				// 此处的数据是模拟数据
				// id:商品id price 商品单价 count 商品购买数量 selected 是否选中去结算
				var id = parseInt(Math.random()*5)
				var goodsInfo = {id:id,price:998,count:parseInt(mui('.mui-numbox').numbox().getValue()),selected:true}

				//this.$store.state.car.push(goodsInfo)
				// 调用vuex的方法只能有两个参数
				this.$store.commit("addToCar",goodsInfo)
			},
			goToShoppingCar(){
				this.addToShoppingCart()
				this.$router.push({ name: 'shoppingCar' })
			},
			beforeEnter(el){
				el.style.transform = "translate(0,0)"

			},
			enter(el,done){
				el.offsetWidth
				// 由于分辨率和滚动原因，小球需要做动画的距离是一个变量，所以需要通过计算得出
				var ballPosition = this.$refs.ball.getBoundingClientRect()
				var badgePosition = document.getElementById('badge').getBoundingClientRect()
				var top = (badgePosition.top - ballPosition.top) 
				var left = (badgePosition.left - ballPosition.left)  
				el.style.transform = `translate(${left}px,${top}px)`
				el.style.transition = "all 0.5s ease"
				done(el)
			},
			afterEnter(el){
				el.remove
				this.ballFlag = !this.ballFlag
				//console.log(this.ballFlag)
			}
		},
		components:{
			carousels
		}
	}
</script>
<style type="text/css" lang="less" scoped>
	.goods-info{
		background-color: #eee;
		overflow: hidden;
		.price{
			margin-bottom:5px;
		}
		.count{
			margin-bottom:5px;
		}
	}
	.ball{
		position: absolute;
		top: 384px; 
    	left: 142px; 
		z-index: 101;
		width: 18px;
		height: 18px;
		span{
			display: block;
			width: 100%;
			height: 100%;
			border-radius: 50%;
			background: red;

		}
	}
	.mui-card-footer{
		display: block;
	}
</style>