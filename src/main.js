// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill'


import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import App from './App'
import router from './router'

import 'common/style/common.css'
/*引入公共样式*/
import 'common/js/language/validate'
import 'common/js/filter/filter'
import 'assets/font/iconfont.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
/*引入阿里矢量图标*/
import store from './store/store'
import VueCookie from 'vue-cookie'

import 'base/utils/directives.js'

Vue.use(ElementUI, { locale });
Vue.use(VueCookie);

Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function(el, { value }) {
        if (value) {
            el.focus();
        }
    }
})

NProgress.configure({
    easing: 'ease',  // 动画方式
    speed: 500,  // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3 // 初始化时的最小百分比
})

router.beforeEach((to, from, next) => {
    NProgress.start();
    next()

})

router.afterEach(() => {
    // 在即将进入新的页面组件前，关闭掉进度条
    NProgress.done()
})

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
