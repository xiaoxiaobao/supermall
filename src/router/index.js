import Vue from 'vue'
import VueRouter from 'vue-router'

// 1.安装插件router
Vue.use(VueRouter)

const book = () => import('../views/book/book.vue')
const find = () => import('../views/find/find.vue')
const msg = () => import('../views/msg/msg.vue')
const menu = () => import('../views/menu/menu.vue')


// 2. 创建router
const routes = [
    {
    	path: '',
    	redirect: '/book'
    },
    {
    	path: '/book',
    	component: book
    },
    {
    	path: '/find',
    	component: find
    },
    {
    	path: '/msg',
    	component: msg
    },
   	{
   		path: '/menu',
   		component: menu
   	}
  ]
const router = new VueRouter({
	routes,
	mode:'history'
})

export default router