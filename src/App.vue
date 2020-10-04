<template>
  <v-app>
    <v-navigation-drawer class="d-block d-sm-none" v-model="show_drawer" fixed>
      <div align="center" justify="center">
        <v-img :src="logo_raster" style="width: 128px; height: 128px; margin: 24px; cursor: pointer;" @click="$router.push('/')" />
      </div>
      <v-divider />
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="m in menu" :key="`gnb.nav-${m.path}`" @click="$router.push(m.path)"
            class="font-subtitle" :color="`${ m.path == $route.path ? 'primary' : 'secondary' }`">
            <template v-if="m.badge">
                <v-badge color="secondary" v-bind="m.badge">{{ m.title }}</v-badge> 
              </template>
              <template v-else>
                {{ m.title }}
              </template>
          </v-list-item>
        </v-list-item-group>
        <v-divider />
        <v-list-item-group>
          <v-list-item>
            <v-list-item-content>
              <div class="d-flex justify-space-around" align="center">
                <v-btn v-for="s in social" :key="`gnb.nav-social.${s.channel}`" :href="s.href" :title="s.channel" 
                  icon fab color="primary">
                  <v-icon>{{ s.icon }}</v-icon>
                </v-btn>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-divider />
      </v-list>
    </v-navigation-drawer>

    <!-- appbar -->
    <v-app-bar app flat prominent shrink-on-scroll style="background-color: white;" class="font-title">
      <img :src="logo_raster" title="취운화 로고;마름모" alt="취운화" style="" class="mv-auto" @click="$router.push('/')" />

      <v-spacer />

      <v-toolbar-items class="d-none d-sm-inline-block">
        <v-tabs color="primary">
          <v-tab v-for="m in menu" :key="`gnb-${m.path}`" @click="$router.push(m.path)">
            <template v-if="m.badge">
              <v-badge color="secondary" v-bind="m.badge">{{ m.title }}</v-badge> 
            </template>
            <template v-else>
              {{ m.title }}
            </template>
          </v-tab>
          <div>
            <v-btn v-for="ch in social" :key="`gnb-intab-sns.${ch.channel}`"
              :href="ch.href" :title="ch.channel" :alt="`ch.channel 링크`"
              icon color="accent" target="_blank">
                <v-icon>{{ch.icon}}</v-icon>
            </v-btn>
          </div>
        </v-tabs>
      </v-toolbar-items>
      <v-app-bar-nav-icon class="d-inline-block d-sm-none" @click="show_drawer = !show_drawer"/>
    </v-app-bar>
    

    <!-- main -->
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer app flat absolute style="background-color: white; font-size: 9.5pt;">
      <v-row>
        <v-col class="grey--text">
          <p>
            취운화; Emerald Cloud Flower<br />
            사업자 등록번호 679-99-00718 (대표 김아름)
          </p>
          <p>
           &copy;취운화 All Rights reserved
          </p>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import logo_vector from '@/assets/logo.svg'
import logo_raster from '@/assets/logo.256.png'
import Router from '@/plugins/router'
import channels from '@/channels'

const menu = [
  {path: '/', title: '취운화'}, 
  {path: '/inquiry', title: '주문/문의'},
  // {path: '/class', title: '수업', badge: {icon: 'mdi-exclamation'} },
]

export default {
  name: 'App',
  methods: {
    openChannel(sns) {
      window.open(sns.href, '_blank');
    }
  },
  data() {
    return {
      routes: Router.Routes.filter((rt) => rt.routeTitle),
      logo_vector,
      logo_raster,
      social: channels,
      show_drawer: false,
      menu,

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app .font-title {
  font-family: '국립박물관문화재단클래식B', Avenir, serif;
}

#app .font-subtitle {
  font-family: '국립박물관문화재단클래식L', Avenir, serif;
}

#app header.v-app-bar img {
  cursor: pointer;
  height: 70%;
  margin-top: auto;
  margin-bottom: auto;
}

#app header.v-app-bar:not(.v-app-bar--is-scrolled) img {
  margin-top: 24px;
  margin-left: 32px;
}

</style>
