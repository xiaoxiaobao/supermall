// 加载axios框架
import axios from 'axios'

// 设置导出函数
export function request(config) {
	// 1.创建 axios 的实例
	const instance = axios.create({
		baseURL: 'http://123.207.32.32:8000/api/v1',
		timeout: 5000

	})

	// 2. axios的拦截器
	// 2.1 请求拦截的作用
	instance.interceptors.request.use(config => {
		return config
	},err => {
		console.log(err)
	})

	// 2.2 响应拦截
	instance.interceptors.response.use(res => {
		return res.data
	},err => {
		console.log(err)
	})

	return instance(config)

}