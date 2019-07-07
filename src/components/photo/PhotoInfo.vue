<template>
	<div class="pinfo">
		<!-- 标题 -->
		<h3 class="pinfo-title">{{photo.title}}</h3>
		<p class="pinfo-status">
			<span>发表时间:{{photo.uploadDate | date_filter}}</span>
			<span>点击:0次</span>
		</p>	
		<hr>
		<!-- 缩略图区域 -->
		<vue-preview :slides="slide1" @close="handleClose"></vue-preview>
		<!-- 图片详细区域 -->
		<div class="pinfo-body">{{photo.desc}}</div>
		<!-- 评论区域 -->
		<comment-box :comments="comments"></comment-box>
	</div>
</template>
<script type="text/javascript">
	import commentBox from '../subcomponent/comment.vue'
	import { Toast } from 'mint-ui'
	export default {
		data(){
			return{
				// 当前photo的id
				id:this.$route.params.id,
				// 缩略图信息
				slide1: [],
				photo:{},
				// 评论信息
				comments:[]
		    }
		},
		created(){
			this.getPhotoInfoById(this.id)
			
		},
		methods:{
			// 根据图片id获取图片信息 
			getPhotoInfoById(photoId){
				this.$http.get('findPhotoById?_id='+photoId).then(result => {
					var slide = {
						src:'http://localhost:2007/'+result.body[0].url,
						msrc:'http://localhost:2007/'+result.body[0].url,
						title:result.body[0].title,
						alt:'picture',
						desc:result.body[0].desc,
						w:600,
						h:400	
					}
					this.slide1.push(slide)
					this.photo = this.slide1[0]
				},err => {
					Toast('获取图片信息失败')
				})
			},
			handleClose () {
		    	console.log('close event')
		    }
		},
		components:{
			'comment-box':commentBox
		}
	}
</script>
<style type="text/css" lang="less">
	.pinfo{
		.pinfo-title{
			font-size: 18px;
			font-weight: bold;
			color: #3362cc;
			text-align: center;
		}
		.pinfo-status{
			display: flex;
			justify-content: space-between;
		}
		.pinfo-body{
			margin-top:10px;
			padding:10px;
		}
	}
	// vie-preview 样式
	.my-gallery{
		width: 100%;
		figure{
			padding:0 10px;
			margin:0;
			width: 100%;
			a{	
				// width: 100%;	
				img{
					width: 100%;
				}
			}	
		}
	}
</style>