<template>
	<div>
		<!-- 轮播图区域 -->
		<carousels :carouselsImg="carouselsImg" :isfull="true"></carousels>
		<!-- 九宫格区域  -->
		 <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
                   	<img src="/src/images/menu1.png">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoList">
                   	<img src="/src/images/menu2.png">
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodsList">
                   	<img src="/src/images/menu3.png">
                    <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   	<img src="/src/images/menu4.png">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   	<img src="/src/images/menu5.png">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   	<img src="/src/images/menu6.png">
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul> 
	</div>
</template>
<script type="text/javascript">
	import { Toast } from "mint-ui"
	// 导入轮播图子组件
	import carousels from '../subcomponent/Carousels.vue'

	export default {
		data(){
			return {
				carouselsImg:[]
			}
		},
		created(){
			this.getCarousel()
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
			}
		},
		components:{
			carousels
		}
	}
</script>
<style type="text/css" scoped lang="less">
	// 美化九宫格
	.mui-grid-view.mui-grid-9{
		background: #fff;
		border: none;
		.mui-table-view-cell{
			border: none;
			img{
				width: 60px;
				height: 60px;
			}
			.mui-media-body{
				font-size: 13px;
			}
		}
	}
</style>