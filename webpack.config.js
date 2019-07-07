const path = require('path')

const webpack = require('webpack')

const htmlWebpackPlugin = require('html-webpack-plugin')

const vueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
	// 入口
	entry:path.join(__dirname,'./src/main.js'),
	// 出口
	output:{
		path:path.join(__dirname,'./dist'),
		
		filename:'bundle.js'
	},
	// 第三方模块加载器
	module:{
		rules:[
			{test:/\.css$/,use:['style-loader','css-loader']},
			{test:/\.less$/,use:['style-loader','css-loader','less-loader']},
			// 处理字体文件的路径问题
			{test:/\.(ttf|svg|woff|woff2|eot)$/,use:'url-loader'},
			// 处理ES 高级语法
			{test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
			{test:/\.vue$/,use:'vue-loader'}
		]
	},
	plugins:[
		// 创建一个自动生成html 页面的对象
		new htmlWebpackPlugin({
			// 指定模板页面,将来会根据该页面在内存中生成一份一模一样的页面
			template:path.join(__dirname,'./src/index.html'),
			// 指定生成的页面的名称
			filename:'index.html'
		}),
		new vueLoaderPlugin()
	]

}
