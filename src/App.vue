<template>
  <v-app>
    <v-navigation-drawer class="d-block d-sm-none" v-model="show_drawer" fixed>
      <div align="center" justify="center">
        <v-img src="images/logo.512.png" style="width: 128px; height: 128px; margin: 24px; cursor: pointer;" @click="$router.push('/')" />
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
                <v-btn v-for="s in social" :key="`gnb.nav-social.${s.title}`" :href="s.href" :title="s.title" 
                  icon fab color="primary">
                  <v-icon>{{ s.icon }}</v-icon>
                </v-btn>
                <v-btn href="https://naver.me/xPQNDayW" title="찾아오시는 길" alt="주소 - 서울특별시 서초구 논현로 5길 17 (양재동, 금산빌딩) 1F 취운화" target="_blank" icon fab color="primary">
                  <v-icon>mdi-map-marker-outline</v-icon>
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
      <img src="images/logo.svg" title="취운화 로고;마름모" alt="취운화" style="" class="mv-auto" @click="$router.push('/')" />

      <v-spacer />

      <v-toolbar-items class="d-none d-sm-inline-block">
        <v-tabs color="primary" :value="tab_index">
          <v-tab v-for="m in menu" :key="`gnb-${m.path}`" @click="$router.push(m.path)">
            <template v-if="m.badge">
              <v-badge color="secondary" v-bind="m.badge">{{ m.title }}</v-badge> 
            </template>
            <template v-else>
              {{ m.title }}
            </template>
          </v-tab>
          <div>
            <v-btn v-for="ch,ci in social" :key="`gnb-intab-sns.${ci}`"
              :href="ch.href" :title="ch.title" :alt="`${ch.title} 링크`"
              icon color="accent" target="_blank">
                <v-icon>{{ch.icon}}</v-icon>
            </v-btn>
            <v-btn :href=brand.venue title="찾아오시는 길" :alt="`${brand.address} ${brand.title}`" target="_blank" icon color="accent">
              <v-icon>mdi-map-marker-outline</v-icon>
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
            {{ brand.title }} / {{ brand.title_cn }} / {{ brand.title_en }}<br />
            사업자 등록번호 {{ brand.registration }} (대표 {{ brand.represent }})<br />
            <a :href=brand.venue target="_newwin" style="color: #9e9e9e; text-decoration: none;">{{ brand.address }} {{ brand.title }}  / 우.{{ brand.zipcode }}</a>
          </p>
          <p>
           &copy;{{ brand.title }} All Rights reserved
          </p>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import Router from '@/plugins/router'
// import channels from '@/channels'
import data from '@/data'

const menu = [
  {path: '/', title: '취운화'}, 
  {path: '/inquiry', title: '주문/문의'},
  {path: '/class', title: '수업', badge: {icon: 'mdi-exclamation'} },
]

export default {
  name: 'App',
  created() {
    (async ()=>{
      let conf = await data.settings;
      console.log(conf.channels);
      this.social = conf.channels;
      this.brand = conf.brand;
      this.static = conf.static.index;
    })();
  },
  methods: {
    openChannel(sns) {
      window.open(sns.href, '_blank');
    }
  },
  computed: {
    tab_index() {
      return this.menu.map((m)=>m.path).indexOf(this.$router.currentRoute.path) || 0;
    },
  },
  data() {
    return {
      routes: Router.Routes.filter((rt) => rt.routeTitle),
      show_drawer: false,
      menu,
      social: [],
      brand: {},
      static: {},

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

::-webkit-scrollbar {
  width: 2px;
  
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #052107;
  border-radius: 2px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #052107;
}

</style>
