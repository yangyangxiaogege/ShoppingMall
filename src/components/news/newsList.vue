<template>
	<!-- 新闻资讯列表 -->
	<ul class="mui-table-view">
		<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item._id">
			<router-link :to="'/home/newsInfo/'+item._id">
				<img class="mui-media-object mui-pull-left" :src="item.articleImg">
				<div class="mui-media-body">
					<h1>{{item.title}}</h1>
					<p class='mui-ellipsis'>
						<span>发表时间:{{item.publishTime | date_filter}}</span>
						<span>点击量：{{item.count}}</span>
					</p>
				</div>
			</router-link>
		</li>
	</ul>
</template>
<script type="text/javascript">
	import { Toast } from "mint-ui"

	export default {
		data(){
			return {
				// 新闻资讯列表
				newsList:[]
			}
		},
		created(){
			this.getNewsList()
		},
		methods:{
			// 获取新闻资讯列表
			getNewsList(){
				this.$http.get('findNews').then(result => {
					// Toast('加载新闻资讯列表成功')
					// console.log(result)
					this.newsList = result.body
				},err => {
					Toast('加载新闻资讯列表失败')
				})
			}
		}
	}
</script>
<style type="text/css" lang="less" scoped>
	.mui-table-view{
		.mui-table-view-cell{
			.mui-media-body{
				h1{
					font-size: 14px;
				}
				.mui-ellipsis{
					display: flex;
					justify-content: space-between;
					color: #226677;
				}
			}	
		}
	}
</style>