<template>
	<div class="shopping-car">
		<div class="goods-list">
			<div class="mui-card"  v-for="(item,idx) in goodsList">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div class="goods-item">
							<!-- 选择器 v-model="value" -->
							<mt-switch v-model="item.selected"></mt-switch>
							<img src="/static/images/timg.jpg">
							<div class="info">
								<h3>逆光也清晰，照亮你的美</h3>
								<div class="operation">
									<span>￥{{item.price}}</span>
									<div id="numbox" class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
										<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
										<input id="test" class="mui-input-numbox" type="number" :value="item.count" @change="updateCar(item.id,idx)" ref="numbox" readonly />
										<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
									</div>
									<a href="javascipt:void(0);" @click="removeGoods(item.id,idx)">删除</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="buy">
			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div class="buy-info">
							<p>
								<span>总计（不含运费）</span>
								<br>
								<span>已勾选商品<strong class="red">{{settlement.count}}</strong>件,总价:<strong class="red">￥{{settlement.price}}</strong></span>
							</p>
							<mt-button type="danger">去结算</mt-button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import mui from '../../lib/mui/js/mui.min.js'

	export default {
		data(){return{
			goodsList:[]
		}},
		created(){
			this.goodsList = JSON.parse(localStorage.getItem('car') || '[]')
		},
		mounted(){
			// 初始化numbox
			mui('.mui-numbox').numbox()
		},
		methods:{
			removeGoods(goodsId,idx){
				// 1.将商品从goodsList中移除
				this.goodsList.splice(idx,1)
				// 2.将商品从localStorage中移除
				this.$store.commit('removeGoods',goodsId)
			},
			updateCar(goodsId,idx){
				this.goodsList.forEach((item,i) => {
					if (item.id == goodsId) {

						item.count = this.$refs.numbox[idx].value
					}
				})
				this.$store.commit('updateCar',this.goodsList)
			}
		},
		computed:{
			settlement(){
				var count = 0
				var price = 0
				this.goodsList.forEach((item,i) => {
					if (item.selected) {
						count += 1
						price += (item.count*item.price)
					}
				})

				return {count:count,price:price}
			}
		}
	}
</script>
<style type="text/css" lang="less" scoped>
	.shopping-car{
		background-color: #eee;
		overflow: hidden;
		.goods-list{
			img{
				width: 50px;
				height: 50px;
			}
			.goods-item{
				display: flex;
				justify-content: space-around;
				align-content: center;
				.info{
					h3{
						font-size: 16px;
						font-weight: bold;
					}
					span{
						color: red;
					}
				}	
			}
		}
		.buy{
			.buy-info{
				display: flex;
				justify-content: space-between;
			}
		}

	}
	.red{
		color:red;
		font-weight:bold;
		font-size:16px;
	}
</style>