<template>
	<div>
		<!-- 顶部滑动导航 -->
		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a v-for="item in photoType" :key="item._id" :class="['mui-control-item',item._id == '5ccbd9bb5c1ac22e081a30d4' ? 'mui-active' : '']" data-wid="tab-top-subpage-1.html" @click="getPhotoByTypeId(item._id)">
						{{item.name}}
					</a>
				</div>
			</div>
		</div>
		<!-- 图片区域 -->
		<ul class="photo-list">
			<router-link v-for="item in photoList" :key="item._id" tag="li" :to="'/home/photoInfo/'+item._id">
				<img v-lazy="'http://localhost:2007/'+item.url">
				<div class="photo-info">
					<h3 class="photo-title">{{item.title}}</h3>
					<div class="photo-body">{{item.desc}}</div>
				</div>
			</router-link>
		</ul>
	</div>
</template>
<script type="text/javascript">
	import mui from '../../lib/mui/js/mui.min.js'
	import { Toast } from 'mint-ui'
	export default{
		data(){
			return{
				// 图片类型
				photoType:[],
				// 图片集合
				photoList:[]
			}
		},
		created(){
			this.getPhotoType()

			// 获取全部
			this.getPhotoByTypeId('5ccbd9bb5c1ac22e081a30d4')
		},
		mounted(){
			// 初始化滑动导航
			mui('.mui-scroll-wrapper').scroll({
				deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			});
		},
		methods:{
			// 获取图片分类
			getPhotoType(){
				this.$http.get('findPhotoType').then(result => {
					this.photoType = result.body
				},err => {
					Toast('图片分类信息获取失败，请稍后重试')
				})
			},
			// 获取全部图片
			getPhotoByTypeId(photoTypeId){
				this.$http.get('findPhotoByTypeId?typeId='+photoTypeId).then(result => {
					this.photoList = result.body
				},err => {
					Toast('图片信息获取失败，请稍后重试')
				})
			}
		}
	}
</script>
<style type="text/css" lang="less" scoped>
// CSS 属性 touch-action 用于指定某个给定的区域是否允许用户操作，以及如何响应用户操作（比如浏览器自带的划动、缩放等）
* { touch-action: none; } 

.photo-list{
	margin:0;
	padding: 10px;
	li{
		position: relative;
		list-style: none;
		margin-bottom: 10px;
		background: white;
		box-shadow: 0 0 9px #999;
		img[lazy='loaded']{
			width: 100%;
			height: 100%;
			margin:auto;
		}
		img[lazy='loading']{
			width: 40px;
			height: 300px;
			margin:auto;
		}
		.photo-info{
			position: absolute;
			width:100%;
			max-height: 84px;
			bottom: 0;
			color: white;
			background-color: rgba(0,0,0,0.5);			
			.photo-title{
				font-size:16px;
				font-weight: bold;
			}
			.photo-body{
				font-size:14px;
				line-height: 30px;
			}
		}
	}
}
</style>