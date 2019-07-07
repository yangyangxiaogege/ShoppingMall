<template>
	<div class="newsInfo-container">
		<!-- 资讯标题 -->
		<h1 class="newsInfo-title">{{newsInfo.title}}</h1>
		<!-- 资讯状态信息 -->
		<p class="newsInfo-status">
			<span>发表时间:{{newsInfo.publishTime | date_filter}}</span>
			<span>点击量:{{newsInfo.count}}</span>
		</p>
		<!-- 资讯内容 -->
		<div class="newsInfo-content">
			<pre>{{newsInfo.article}}</pre>
		</div>
		<!-- 评论区域 -->
		<comment-box :comments="comments"></comment-box>
	</div>
</template>
<script type="text/javascript">
	import { Toast } from 'mint-ui'
	// 导入评论子组件
	import comment from '../subcomponent/comment.vue'

	export default {
		data(){
			return {
				// 资讯id
				id:this.$route.params.id,
				newsInfo:{},
				comments:[]
			}
		},
		created(){
			this.getNewsInfoById()
		},
		methods:{
			// 根据新闻资讯id查询资讯信息
			getNewsInfoById(){
				this.$http.get('findNewsInfoById?_id='+this.id).then(result => {
					if (result.body.length == 0) {
						Toast('未找到相关资源,请稍后重试')
					}
					// console.log(result.body)
					this.newsInfo = result.body[0]
					this.comments = this.newsInfo.commentId
				},err => {
						Toast('未找到相关资源,请稍后重试')
				})
			}
		},
		components:{
			'comment-box':comment
		}
	}
</script>
<style type="text/css" lang="less" scoped>
	.newsInfo-container{
		.newsInfo-title{
			font-size: 18px;
			font-weight: bold;
			text-align: center;
			color: red;

		}
		.newsInfo-status{
			display: flex;
			justify-content: space-between;
			color: #226677;
		}
		.newsInfo-content{
			font-size: 14px;
			pre{
				background: white;
				color: #3366;
			}
		}
	}
</style>