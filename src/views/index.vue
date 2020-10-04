<template>
  <v-container>
    <!-- grid gallery -->
    <v-row>
      <v-col>
        <v-card elevation="0">
          <v-item-group>
            <v-row class="mx-auto mx-2">
              <template v-if="0<gallery.length">
                <template v-for="(img,ii) in gallery">
                  <v-col cols="12" sm="6" md="4" lg="3" xl="2" :key="`gallery-img.${ii}`">
                    <v-img :src="img.asset" :title="img.desc"
                      @mouseover="hover_image=img"
                      @click="selected_image=img" />
                  </v-col>
                </template>
              </template>
              <template v-else>
                <v-col cols="12" sm="6" md="4" lg="3" xl="2" class="d-flex justify-self-center">
                  <h3>선택한 조건의 이미지가 없습니다</h3>
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
                  <span color="primary" class="font-subtitle">
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
                    :disabled="!enable_tag(tg)"
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

    <v-divider />

    <!-- about 취운화 -->
    <v-row>
      <v-col>
        <v-card elevation="0">
          <v-card-text>
            <v-row class="mx-auto mx-2"> 
              <v-col cols="12" md="6" lg="4">
                <img :src="logo" width="60%" style="max-width: 256px;" />
              </v-col>
              <v-col cols="12" md="6" lg="8">
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
                  <h2 class="font-title" color="primary" style="width: 100%; text-align: left; line-height: 1.5em;">꽃과 풀 열매로<br />크고 작은 공간을 구성합니다</h2>
                  <p>&nbsp;</p>
                  <div style="width: 100%; text-align: left;" class="font-subtitle">
                    <p style="width: 80%; margin-right: auto; word-break: word;">
                      푸른빛 구름이라는 뜻을 지닌 <span style="color: primary; font-weight: 900;">'취운'</span>은 저의 오랜 이름입니다.
                    푸르게 빛나다 자연스럽게 흩어지는 구름처럼,
                    피어나고 사라지는 꽃들의 가장 아름다운 때를 전해드리고 싶습니다</p>
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
import logo_raster from '@/assets/logo.512.png'
const galleryMax = 24;

export default {
  path: '/',
  name: 'index',
  computed: {
    show_image_dialog: {
      get() { return false; },
      set(v) { if(!v) this.selected_image = null },
    },
    selected_tags() {
      return this.tags.map((grp)=>grp.selected)
        .filter((tag)=>tag!=null);
    },
    filtered_images() {
      let basis = Object.assign([],this.images);
      window.console.log(this.selected_tags);

      if(0<this.selected_tags.length) {
        basis = basis.filter((img)=>
            this.selected_tags.reduce((g,t)=> g && img.tags.includes(t.ko), true))
      }
      return basis.sort(()=>Math.random()-.5);
    },
    gallery() {
      return this.filtered_images
        .slice(0, galleryMax);
    },
  },
  methods: {
    enable_tag(tag) {
      return this.filtered_images
        .reduce((g,im)=>g || im.tags.includes(tag.ko), false);
    },
    toggle_tag(grp, tag) {
      // toggle
      if(grp.selected == tag) {
        grp.selected = null;
      } else {
        grp.selected = tag;
      }
      // update binding
      this.tags = Object.assign([], this.tags);
    }
  },
  data() {
    return {
      selected_image: null,
      hover_image: null,
      tags: Object.assign([],gallerySettings.tags),
      images: gallerySettings.images,
      logo: logo_raster,
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