import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta: { title: '春风而至'}
    },
    {
        path: '/category/:cate/:title',
        name: 'category',
        component: () => import('../views/Home.vue'),
        meta: { title: '分类', params: ['cate', 'title']}
    },
    {
        path: '/tags/:tagId/:tagName',
        name: 'tags',
        component: () => import('../views/Home.vue'),
        meta: { title: '标签', params: ['tagId', 'tagName']}
    },
    {
        path: '/search/:words',
        name: 'search',
        component: () => import('../views/Home.vue'),
        meta: { title: '搜索', params: 'words'}
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue'),
        meta: { title: '关于'}
    },
    {
        path: '/friend',
        name: 'friend',
        component: () => import('../views/Friend.vue'),
        meta: { title: '友链'}
    },
    {
        path: '/article/:id',
        name: 'article',
        component: () => import('../views/Articles.vue'),
        meta: { title: '文章'}
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    let title = '春风而至'
    if (to.meta.params){
        title = `${to.meta.title}:${to.params[to.meta.params] || ''} - ${title}`
    }else {
        title = `${to.meta.title} - ${title}`
    }
    document.title = title
    if (to.path !== from.path) {
        store.dispatch('setLoading', true);
    }
    next();
})
router.afterEach((to, from) => {
    // 最多延迟 关闭 loading
    setTimeout(() => {
        // chrome
        document.body.scrollTop = 0
        // firefox
        document.documentElement.scrollTop = 0
        // safari
        window.pageYOffset = 0
        store.dispatch('setLoading', false);
    }, 1200)

})
export default router
