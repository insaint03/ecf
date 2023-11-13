<template>
    <v-card elevation="0">
        <v-card-text>
        <v-row class="mx-auto mx-2">
            <v-col cols="12" md="6" lg="4">
            <img :src="branding.logo" width="60%" style="max-width: 256px;" />
            </v-col>
            <v-col v-bind="branding.props">
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
                <h2 class="font-title" color="primary" style="width: 100%; max-width: 96vw; text-align: center; line-height: 1.5em; font-size: 20px;"
                    v-html="branding.header">
                </h2>
                <p>&nbsp;</p>
                <div style="width: 100%; max-width: 95vw; text-align: center;" class="font-subtitle">
                <p v-html="branding.content">
                </p>
                </div>
            </div>
            </v-col>
        </v-row>
        </v-card-text>
        <v-card-actions>
        <v-spacer />
        <v-btn @click="$router.push('/inquiry')" text outlined large color="primary" class="font-title"><v-icon>mdi-chat</v-icon> 문의하러 가기</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import data from '@/data'

export default {
    name: 'about',
    async created() {
        // let settings = await data.settings;
        let key = 'default';
        switch(true) {
        case this.is_iphone() :
            key = 'small'; break;
        case this.is_ipad() :
            key = 'default'; break;
        default:
            key = 'default'; break;
        }
        this.branding = (await data.settings).static.index.branding[key];
        console.log('about', key, this.branding);
    },
    methods: {
        is_iphone() {
            return /^(iPhone)/i.test(window.navigator.platform)
        },
        is_ipad() {
            return /^(iPad)/i.test(window.navigator.platform)
        }
    },
    data() {
        return {
            branding: {},   
        }
    }
}

</script>