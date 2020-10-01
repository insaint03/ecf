import Vue from 'vue'
import VueRouter from 'vue-router'

// screen
import routes from '@/views/route'

Vue.use(VueRouter)

export default {
    Register() {
        // Vue.Use(VueRouter);
        return new VueRouter({
            routes: routes.map((scr)=> {
                return {
                    path: `${/^\//.test(scr.path) ? '' : '/'}${scr.path}`,
                    component: scr,
                }
            })
        });
        // return router;
    },
    Routes: routes,
}