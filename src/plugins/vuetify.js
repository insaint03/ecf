import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import templateScreen from '@/template'

export default (function(Vue) {
    Vue.use(Vuetify);
    Vue.component(templateScreen.name, templateScreen);
    
    return new Vuetify();
})