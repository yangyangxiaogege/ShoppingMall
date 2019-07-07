<template>
	<div class="comment-container">
		<h3>发表评论</h3>
		<textarea placeholder="请输入评论内容(最多不能超过120字)" maxlength="120"></textarea>
		<mt-button type="primary" size="large">发表评论</mt-button>
		<ul class="comment-list">
			<li class="comment-item" v-for="item in comms" :key="item._id">
				<p class="comment-title">
					<span>用户：{{item.userId.name}}</span>
					<span>发表日期:{{item.publishTime | date_filter}}</span>
				</p>
				<span class="comment-body">{{item.content}}</span>
			</li>
		</ul>
		<mt-button type="danger" size="large" @click="upOrDownComment">{{upOrDown}}</mt-button>
	</div>
</template>
<script type="text/javascript">
	export default {
		props:['comments'],
		data(){
			return {
				// 评论信息
				comms:this.comments,
				upOrDown:'加载全部'
			}
		},
		mounted(){
			// 解决浏览器渲染问题，方式1
			setTimeout(() => {
				this.initComment()
			},50)
		},
		methods:{
			// 初始化评论数据
			initComment(){
				this.comms = []
				// 最初显示五条评论数据
				for(var i = 0;i<this.comments.length;i++){
					this.comms[i] = this.comments[i]
					if (i == 4) break;
				}
			},
			// 加载全部或收起数据
			upOrDownComment(){
				if(this.upOrDown == '加载全部'){
					// 修改状态信息
					this.upOrDown = '收起'
					// 获取全部数据
					this.comms = this.comments
				}else{
					// 修改状态信息
					this.upOrDown = '加载全部'
					// 重新初始化评论数据
					this.initComment()
				}
			}
		}
	}
</script>
<style type="text/css" lang="less" scoped>
	.comment-container{
		h3{
			font-size: 16px;
			font-weight: bold;
		}
		textarea{
			margin: 0;
			font-size:14px;
			height: 100px;
		}
		.comment-list{
			list-style: none;
			padding: 0;
			margin:0;
			.comment-item{
				margin:5px 0;
				p{
					display: flex;
					justify-content: space-between;
					font-size:15px;
					color:white;
					background: #246773;
				}
				span{
					font-size:14px;
				}
			}
		}
	}
</style>