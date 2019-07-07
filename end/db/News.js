// 加载驱动
const mongoose = require('mongoose')

//连接数据库
mongoose.connect('mongodb://localhost:27017/shoppingMall',{useNewUrlParser: true})

//获取架构对象
const Schema = mongoose.Schema

//定义模型,用于存储app中的新闻资讯
const News = new Schema({
    // 在定义文档时，会自动帮我们创建主键，名称为_id
    // 新闻资讯标题
	title:{
        type:String,
        require:true
    },
    // 资讯内容
    article:{
        type:String,
        require:true
    },
    // 资讯图片
    articleImg:{
        type:String,
        require:true
    },
    // 发表时间
    publishTime:{
        type:Date,
        default:Date.now
    },
    // 点击量
    count:Number,
    // 评论id
    commentId:[{
        type:Schema.ObjectId,
        require:true,
        ref:'Comments'
    }]
})

//导出模型
module.exports = mongoose.model('News',News)