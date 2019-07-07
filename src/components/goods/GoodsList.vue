<template>
	<!-- 商品列表 -->
	<!-- 在移动端使用click有时侯会有延迟，所以可以使用tap代替click -->
	<div class="goods-list" @tap="gotoGoodsInfo">
		<!-- 商品 -->
		<div class="goods-item">
			<img src="static/images/shuijiao.jpg">
			<h3 class="goods-title">小米全球最nx系列终极版</h3>
			<div class="goods-info">
				<p class="goods-price">
					<span class="new">$899</span>
					<span class="old">$998</span>
				</p>
				<p class="goods-status">
					<span class="status-name">热卖中</span>
					<span class="goods-count">共60件</span>
				</p>
			</div>
		</div>
		<div class="goods-item">
			<img src="static/images/timg.jpg">
			<h3 class="goods-title">小米全球最nx系列终极版</h3>
			<div class="goods-info">
				<p class="goods-price">
					<span class="new">$899</span>
					<span class="old">$998</span>
				</p>
				<p class="goods-status">
					<span class="status-name">热卖中</span>
					<span class="goods-count">共60件</span>
				</p>
			</div>
		</div>
		<div class="goods-item">
			<img src="static/images/timg.jpg">
			<h3 class="goods-title">小米全球最nx系列终极版</h3>
			<div class="goods-info">
				<p class="goods-price">
					<span class="new">$899</span>
					<span class="old">$998</span>
				</p>
				<p class="goods-status">
					<span class="status-name">热卖中</span>
					<span class="goods-count">共60件</span>
				</p>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){return {}},
		methods:{
			// 使用编程时导航（即使用js控制页面跳转）进入商品详情页面
			// 这里通过js控制vue-router
			gotoGoodsInfo(){
				this.$router.push({ name: 'goodsInfo', params: { goodsId: '123' } })
			}
		}
	}
</script>
<style type="text/css" lang="less" scoped>
	.goods-list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 10px;
		.goods-item{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 49%;
			min-height: 183px;
			border: 1px solid gray;
			box-shadow: 0 0 5px gray;
			margin-bottom: 10px;
			img{
				width: 100%;
			}
			.goods-title{
				font-size: 14px;
			}
			.goods-info{
				background: rgba(0,0,0,0.2);
				.goods-price{
					margin: 0;
					padding: 0;
					.new{
						font-size:16px;
						color: red;
					}
					.old{
						text-decoration: line-through;
					}
				}
				.goods-status{
					margin: 0;
					padding: 0;
					display: flex;
					justify-content: space-between;
				}
			}

		}
	}
</style>