<template>
  <v-app>
    <!-- appbar -->
    <v-app-bar app flat prominent shrink-on-scroll style="background-color: white;" class="font-title">
      <img :src="logoImage" title="취운화 로고;마름모" alt="취운화" style="height: 90%;" class="mv-auto" />

      <v-spacer />

      <v-toolbar-items>
        <v-tabs color="primary">
          <v-tab @click="$router.push('/')">취운화</v-tab>
          <v-tab @click="$router.push('/inquiry')">주문/문의</v-tab>
          <v-tab @click="$router.push('/class')">
            <v-badge color="primary" icon="mdi-exclamation" small>수업</v-badge>
          </v-tab>
          <div class="d-none d-sm-inline-block">
            <v-btn v-for="ch in social" :key="`gnb-intab-sns.${ch.channel}`"
              :href="ch.href" :title="ch.channel" :alt="`ch.channel 링크`"
              icon color="accent" target="_blank">
                <v-icon>{{ch.icon}}</v-icon>
            </v-btn>
          </div>
          <v-menu offset-y>
            <template #activator="{ on }">
              <v-btn icon color="accent" v-on="on" class="d-inline-block d-sm-none"><v-icon>mdi-dots-vertical</v-icon></v-btn>
            </template>
            <v-list dense>
              <v-list-item v-for="ch in social" :key="`gnb-menu-sns.${ch.channel}`"
                :href="ch.href" :title="ch.channel" :alt="`ch.channel 링크`"
                icon color="accent" target="_blank">
                  <v-list-item-avatar xs>
                    <v-icon color="primary">{{ch.icon}}</v-icon>
                  </v-list-item-avatar>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tabs>
      </v-toolbar-items>

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
            사업자 등록번호 (대표 김아름)
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
import logoImage from '@/assets/logo.svg'
import Router from '@/plugins/router'
import channels from '@/channels'

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
      logoImage,
      social: channels,
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

</style>
