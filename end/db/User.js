// 加载驱动
const mongoose = require('mongoose')

//连接数据库
mongoose.connect('mongodb://localhost:27017/shoppingMall',{useNewUrlParser: true})

//获取架构对象
const Schema = mongoose.Schema

//定义模型,用于存储用户信息
const User = new Schema({
    // 用户名
    name:{
        type:String,
        require:true
    },
    // 用户密码
    password:{
        type:String,
        require:true
    },
    // 用户地址
    address:String,
    // 用户电话
    phone:String,
    // 用户头像
    headImg:String,
    // 入网日期
    createDate:{
        type:Date,
        default:Date.now
    }
})

//导出模型
module.exports = mongoose.model('User',User) 