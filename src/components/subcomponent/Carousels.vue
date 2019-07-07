<template>
	<mt-swipe :auto="4000">
		<!-- 组件中v-for必须绑定key -->
		<mt-swipe-item v-for="item in carouselsImg" :key="item._id">
			<img :src="'http://localhost:2007/'+item.url" :class="{'full':isfull}">
		</mt-swipe-item>
	</mt-swipe>
</template>
<script type="text/javascript">
	export default {
		props:['carouselsImg','isfull']
	}
</script>
<style type="text/css" lang="less" scoped>
	// 轮播图
	.mint-swipe{
		height:200px;
		.mint-swipe-item{
			img{
				height: 100%;
			}
		}
	}

	.full{
		width: 100%;
	}
</style>