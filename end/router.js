/**
 *路由模块
 *作用：
 *	根据不同的请求方式和路径，进行请求处理
 */

// 加载express框架
var express = require('express')

// 加载图片文档模块
var Images = require('./db/Images.js')

// 加载新闻资讯模块
var News = require('./db/News.js')

// 加载用户模块
var User = require('./db/User.js')

// 加载评论模块
var Comments = require('./db/Comments.js')

// 加载Photo类型
var PhotoType = require('./db/PhotoType.js')

// 加载Photo模块
var Photo = require('./db/Photo.js')

//创建路由容器
var router = express.Router()



// 根据图片应用范围查询图片
router.get("/findByImgRange",function(req,res){
    // 允许跨域请求
    res.header("Access-Control-Allow-Origin","*")
    Images.find(req.query,function(err,data){
        if (err) {
            return res.status(500).send('serverException')
        }
        // 将查询的结果转为json数据
        var imgJson = JSON.stringify(data)
        res.send(imgJson)
    })
})

// 获取新闻资讯
router.get('/findNews',function(req,res){
    // 允许跨域请求
    res.header("Access-Control-Allow-Origin","*")
     // new News({title:'幸福',article:"There's a girl in my heart",articleImg:'static/images/cbd.jpg',count:10,commentId:[{_id:'5cc9358004bb7f0ae8b983db'}]}).save()
      // new News({title:'木屋',article:"我想要一个这样的木屋，夏天挫冰吃瓜，冬天围炉取暖",articleImg:'static/images/shuijiao.jpg',count:2,commentId:[
      //       {_id:'5cc9358004bb7f0ae8b983db'},
      //       {_id:'5cc97b505fbfce0d1487412d'},
      //       {_id:'5cc97b505fbfce0d1487412e'},
      //       {_id:'5cc97b505fbfce0d1487412f'},
      //       {_id:'5cc97b505fbfce0d14874130'},
      //       {_id:'5cc97b505fbfce0d14874131'},
      //       {_id:'5cc97b505fbfce0d14874132'},
      //       {_id:'5cc97b505fbfce0d14874133'},
      //       {_id:'5cc97b505fbfce0d14874134'},
      //       {_id:'5cc97b505fbfce0d14874135'},
      //       {_id:'5cc97b505fbfce0d14874136'},
      //       {_id:'5cc97b505fbfce0d14874137'},
      //       {_id:'5cc97b505fbfce0d14874138'}
      //   ]}).save()
     // new News({title:'远眺',article:"Looking at the world quiely,finally boold boiling",articleImg:'static/images/yuantiao.jpg',count:5,commentId:[{_id:'5cc9358004bb7f0ae8b983db'}]}).save()
     // console.log('添加成功')
    News.find(req.query,function(err,data){
        if (err) {
            return res.status(500).send('serverException')
        }
        // console.log(data)
        // 将查询的结果转为json数据
        var newsJson = JSON.stringify(data)
        res.send(newsJson)
    })  
})

// 根据新闻资讯id查询资讯信息
router.get('/findNewsInfoById',function(req,res){
    // 允许跨域请求
    res.header("Access-Control-Allow-Origin","*")
    // Comments.find(function(err,data){
    //     console.log(data)
    // })
    // 添加评论信息
    // new Comments({userId:'5cc92ba17b51e12bb87038ce',content:'talking to the moon'}).save()
    // new Comments({userId:'5cc92ba17b51e12bb87038ce',content:'放不下的理由'}).save()
    // new Comments({userId:'5cc92ba17b51e12bb87038ce',content:'是不是会担心'}).save()
    // new Comments({userId:'5cc92ba17b51e12bb87038ce',content:'变成一只野兽'}).save()
    // new Comments({userId:'5cc92ba17b51e12bb87038ce',content:'walking on the room'}).save()
    // new Comments({userId:'5cc92ba17b51e12bb87038ce',content:'为心跳的节奏'}).save()
    // new Comments({userId:'5cc92ba17b51e12bb87038ce',content:'是不是会暂停'}).save()
    // new Comments({userId:'5cc92ba17b51e12bb87038ce',content:'在时间的尽头'}).save()
    // new Comments({userId:'5cc92ba17b51e12bb87038ce',content:'说不完的话'}).save()
    // new Comments({userId:'5cc92ba17b51e12bb87038ce',content:'找不完的借口'}).save()
    // new Comments({userId:'5cc92ba17b51e12bb87038ce',content:'是不是会狠心'}).save()
    // new Comments({userId:'5cc92ba17b51e12bb87038ce',content:'把我骄傲解剖'}).save()
    News.find(req.query).populate({
        path:'commentId',
        populate:{
            path:'userId'
        }
    }).exec((err,news) => {
        var newsJson = JSON.stringify(news)

       // console.log(newsJson)
        res.send(newsJson)
    })
})

// 获取Photo分类
router.get('/findPhotoType',function(req,res){
  // 允许跨域请求
  res.header("Access-Control-Allow-Origin","*")
  PhotoType.find(function(err,data){
     if (err) {
        return res.status(500).send('serverException')
     }
     res.send(data)
  })
})

// 根据Photo类型id获取Photo信息
router.get('/findPhotoByTypeId',function(req,res){
  // 允许跨域请求
  res.header("Access-Control-Allow-Origin","*")
  if (req.query.typeId == '5ccbd9bb5c1ac22e081a30d4') {
    // 查询所有
    Photo.find(function(err,data){
       if (err) {
          return res.status(500).send('serverException')
       }
       res.send(data)
    })  
    return
  }
  // 根据Phot类型id进行查询
  Photo.find(req.query,function(err,data){
     if (err) {
        return res.status(500).send('serverException')
     }
     res.send(data)
  })
})

// 根据photo id进行查询
router.get('/findPhotoById',function(req,res){
  // 允许跨域
  res.header('Access-Control-Allow-Origin','*')

  Photo.find(req.query,function(err,data){
     if (err) {
        return res.status(500).send('serverException')
     }
     res.send(data)
  })
})
//=================================================
router.get('/test',function(req,res){
  // new PhotoType({name:'全部'}).save() 5ccbd9bb5c1ac22e081a30d4
  // new PhotoType({name:'我的沈月'}).save() 5ccbd9bb5c1ac22e081a30d5
  // new PhotoType({name:'家居生活'}).save()
  // new PhotoType({name:'摄影设计'}).save()
  // new PhotoType({name:'明星美女'}).save()
  // new PhotoType({name:'清纯甜美'}).save()
  // PhotoType.find(function(err,data){
  //   console.log(data)
  // })
  // new Photo({title:'活泼可爱的小女生',url:'static/photos/timg.jpg',desc:'you are the most beautiful scenery in my heart',typeId:'5ccbd9bb5c1ac22e081a30d5'}).save()
  // new Photo({title:'你笑起来的样子',url:'static/photos/沈月.jpg',desc:'你笑起来的样子最为动人，两片薄薄的嘴唇在笑，长长的眼睛在笑，腮上两个陷得很举动的酒窝也在笑',typeId:'5ccbd9bb5c1ac22e081a30d5'}).save()
  // new Photo({title:'我想在五十年之后 我一定还是像现在一样爱你',url:'static/photos/沈月2.jpg',desc:'你是自由翱翔的海鸟，我是不起眼的小岛。累了，你可以在我这儿歇歇脚；饿了，可以在我这儿寻找你所需要。其实除了你，我啥都不要！',typeId:'5ccbd9bb5c1ac22e081a30d5'}).save()
  // new Photo({title:'等待',url:'static/photos/沈月3.jpg',desc:'一个人愿意等待，另一个人才愿意出现 。一个人愿意出现，另一个人才愿意奋不顾身 。一个人愿意奋不顾身，另一个人才愿意托付终身',typeId:'5ccbd9bb5c1ac22e081a30d5'}).save()
  // new Photo({title:'寒冬里的冬梅',url:'static/photos/沈月5.jpg',desc:'你如一朵寒梅，开在我的世界，也开在冰天雪地。你将我的心点缀得美丽，也将冰天雪地，描绘出美丽的画卷。你的绽放，告诉我，冬天就要结束，春回大地，心，总是暖暖的，再也是不怕那雪霜寒冷',typeId:'5ccbd9bb5c1ac22e081a30d5'}).save()
    Photo.find(function(err,data){
      console.log(data)
    }) 
   // console.log('添加成功')
  res.send('success')
})
//导出路由
module.exports = router;