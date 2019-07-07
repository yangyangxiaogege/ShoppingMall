#洋洋App

## 概述
对vue进行练习，使用了一系列vue相关技术，例如vue-resource(进行组件路由操作)，
vuex(进行组件通信，操作共享数据)，vue-preview(图片预览)等
并且使用webpack打包工具，对象目进行打包操作，进行便捷开发，
后台使用node，mongodb,express进行搭建


##制作App首页
	1. 头部使用的是mint-ui中的组件
	2. 底部使用的是mui中的tabbar
		+ 制作tabbar 中的小图标
		+ 可以在下载mui文件中找到icon.html查找需要的图标，然后将其类样式名称拷贝使用
		+ 如果icon.html中未找到，可以在icon-extra.html中查看
		+ 使用icon-extra.html中的图标需要导入icon-extra.css,此样式文件内部引用了mui-icons-extra.ttf文件 
	3. 中间是用来显示匹配路由的router-view区域
	4. 将tabar修改为路由链接

##制作HomeContainer
	1. 由一个轮播图和一个九宫格组成
	2. 轮播图中的数据由洋洋App后台提供:http://localhost:2007/findByImgRange?imgRange=home-carousels
	3. 九宫格使用的是mui中的gird-default中的布局

##制作新闻资讯页面
	1. 属于home的一个子页面，通过新闻资讯路由打开
	2. 使用的是mui 中的media-list布局
		
##wepack移除严格模式
	1. 安装处理该问题的包
	
	```shell
	>npm install @babel/plugin-transform-strict-mode -D
	>npm install @babel/plugin-transform-modules-commonjs -D
	```

	2. 修改.babelrc文件
	```json
	{
	  "plugins": [
	    ["@babel/plugin-transform-modules-commonjs", { "strictMode": false }]
	  ]
	}
	```