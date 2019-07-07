// 加载驱动
const mongoose = require('mongoose')

//连接数据库
mongoose.connect('mongodb://localhost:27017/shoppingMall',{useNewUrlParser: true})

//获取架构对象
const Schema = mongoose.Schema

//定义模型,用于存储app中的图片资源
const Images = new Schema({
	// 图片路径
    url:{
        type:String,
        required:true
    },
    // 图片描述
    desc:{
        type:String
    },
    // 图片属于哪个范围使用的
   	imgRange:String
})

//导出模型
module.exports = mongoose.model('Images',Images) 