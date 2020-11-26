import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue')
	},
	{
		path: '/catalog',
		name: 'Catalog',
		component: () => import('../views/Catalog.vue')
	},
	{
		path: '/catalog/virtual-reality',
		name: 'VirtualReality',
		component: () => import('../views/ProductCatalog.vue')
	},
	{
		path: '/catalog/monopods',
		name: 'Monopods',
		component: () => import('../views/ProductCatalog.vue')
	},
	{
		path: '/catalog/action-cameras',
		name: 'ActionCameras',
		component: () => import('../views/ProductCatalog.vue')
	},
	{
		path: '/catalog/fitness-trackers',
		name: 'FitnessTrackers',
		component: () => import('../views/ProductCatalog.vue')
	},
	{
		path: '/catalog/smartwatch',
		name: 'Smartwatch',
		component: () => import('../views/ProductCatalog.vue')
	},
	{
		path: '/catalog/quadcopters',
		name: 'Quadcopters',
		component: () => import('../views/ProductCatalog.vue')
	},
	{
		path: '/catalog/virtual-reality/:product',
		component: () => import('../views/Product.vue')
	},
	{
		path: '/catalog/monopods/:product',
		component: () => import('../views/Product.vue')
	},
	{
		path: '/catalog/action-cameras/:product',
		component: () => import('../views/Product.vue')
	},
	{
		path: '/catalog/fitness-trackers/:product',
		component: () => import('../views/Product.vue')
	},
	{
		path: '/catalog/smartwatch/:product',
		component: () => import('../views/Product.vue')
	},
	{
		path: '/catalog/quadcopters/:product',
		component: () => import('../views/Product.vue')
	},
	{
		path: '*',
		redirect: '/404'
	},
	{
		path: '/404',
		name: 'PageNotFound',
		component: () => import('../views/404.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})

export default router
