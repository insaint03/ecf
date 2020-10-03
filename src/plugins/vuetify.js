import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import templateScreen from '@/template'

import colors from 'vuetify/lib/util/colors'

export default (function(Vue) {
    Vue.use(Vuetify);
    Vue.component(templateScreen.name, templateScreen);
    
    return new Vuetify({
        theme: {
            themes: {
                light: {
                    base: colors.shades.white,
                    primary: '#1D3E1F',
                    secondary: '#527A55',
                    accent: '#052107',

                }
            }
        }
    });
})