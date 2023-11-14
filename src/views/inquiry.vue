<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="6" xl="4">
        <v-card elevation="0">
          <v-toolbar dark flat color="primary">
            <v-toolbar-title class="font-subtitle" style="font-weight: 300;">취운화 연락처 / Contacts</v-toolbar-title>
            <v-spacer />
            <v-toolbar-items>
              <v-icon>mdi-phone</v-icon>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <!-- 채널 구독 settings.brand.channels -->
            <v-list>
              <v-subheader>채널 취운화 구독하세요</v-subheader>
              <v-list-item v-for="ch in channels" :key="`subs-channel.${ch.title}`" 
                target="_blank" :href="ch.href" color="primary" :title="ch.title">
                <v-list-item-avatar><v-icon color="secondary">{{ ch.icon }}</v-icon></v-list-item-avatar>
                <v-list-item-title>{{ ch.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-divider />
            <!-- 주문/문의 settings.brand.contacts -->
            <v-list>
              <v-subheader>지금 바로 주문/문의 주세요</v-subheader>
              <v-list-item v-for="c in contacts" :key="`subs-contact.${c.title}`"
                target="_blank" :href="c.href" :title="c.title">
                <v-list-item-avatar><v-icon color="primary">{{ c.icon }}</v-icon></v-list-item-avatar>
                <v-list-item-title>{{ c.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- settings.static.inquiry.guide -->
      <v-col cols="12" lg="6" xl="4">
        <v-card elevation="0">
          <v-toolbar dark flat color="primary">
            <v-toolbar-title class="font-subtitle" style="font-weight: 300;">주문 안내</v-toolbar-title>
            <v-spacer />
            <v-toolbar-items>
              <v-icon>mdi-go-kart</v-icon>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <v-expansion-panels popout flat mandatory v-if="inquiry.guide">
              <v-expansion-panel v-for="(item, ii) in inquiry.guide" :key="`inquiry-guide.${ii}`">
                <v-expansion-panel-header>{{item.title}}</v-expansion-panel-header>
                <v-expansion-panel-content >
                  <v-row>
                    <template v-if="item.images">
                      <v-col v-for="iim in item.images" :key="`inquiry-guide.${ii}.${iim}`"
                        cols="12" sm="6">
                        <v-img :src="iim" />
                      </v-col>
                    </template>
                    <template v-html="item.content"></template>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- settings.static.inquiry.faq -->
      <v-col cols="12" lg="6" xl="4">
        <v-card elevation="0">
          <v-toolbar dark flat color="primary">
            <v-toolbar-title class="font-subtitle" style="font-weight: 300;">자주 묻는 질문</v-toolbar-title>
            <v-spacer />
            <v-toolbar-items>
              <v-icon>mdi-help</v-icon>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <v-expansion-panels popout flat mandatory>
              <v-expansion-panel v-for="(item, ii) in inquiry.faq" :key="`inquiry-faq.${ii}`">
                <v-expansion-panel-header>{{item.title}}</v-expansion-panel-header>
                <v-expansion-panel-content v-html="item.content" style="text-align: left; margin: 4px;">
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
import data from '@/data';

export default {
    path: 'inquiry',
    name: 'inquiry',
    routeTitle: '문의',
    async created() {
      let settings = await data.settings;
      this.channels = settings.channels;
      this.contacts = settings.brand.contacts;
      // guide, faq required
      this.inquiry = settings.static.inquiry;



    },
    data() {
      return {
        contacts: [],
        channels: [],
        socials: {},
        faq: [],
        inquiry: {
          guide: [],
          faq: [],
        },
        // guide_images: {
        //   first: {
        //     left: guide01Left, 
        //     right: guide01Right,
        //   },
        //   second: guide02,
        //   third: guide03,
        // }
      }
    }
}
</script>

<style scoped>
.inquiry ul {
  margin-bottom: 1.5em;
  text-align: left !important;
}
</style>