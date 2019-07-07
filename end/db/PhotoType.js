// 加载驱动
const mongoose = require('mongoose')

// 连接数据库
mongoose.connect('mongodb://localhost:27017/shoppingMall',{useNewUrlParser: true})

// 获取架构对象
const Schema = mongoose.Schema

// 定义图片类型文档
const PhotoType = new Schema({
	// 图片类型名称
	name:{
		type:String,
		require:true
	}
})
// 创建并导出数据模型
module.exports = mongoose.model('PhotoType',PhotoType)