<template>
  <v-container>
    <!-- grid gallery -->
    <v-row>
      <v-col>
        <v-card elevation="1">
          <v-item-group>
            <v-row class="mx-auto mx-2">
              <template v-for="(img,ii) in images">
                <v-col cols="12" sm="6" md="4" lg="3" xl="2" :key="`gallery-img.${ii}`">
                  <v-img :src="img.asset" :title="img.desc"
                    @mouseover="hover_image=img"
                    @click="selected_image=img" />
                </v-col>
              </template>
            </v-row>
          </v-item-group>
          <v-card-text>
            <v-divider />
            <!-- selected tabs -->
            <v-expansion-panels mandatory accordion flat multiple>
              <v-expansion-panel v-for="g in tags" :key="`exp-tag.${g.grp}`" flat>
                <v-expansion-panel-header>
                  <span>
                    {{ g.grp }} 
                  </span>
                  <span v-if="g.selected" align="center" justify="center">
                    <v-chip  color="secondary" :title="g.selected.en"
                      style="margin-left: 12px; max-width: 20vw;"
                      @click.stop="toggle_tag(g, g.selected)">
                      {{ g.selected.ko }}
                    </v-chip>
                  </span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-chip-group>
                    <v-chip v-for="tg in g.tags" :key="`exp-tag.${g.grp}-${tg.ko}`" 
                    :color="`${g.selected == tg ? 'secondary' : 'default' }`" :title="tg.en" @click="toggle_tag(g,tg)">
                      {{ tg.ko }}
                    </v-chip>
                  </v-chip-group>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- about 취운화 -->
    <v-row>
      <v-col>
        <v-card elevation="1">
          <v-card-text>
            <v-row class="mx-auto mx-2"> 
              <v-col cols="12" md="6" lg="4">
                <img :src="logo" width="69%" />
              </v-col>
              <v-col cols="12" md="6" lg="8">
                <h2 class="font-title" color="accent">취운화는 말이지</h2>
                <div>
                  취운화는 어쩌구저쩌구
                </div>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn @click="$router.push('/inquiry')" text outlined large color="primary" class="font-title"><v-icon>mdi-chat</v-icon> 문의하러 가기</v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-if="show_image_dialog" v-model="show_image_dialog">
      <v-card style="width: 90vw; max-width: 1200px; max-height: 95vh; overflow-x: hidden;">
        <!-- TODO: image resize -->
        <v-img :src="selected_image.asset" contain style="width: 100%; max-height: 75%;" />
        <v-card-text dark>
          {{ selected_image.desc }}
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text outlined @click="selected_image=null" color="primary">
            <v-icon color="primary">mdi-close-circle</v-icon>
            <span class="d-none d-md-inline-flex">닫기</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
 
<script>
import gallerySettings from '@/assets/gallery/gallery'
import logoImage from '@/assets/logo.svg'

const dummy_tag_group = [
  {grp:'형태', tags: [
    {ko: '묶은 꽃', en: 'Hand-tied'}, 
    {ko: '꽂은 꽃', en: 'Vase/Pieces'}, 
    {ko: '담은 꽃', en: 'Box/Basket'}, 
    {ko: '공간 꽃', en: 'Space Deco'},
  ],},
  {grp:'시즌', tags: [
    {ko: '봄', en: 'Spring'},
    {ko: '여름', en: 'Summer'},
    {ko: '가을', en: 'Fall'},
    {ko: '겨울', en: 'Winter'}
  ],},
  {grp:'테마', tags: [
    {ko: '결혼', en: 'Wedding'},
    {ko: '시작', en: 'Beginning'},
    {ko: '고백', en: 'Propose'},
    {ko: '기념', en: 'Celebrate'},
    {ko: '선물', en: 'Gift'},
    {ko: '축하', en: 'Congraturate'},
    {ko: '감사', en: 'Thanks'},
    {ko: '위로', en: 'Encourage'},
    {ko: '기원', en: 'Wish'},
  ],},
  {grp:'받는이', tags: [
    {ko: '연인', en: 'Love'},
    {ko: '부모', en: 'Parents'},
    {ko: '가족', en: 'Family'},
    {ko: '친지', en: 'Relative'},
    {ko: '친구', en: 'Friend'},
    {ko: '선생님', en: 'Teacher'},
    {ko: '동료', en: 'Colleague'},
  ]},
]

export default {
  path: '/',
  name: 'index',
  computed: {
    show_image_dialog: {
      get() { return this.selected_image != null },
      set(v) { if(!v) this.selected_image = null },
    }
  },
  methods: {
    toggle_tag(grp, tag) {
      // toggle
      if(grp.selected == tag) {
        grp.selected = null;
      } else {
        grp.selected = tag;
      }
      // update binding
      this.tags = Object.assign({}, this.tags);
    }
  },
  data() {
    return {
      selected_tags: {},
      selected_image: null,
      hover_image: null,
      tags: dummy_tag_group,
      images: gallerySettings.images,
      logo: logoImage,
    }
  }
}
</script>

<style>
div.v-carousel {
  width: 100%;
  height: initial !important;
  min-height: 50vh;
}
div.v-image.v-responsive {
  height: initial !important;
  max-height: 75vh;
}
</style>