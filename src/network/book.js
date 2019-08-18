import {request} from './request'

// 1. 请求
export function getBookMultidata() {
	return request({
		url: '/home/multidata'
	})
}

// 2.请求 列表数据
export function getHomeGoods(type,page) {
	return request({
		url: '/home/data',
		params: {
			type,
			page
		}
	})
}