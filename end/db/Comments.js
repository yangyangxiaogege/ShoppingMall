// 加载驱动
const mongoose = require('mongoose')

//连接数据库
mongoose.connect('mongodb://localhost:27017/shoppingMall',{useNewUrlParser: true})

//获取架构对象
const Schema = mongoose.Schema

//定义模型,用于存储app中的图片资源
const Comments = new Schema({
    // 用户id
    userId:{
        type:Schema.ObjectId,
        require:true,
        ref:'User'
    },
    // 评论内容
    content:{
        type:String,
        require:true
    },
    // 发表时间
    publishTime:{
        type:Date,
        default:Date.now
    }
})

//导出模型
module.exports = mongoose.model('Comments',Comments) 