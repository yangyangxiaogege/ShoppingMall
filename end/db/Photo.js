// 加载驱动
const mongoose = require('mongoose')

// 连接数据库
mongoose.connect('mongodb://localhost:27017/shoppingMall',{useNewUrlParser: true})

// 获取架构对象
const Schema = mongoose.Schema

// 定义图片类型文档
const Photo = new Schema({
	// 图片标题
	title:{
		type:String,
		require:true
	},
	// 图片路径
	url:{
		type:String,
		require:true
	},
	// 图片描述
	desc:String,
	// 上传日期
	uploadDate:{
		type:Date,
		default:Date.now
	},
	// 图片类型
	typeId:{
		type:Schema.ObjectId,
		require:true,
		ref:'PhotoType'
	}
})

// 创建并导出数据模型
module.exports = mongoose.model('Photo',Photo)