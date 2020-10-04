import Vue from 'vue'
import VueRouter from 'vue-router'

// screen
import routes from '@/views/route'

Vue.use(VueRouter)

let router =  new VueRouter({
    routes: routes.map((scr)=> {
        return {
            path: `${/^\//.test(scr.path) ? '' : '/'}${scr.path}`,
            component: scr,
        }
    }),
});
router.afterEach((to, from)=>{
    window.dataLayer.push({
        event: 'route.move',
        path: to.path,
        query: to.query,
        params: to.params,
        from: from.path,
    });
});

export default {
    Register() {
        // Vue.Use(VueRouter);
        return router;
        // return router;
    },
    Routes: routes,
}