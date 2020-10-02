<template>
  <v-app>
    <!-- appbar -->
    <v-app-bar app flat prominent shrink-on-scroll style="background-color: white;">
      <v-toolbar-title>
        <router-link to="/">
          <v-img src="/logo.rect.png" contain title="취운화 로고;마름모" alt="취운화" height="100%" />
        </router-link>
      </v-toolbar-title>

      <v-spacer />

      <v-toolbar-items>
        <template v-for="rt in routes">
          <v-btn :key="`app.route.key-${rt.path}`"
            @click="$router.push(rt.path)"
            text ripple>
            {{ rt.routeTitle }}
          </v-btn>
        </template>
        <!-- social buttons -->
        <template v-for="sns in social">
          <v-btn :key="`app.social.key-${sns.channel}`"
            @click="openChannel(sns)"
            icon ripple>
            <v-icon>{{ sns.icon }} </v-icon>
          </v-btn>
        </template>
      
      </v-toolbar-items>

    </v-app-bar>

    <!-- main -->
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer app flat absolute>
      <v-row>
        <v-col>
          취운화; Emerald Cloud Flower<br />
          사업자 등록번호 (대표 김아름)<br />
        </v-col>
        <v-col class="grey--text">
          
        </v-col>
        <v-col class="grey--text" align="right">
          사이트의 모든 사진 및 디자인, 저작물은 <br />
          취운화의 배타적 소유로 대한민국 저작권법을 적용 받습니다.<br />
          All Rights reserved &copy;EmeraldCloudFlower<br />
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>

import Router from '@/plugins/router'

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
      social: [
        { channel: 'instagram', href: 'https://www.instagram.com/emerald_cloud_flower/', icon: 'mdi-instagram' },
        { channel: 'twitter', href: 'https://twitter.com/EmeraldCloud_F', icon: 'mdi-twitter' },
      ],
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
</style>
