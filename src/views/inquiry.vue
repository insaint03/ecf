<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" lg="4">
        <v-card elevation="1">
          <v-toolbar dark flat color="secondary">
            <v-toolbar-title>취운화 연락처 / Contacts</v-toolbar-title>
            <v-spacer />
            <v-toolbar-items>
              <v-icon>mdi-phone</v-icon>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <v-list>
              <v-subheader>채널 취운화 구독하세요</v-subheader>
              <v-list-item v-for="ch in socials" :key="`subs-channel.${ch.channel}`" :href="ch.href" color="primary" :title="ch.channel">
                <v-list-item-avatar><v-icon color="secondary">{{ ch.icon }}</v-icon></v-list-item-avatar>
                <v-list-item-title>{{ ch.channel }}</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-divider />
            <v-subheader>지금 바로 주문/문의 주세요</v-subheader>
            <v-list>
              <v-list-item title="카카오톡 채널 문의"
                target="_blank" href="https://pf.kakao.com/_KYqDT/chat">
                <v-list-item-avatar><v-icon color="primary">mdi-chat</v-icon></v-list-item-avatar>
                <v-list-item-title>카카오톡 채널 문의</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" lg="4">
        <v-card elevation="1">
          <v-toolbar dark flat color="secondary">
            <v-toolbar-title>주문 안내</v-toolbar-title>
            <v-spacer />
            <v-toolbar-items>
              <v-icon>mdi-go-kart</v-icon>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            - 주문시 참고사항


          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" lg="4">
        <v-card elevation="1">
          <v-toolbar dark flat color="secondary">
            <v-toolbar-title>자주 묻는 질문</v-toolbar-title>
            <v-spacer />
            <v-toolbar-items>
              <v-icon>mdi-help</v-icon>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <v-expansion-panels popout flat multiple>
              <v-expansion-panel v-for="(q, qi) in faq" :key="`inquiry.faq-${qi}`">
                <v-expansion-panel-header>{{ q.q }}</v-expansion-panel-header>
                <v-expansion-panel-content align="left">
                  <p v-for="(a,line) in q.a.split(/[\r\n]/)" :key="`inquiry.faq-${qi}:${line}`">{{ a }}</p>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
 
<script>
import logo_raster from '@/assets/logo.png'
import channels from '@/channels'
import questionares from '@/faq'

export default {
    path: 'inquiry',
    name: 'inquiry',
    routeTitle: '문의',
    data() {
      return {
        socials: channels,
        logo_image: logo_raster,
        faq: questionares
      }
    }
}
</script>